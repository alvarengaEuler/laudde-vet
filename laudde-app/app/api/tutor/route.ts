import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const vets = await prisma.patientOwner.findMany({

    });

    return NextResponse.json(vets);
  } catch (error) {
    console.error('Error fetching veterinarians:', error);
    return NextResponse.json({ error: 'Failed to fetch veterinarians' }, { status: 500 });
  }
}