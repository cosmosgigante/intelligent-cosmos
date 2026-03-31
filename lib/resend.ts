import { Resend } from 'resend';

/** Returns a Resend client — only call inside a request handler so the env var is optional at build time. */
export function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY is not configured.');
  return new Resend(key);
}
