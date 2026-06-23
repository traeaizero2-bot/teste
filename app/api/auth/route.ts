import { NextRequest, NextResponse } from 'next/server';
import {
  clearAdminSession,
  getAdminSession,
  setAdminSession,
} from '@/lib/admin-session';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const session = getAdminSession(request);

  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({
    authenticated: true,
    username: session.username,
  });
}

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUsername || !adminPassword) {
    return NextResponse.json(
      { success: false, message: 'Credenciais do admin não configuradas.' },
      { status: 500 }
    );
  }

  if (username === adminUsername && password === adminPassword) {
    const response = NextResponse.json({ success: true });
    setAdminSession(response, adminUsername);
    return response;
  }

  return NextResponse.json(
    { success: false, message: 'Credenciais inválidas' },
    { status: 401 }
  );
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  clearAdminSession(response);
  return response;
}
