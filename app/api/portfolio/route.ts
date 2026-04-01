import { NextResponse } from 'next/server';
import portfolio from '@/data/portfolio';

// ❌ ELIMINADO edge runtime (rompía Cloudflare)
// export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const category = searchParams.get('category')?.trim();
    const featured = searchParams.get('featured');

    let filtered = portfolio;

    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (featured === 'true') {
      filtered = filtered.filter((p) => p.featured === true);
    }

    return NextResponse.json({
      success: true,
      projects: filtered,
      total: filtered.length,
    });

  } catch (error) {
    console.error('[Portfolio API error]', error);

    return NextResponse.json(
      { success: false, message: 'Error al obtener el portfolio.' },
      { status: 500 }
    );
  }
}