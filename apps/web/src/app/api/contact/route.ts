import { NextResponse } from 'next/server';
import { leadInputSchema } from '@agency/types';
import { processLead } from '@/lib/leads/submit';

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid JSON body.' }, { status: 400 });
  }

  const parsed = leadInputSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: 'Validation failed.',
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  // Honeypot — pretend success without doing anything.
  if (parsed.data.website) {
    return NextResponse.json({ success: true });
  }

  const referer = request.headers.get('referer') ?? undefined;
  const result = await processLead(parsed.data, referer);

  return NextResponse.json(
    { success: result.ok, message: result.error },
    { status: result.ok ? 200 : 502 }
  );
}
