import { NextResponse } from 'next/server';
import portfolio from '@/data/portfolio';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const featured = searchParams.get('featured');

  let filtered = portfolio;
  if (category) filtered = filtered.filter((p) => p.category === category);
  if (featured === 'true') filtered = filtered.filter((p) => p.featured);

  return NextResponse.json({ projects: filtered, total: filtered.length });
}
