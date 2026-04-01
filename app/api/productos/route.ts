import { NextResponse } from 'next/server';
import products from '@/data/products';

// ❌ ELIMINADO edge runtime (rompía Cloudflare)
// export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const category = searchParams.get('category')?.trim();
    const status = searchParams.get('status')?.trim();

    let filtered = products;

    if (category) {
      filtered = filtered.filter(
        (p) => p.category?.toLowerCase() === category.toLowerCase()
      );
    }

    if (status) {
      filtered = filtered.filter(
        (p) => p.status === status
      );
    }

    return NextResponse.json({
      success: true,
      products: filtered,
      total: filtered.length,
    });

  } catch (error) {
    console.error('[Products API error]', error);

    return NextResponse.json(
      { success: false, message: 'Error al obtener productos.' },
      { status: 500 }
    );
  }
}