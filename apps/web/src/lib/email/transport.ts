import nodemailer, { type Transporter } from 'nodemailer';

let cached: Transporter | null = null;

export interface EmailEnv {
  host: string;
  port: number;
  user: string;
  pass: string;
  to: string;
}

/** Reads SMTP settings from the environment, or `null` if not configured. */
export function readEmailEnv(): EmailEnv | null {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_EMAIL) return null;
  return {
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
    to: CONTACT_EMAIL,
  };
}

export function getTransporter(env: EmailEnv): Transporter {
  if (cached) return cached;
  cached = nodemailer.createTransport({
    host: env.host,
    port: env.port,
    secure: env.port === 465,
    auth: { user: env.user, pass: env.pass },
  });
  return cached;
}
