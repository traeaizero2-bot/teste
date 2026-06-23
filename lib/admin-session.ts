import { createHmac, timingSafeEqual } from 'crypto';
import type { NextRequest, NextResponse } from 'next/server';

const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

type AdminSessionPayload = {
  username: string;
  exp: number;
};

function getSessionSecret() {
  const secret =
    process.env.ADMIN_SESSION_SECRET ||
    process.env.ADMIN_PASSWORD ||
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!secret) {
    throw new Error('Admin session secret is not configured.');
  }

  return secret;
}

function signSessionPayload(payload: string) {
  return createHmac('sha256', getSessionSecret())
    .update(payload)
    .digest('base64url');
}

function isSafeEqual(value: string, expected: string) {
  const valueBuffer = Buffer.from(value);
  const expectedBuffer = Buffer.from(expected);

  if (valueBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(valueBuffer, expectedBuffer);
}

function getCookieOptions(maxAge = SESSION_MAX_AGE_SECONDS) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge,
  };
}

export function createAdminSessionToken(username: string) {
  const payload = Buffer.from(
    JSON.stringify({
      username,
      exp: Date.now() + SESSION_MAX_AGE_SECONDS * 1000,
    } satisfies AdminSessionPayload)
  ).toString('base64url');

  return `${payload}.${signSessionPayload(payload)}`;
}

export function verifyAdminSessionToken(token?: string | null) {
  if (!token) {
    return null;
  }

  const [encodedPayload, signature] = token.split('.');

  if (!encodedPayload || !signature) {
    return null;
  }

  const expectedSignature = signSessionPayload(encodedPayload);

  if (!isSafeEqual(signature, expectedSignature)) {
    return null;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, 'base64url').toString('utf-8')
    ) as AdminSessionPayload;

    if (!payload.username || typeof payload.exp !== 'number') {
      return null;
    }

    if (payload.exp <= Date.now()) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export function getAdminSession(request: NextRequest) {
  return verifyAdminSessionToken(
    request.cookies.get(SESSION_COOKIE_NAME)?.value
  );
}

export function isAdminAuthenticated(request: NextRequest) {
  return Boolean(getAdminSession(request));
}

export function setAdminSession(response: NextResponse, username: string) {
  response.cookies.set(
    SESSION_COOKIE_NAME,
    createAdminSessionToken(username),
    getCookieOptions()
  );
}

export function clearAdminSession(response: NextResponse) {
  response.cookies.set(SESSION_COOKIE_NAME, '', getCookieOptions(0));
}
