import { NextResponse } from 'next/server';
import products from '@/data/products';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const status = searchParams.get('status');

  let filtered = products;
  if (category) filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  if (status)   filtered = filtered.filter((p) => p.status === status);

  return NextResponse.json({ products: filtered, total: filtered.length });
}
