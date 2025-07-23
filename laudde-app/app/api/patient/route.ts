import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const patients = await prisma.patient.findMany({
      include: {
        patientOwner: true,
      },
    })

    return NextResponse.json(patients, { status: 200 })
  } catch (error) {
    console.error('Error fetching pacientes:', error)
    return NextResponse.json({ error: 'Failed to fetch pacientes' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const patient = await prisma.patient.create({
      data: {
        name: body.name,
        species: body.species,
        breed: body.breed,
        sex: body.sex,
        age: body.age,
        ageUnit: body.ageUnit,
        weight: body.weight,
        weightUnit: body.weightUnit,
        ownerName: body.ownerName,
        ownerPhone: body.ownerPhone,
        userId: '22a8ab94-b684-45e5-a484-9417ec1d6176',
        patientOwnerId: body.tutorId, // Assuming you have this field in your request body
      },
    })
    console.log('Veterinarian created:', patient)

    return NextResponse.json(patient, { status: 201 })
  } catch (error) {
    console.error('Error creating veterinarian:', error)
    return NextResponse.json({ error: 'Failed to create veterinarian' }, { status: 500 })
  }
}
