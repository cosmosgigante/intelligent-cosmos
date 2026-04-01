import { NextResponse } from 'next/server';
import { isValidEmail } from '@/lib/utils';
import { getResend } from '@/lib/resend';

// ❌ SACAMOS edge runtime (rompía Cloudflare)
// export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 🧠 Sanitización básica
    const name = body?.name?.trim() || '';
    const email = body?.email?.trim() || '';
    const company = body?.company?.trim() || '';
    const service = body?.service?.trim() || '';
    const message = body?.message?.trim() || '';

    // ─── Validation ───────────────────────────────────────────────────────
    const errors: string[] = [];

    if (!name) errors.push('El nombre es requerido.');
    if (!email) errors.push('El email es requerido.');
    else if (!isValidEmail(email)) errors.push('El email no es válido.');
    if (!message) errors.push('El mensaje es requerido.');
    if (message.length < 10) errors.push('El mensaje debe tener al menos 10 caracteres.');

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, message: errors[0] },
        { status: 422 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;

    // ─── Send email via Resend ────────────────────────────────────────────
    if (toEmail && process.env.RESEND_API_KEY) {
      const resend = getResend();

      const safeMessage = message.replace(/\n/g, '<br>');

      const { error } = await resend.emails.send({
        from: 'CONVAL Contact <onboarding@resend.dev>',
        to: [toEmail],
        replyTo: email,
        subject: `[CONVAL] Nuevo contacto de ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6c63ff;">Nuevo mensaje de contacto</h2>
            <table style="width:100%; border-collapse: collapse;">
              <tr><td style="padding:8px 0; color:#666; width:120px;">Nombre:</td><td><strong>${name}</strong></td></tr>
              <tr><td style="padding:8px 0; color:#666;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
              ${company ? `<tr><td style="padding:8px 0; color:#666;">Empresa:</td><td>${company}</td></tr>` : ''}
              ${service ? `<tr><td style="padding:8px 0; color:#666;">Servicio:</td><td>${service}</td></tr>` : ''}
            </table>
            <hr style="margin: 16px 0; border-color: #eee;" />
            <h4 style="color:#333;">Mensaje:</h4>
            <p style="color:#444; line-height:1.6;">${safeMessage}</p>
            <hr style="margin: 24px 0; border-color: #eee;" />
            <p style="font-size:12px; color:#999;">Enviado desde el formulario de contacto de CONVAL</p>
          </div>
        `,
      });

      if (error) {
        console.error('[Resend error]', error);
        return NextResponse.json(
          { success: false, message: 'Error al enviar el mensaje. Intente nuevamente.' },
          { status: 500 }
        );
      }
    } else {
      // 🧠 Modo dev seguro
      console.info('[ContactForm] Submission (no email configured):', {
        name,
        email,
        company,
        service,
        message,
      });
    }

    return NextResponse.json({
      success: true,
      message: '¡Mensaje enviado! Te respondemos en menos de 24 hs.',
    });

  } catch (err) {
    console.error('[ContactForm] Unexpected error:', err);
    return NextResponse.json(
      { success: false, message: 'Error interno del servidor.' },
      { status: 500 }
    );
  }
}