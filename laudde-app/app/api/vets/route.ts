// app/api/clinics/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const vets = await prisma.veterinarian.findMany({
      include: {
        user: true,
      },
    });

    return NextResponse.json(vets);
  } catch (error) {
    console.error('Error fetching veterinarians:', error);
    return NextResponse.json({ error: 'Failed to fetch veterinarians' }, { status: 500 });
  }
}

// export async function POST(req: Request) {
export async function POST(req: Request) {
 const body = await req.json();

  try {
    const vet = await prisma.veterinarian.create({
      data: {
        id: body.id,
        name: body.name,
        email: body.email,
        crmNumber: body.crmNumber,
        phone: body.phone,
        userId: '22222222-2222-2222-2222-222222222222',
        whatsapp: body.whatsapp,
    },
    });
    console.log('Veterinarian created:', vet);

    return NextResponse.json(vet, { status: 201 });
  } catch (error) {
    console.error('Error creating veterinarian:', error);
    return NextResponse.json({ error: 'Failed to create veterinarian' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const body = await req.json();

  try {
    const vet = await prisma.veterinarian.update({
      where: { id: body.id },
      data: {
        name: body.name,
        email: body.email,
        crmNumber: body.crmNumber,
        phone: body.phone,
        whatsapp: body.whatsapp,
      },
    });

    return NextResponse.json(vet, { status: 200 });
  } catch (error) {
    console.error('Error updating veterinarian:', error);
    return NextResponse.json({ error: 'Failed to update veterinarian' }, { status: 500 });
  }
}
