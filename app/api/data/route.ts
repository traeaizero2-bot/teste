
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

function isAuthenticated(request: Request) {
  const cookie = request.headers.get('cookie');
  return cookie?.includes('admin_session=true');
}

export async function GET() {
  try {
    // Fetch all data from separate tables
    const [
      { data: siteSettings },
      { data: homeContent },
      { data: services },
      { data: testimonials },
      { data: projects },
      { data: projectGallery },
      { data: aboutContent }
    ] = await Promise.all([
      supabase.from('site_settings').select('*').single(),
      supabase.from('home_content').select('*').single(),
      supabase.from('services').select('*').order('sort_order'),
      supabase.from('testimonials').select('*').order('sort_order'),
      supabase.from('projects').select('*').order('sort_order'),
      supabase.from('project_gallery').select('*').order('sort_order'),
      supabase.from('about_content').select('*').single()
    ]);

    // Combine all data into the structure expected by the frontend
    const combinedData = {
      site: siteSettings ? {
        name: siteSettings.site_name,
        description: siteSettings.site_description
      } : null,
      siteSettings,
      home: homeContent,
      services: services || [],
      testimonials: testimonials || [],
      projects: (projects || []).map(project => ({
        ...project,
        galleryImages: projectGallery
          ?.filter(gallery => gallery.project_id === project.id)
          .map(gallery => gallery.image_url) || []
      })),
      about: aboutContent ? {
        title: aboutContent.title,
        description1: aboutContent.description1,
        description2: aboutContent.description2,
        philosophy: aboutContent.philosophy,
        philosophyText: aboutContent.philosophy_text
      } : null
    };

    return NextResponse.json(combinedData);
  } catch (error) {
    console.error('Error fetching data from Supabase:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao buscar dados do Supabase' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { success: false, message: 'Não autorizado' },
      { status: 401 }
    );
  }

  try {
    const newData = await request.json();

    // Update site settings
    if (newData.siteSettings) {
      await supabase.from('site_settings').upsert([
        {
          id: 1,
          site_name: newData.siteSettings.site_name,
          site_description: newData.siteSettings.site_description,
          contact_email: newData.siteSettings.contact_email,
          whatsapp_number: newData.siteSettings.whatsapp_number,
          instagram_link: newData.siteSettings.instagram_link,
          facebook_link: newData.siteSettings.facebook_link,
          linkedin_link: newData.siteSettings.linkedin_link,
          behance_link: newData.siteSettings.behance_link
        }
      ]);
    }

    // Update home content
    if (newData.home) {
      await supabase.from('home_content').upsert([
        {
          id: 1,
          title: newData.home.title,
          description: newData.home.description
        }
      ]);
    }

    // Update services
    if (newData.services) {
      // Delete existing services
      await supabase.from('services').delete().not('id', 'is', null);
      // Insert new services
      await supabase.from('services').insert(
        newData.services.map((service: any, index: number) => ({
          title: service.title,
          description: service.description,
          sort_order: index
        }))
      );
    }

    // Update testimonials
    if (newData.testimonials) {
      // Delete existing testimonials
      await supabase.from('testimonials').delete().not('id', 'is', null);
      // Insert new testimonials
      await supabase.from('testimonials').insert(
        newData.testimonials.map((testimonial: any, index: number) => ({
          name: testimonial.name,
          company: testimonial.company,
          text: testimonial.text,
          sort_order: index
        }))
      );
    }

    // Update projects and project gallery
    if (newData.projects) {
      // Delete existing project gallery and projects
      await supabase.from('project_gallery').delete().not('id', 'is', null);
      await supabase.from('projects').delete().not('id', 'is', null);

      // Insert new projects
      for (let i = 0; i < newData.projects.length; i++) {
        const project = newData.projects[i];
        const { data: insertedProject } = await supabase
          .from('projects')
          .insert([
            {
              id: project.id,
              title: project.title,
              category: project.category,
              year: project.year,
              description: project.description,
              cover_image: project.coverImage,
              client: project.client,
              objective: project.objective,
              challenge: project.challenge,
              solution: project.solution,
              sort_order: i
            }
          ])
          .select()
          .single();

        // Insert project gallery
        if (insertedProject && project.galleryImages) {
          await supabase.from('project_gallery').insert(
            project.galleryImages.map((imageUrl: string, imgIndex: number) => ({
              project_id: insertedProject.id,
              image_url: imageUrl,
              sort_order: imgIndex
            }))
          );
        }
      }
    }

    // Update about content
    if (newData.about) {
      await supabase.from('about_content').upsert([
        {
          id: 1,
          title: newData.about.title,
          description1: newData.about.description1,
          description2: newData.about.description2,
          philosophy: newData.about.philosophy,
          philosophy_text: newData.about.philosophyText
        }
      ]);
    }

    return NextResponse.json({
      success: true,
      data: newData
    });
  } catch (error) {
    console.error('Error saving data to Supabase:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao salvar dados no Supabase' },
      { status: 500 }
    );
  }
}
