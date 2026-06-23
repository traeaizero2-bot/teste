import { randomUUID } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/admin-session';
import {
  getSupabaseServerClient,
  hasSupabaseServerConfig,
} from '@/lib/supabase/server';

function sanitizeFileName(fileName: string) {
  const extension = fileName.includes('.')
    ? fileName.slice(fileName.lastIndexOf('.')).toLowerCase()
    : '';
  const baseName = fileName.replace(/\.[^/.]+$/, '');
  const safeBaseName =
    baseName
      .toLowerCase()
      .replace(/[^a-z0-9-_]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60) || 'imagem';

  return `${Date.now()}-${randomUUID()}-${safeBaseName}${extension}`;
}

export async function POST(request: NextRequest) {
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
    const formData = await request.formData();
    const file = formData.get('file');

    if (!(file instanceof File)) {
      return NextResponse.json(
        { success: false, message: 'Arquivo inválido.' },
        { status: 400 }
      );
    }

    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { success: false, message: 'Envie apenas imagens.' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();
    const filePath = sanitizeFileName(file.name);
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const bucketName = process.env.SUPABASE_STORAGE_BUCKET || 'portfolio-images';

    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, fileBuffer, {
        contentType: file.type,
        upsert: false,
      });

    if (error || !data) {
      throw error || new Error('Falha ao enviar arquivo para o Supabase.');
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from(bucketName).getPublicUrl(data.path);

    return NextResponse.json({
      success: true,
      path: data.path,
      publicUrl,
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    const message =
      error instanceof Error ? error.message : 'Erro ao fazer upload da imagem';

    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}
