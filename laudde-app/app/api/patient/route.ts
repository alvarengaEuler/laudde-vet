import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const vets = await prisma.patient.findMany();

    return NextResponse.json(vets);
  } catch (error) {
    console.error('Error fetching veterinarians:', error);
    return NextResponse.json({ error: 'Failed to fetch veterinarians' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const vet = await prisma.patient.create({
      data: {
        name: body.name,
        species: body.species,
        breed: body.breed,
        sex: body.sex,
        age: body.age,
        ageUnit: body.ageUnit,
        weight: body.weight,
        ownerName: body.ownerName,
        ownerPhone: body.ownerPhone,
        userId: '22a8ab94-b684-45e5-a484-9417ec1d6176',

      },
    });
    console.log('Veterinarian created:', vet);

    return NextResponse.json(vet, { status: 201 });
  } catch (error) {
    console.error('Error creating veterinarian:', error);
    return NextResponse.json({ error: 'Failed to create veterinarian' }, { status: 500 });
  }
}

