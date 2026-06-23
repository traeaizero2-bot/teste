import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import fallbackData from '@/content/data.json';
import { isAdminAuthenticated } from '@/lib/admin-session';
import {
  getSupabaseServerClient,
  hasSupabaseServerConfig,
} from '@/lib/supabase/server';

function throwIfError(
  error: { message?: string } | null,
  context: string
): asserts error is null {
  if (error) {
    throw new Error(`${context}: ${error.message || 'erro desconhecido'}`);
  }
}

export async function GET() {
  if (!hasSupabaseServerConfig()) {
    return NextResponse.json(fallbackData);
  }

  try {
    const supabase = getSupabaseServerClient();

    // Fetch all data from separate tables
    const [
      siteSettingsResult,
      homeContentResult,
      servicesResult,
      testimonialsResult,
      projectsResult,
      projectGalleryResult,
      aboutContentResult,
    ] = await Promise.all([
      supabase.from('site_settings').select('*').single(),
      supabase.from('home_content').select('*').single(),
      supabase.from('services').select('*').order('sort_order'),
      supabase.from('testimonials').select('*').order('sort_order'),
      supabase.from('projects').select('*').order('sort_order'),
      supabase.from('project_gallery').select('*').order('sort_order'),
      supabase.from('about_content').select('*').single(),
    ]);

    throwIfError(siteSettingsResult.error, 'Erro ao buscar configurações');
    throwIfError(homeContentResult.error, 'Erro ao buscar home');
    throwIfError(servicesResult.error, 'Erro ao buscar serviços');
    throwIfError(testimonialsResult.error, 'Erro ao buscar depoimentos');
    throwIfError(projectsResult.error, 'Erro ao buscar projetos');
    throwIfError(projectGalleryResult.error, 'Erro ao buscar galeria');
    throwIfError(aboutContentResult.error, 'Erro ao buscar sobre');

    const siteSettings = siteSettingsResult.data;
    const homeContent = homeContentResult.data;
    const services = servicesResult.data;
    const testimonials = testimonialsResult.data;
    const projects = projectsResult.data;
    const projectGallery = projectGalleryResult.data;
    const aboutContent = aboutContentResult.data;

    // Combine all data into the structure expected by the frontend
    const combinedData = {
      site: siteSettings
        ? {
            name: siteSettings.site_name,
            description: siteSettings.site_description,
          }
        : null,
      siteSettings,
      home: homeContent,
      services: services || [],
      testimonials: testimonials || [],
      projects: (projects || []).map((project) => ({
        ...project,
        galleryImages: projectGallery
          ?.filter((gallery) => gallery.project_id === project.id)
          .map((gallery) => gallery.image_url) || [],
      })),
      about: aboutContent
        ? {
            title: aboutContent.title,
            description1: aboutContent.description1,
            description2: aboutContent.description2,
            philosophy: aboutContent.philosophy,
            philosophyText: aboutContent.philosophy_text,
          }
        : null,
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

export async function PUT(request: NextRequest) {
  if (!isAdminAuthenticated(request)) {
    return NextResponse.json(
      { success: false, message: 'Não autorizado' },
      { status: 401 }
    );
  }

  if (!hasSupabaseServerConfig()) {
    return NextResponse.json(
      { success: false, message: 'Supabase não configurado no ambiente.' },
      { status: 500 }
    );
  }

  try {
    const supabase = getSupabaseServerClient();
    const newData = await request.json();

    // Update site settings
    if (newData.siteSettings) {
      const { error } = await supabase.from('site_settings').upsert([
        {
          id: 1,
          site_name: newData.siteSettings.site_name,
          site_description: newData.siteSettings.site_description,
          contact_email: newData.siteSettings.contact_email,
          whatsapp_number: newData.siteSettings.whatsapp_number,
          instagram_link: newData.siteSettings.instagram_link,
          facebook_link: newData.siteSettings.facebook_link,
          linkedin_link: newData.siteSettings.linkedin_link,
          behance_link: newData.siteSettings.behance_link,
        },
      ]);

      throwIfError(error, 'Erro ao salvar configurações');
    }

    // Update home content
    if (newData.home) {
      const { error } = await supabase.from('home_content').upsert([
        {
          id: 1,
          title: newData.home.title,
          description: newData.home.description,
        },
      ]);

      throwIfError(error, 'Erro ao salvar home');
    }

    // Update services
    if (newData.services) {
      // Delete existing services
      const { error: deleteServicesError } = await supabase
        .from('services')
        .delete()
        .not('id', 'is', null);
      throwIfError(deleteServicesError, 'Erro ao limpar serviços');

      // Insert new services
      const { error: insertServicesError } = await supabase
        .from('services')
        .insert(
        newData.services.map((service: any, index: number) => ({
          title: service.title,
          description: service.description,
          sort_order: index,
        }))
      );
      throwIfError(insertServicesError, 'Erro ao salvar serviços');
    }

    // Update testimonials
    if (newData.testimonials) {
      // Delete existing testimonials
      const { error: deleteTestimonialsError } = await supabase
        .from('testimonials')
        .delete()
        .not('id', 'is', null);
      throwIfError(deleteTestimonialsError, 'Erro ao limpar depoimentos');

      // Insert new testimonials
      const { error: insertTestimonialsError } = await supabase
        .from('testimonials')
        .insert(
        newData.testimonials.map((testimonial: any, index: number) => ({
          name: testimonial.name,
          company: testimonial.company,
          text: testimonial.text,
          sort_order: index,
        }))
      );
      throwIfError(insertTestimonialsError, 'Erro ao salvar depoimentos');
    }

    // Update projects and project gallery
    if (newData.projects) {
      // Delete existing project gallery and projects
      const { error: deleteGalleryError } = await supabase
        .from('project_gallery')
        .delete()
        .not('id', 'is', null);
      throwIfError(deleteGalleryError, 'Erro ao limpar galeria');

      const { error: deleteProjectsError } = await supabase
        .from('projects')
        .delete()
        .not('id', 'is', null);
      throwIfError(deleteProjectsError, 'Erro ao limpar projetos');

      // Insert new projects
      for (let i = 0; i < newData.projects.length; i++) {
        const project = newData.projects[i];
        const { data: insertedProject, error: insertProjectError } =
          await supabase
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
              sort_order: i,
            },
          ])
          .select()
          .single();
        throwIfError(
          insertProjectError,
          `Erro ao salvar projeto ${project.title || project.id}`
        );

        // Insert project gallery
        if (insertedProject && project.galleryImages?.length) {
          const { error: insertGalleryError } = await supabase
            .from('project_gallery')
            .insert(
            project.galleryImages.map((imageUrl: string, imgIndex: number) => ({
              project_id: insertedProject.id,
              image_url: imageUrl,
              sort_order: imgIndex,
            }))
          );
          throwIfError(
            insertGalleryError,
            `Erro ao salvar galeria do projeto ${project.title || project.id}`
          );
        }
      }
    }

    // Update about content
    if (newData.about) {
      const { error } = await supabase.from('about_content').upsert([
        {
          id: 1,
          title: newData.about.title,
          description1: newData.about.description1,
          description2: newData.about.description2,
          philosophy: newData.about.philosophy,
          philosophy_text: newData.about.philosophyText,
        },
      ]);

      throwIfError(error, 'Erro ao salvar conteúdo sobre');
    }

    return NextResponse.json({
      success: true,
      data: newData,
    });
  } catch (error) {
    console.error('Error saving data to Supabase:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao salvar dados no Supabase' },
      { status: 500 }
    );
  }
}
