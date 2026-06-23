
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('Missing Supabase credentials!');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

async function testUpload() {
  try {
    const imagePath = path.join(__dirname, 'public', 'images', 'Site', 'logo-doisdu.png');
    const fileName = `test-${Date.now()}-logo-doisdu.png`;
    const fileBuffer = fs.readFileSync(imagePath);

    console.log('Uploading image to Supabase Storage...');

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('portfolio-images')
      .upload(fileName, fileBuffer, {
        contentType: 'image/png'
      });

    if (error) {
      console.error('Upload error:', error);
      return;
    }

    console.log('✅ Upload successful!');

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('portfolio-images')
      .getPublicUrl(data.path);

    console.log('📸 Public URL:', publicUrl);
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testUpload();
