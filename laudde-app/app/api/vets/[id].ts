import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  try {
    const vet = await prisma.veterinarian.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });

    if (!vet) {
      return NextResponse.json({ error: 'Veterinarian not found' }, { status: 404 });
    }

    return NextResponse.json(vet);
  } catch (error) {
    console.error('Error fetching veterinarian:', error);
    return NextResponse.json({ error: 'Failed to fetch veterinarian' }, { status: 500 });
  }
}