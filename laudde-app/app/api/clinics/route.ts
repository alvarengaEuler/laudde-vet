// app/api/clinics/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log('Received data:', body);

    const clinic = await prisma.clinic.create({
      data: {
        name: body.name,
        cnpj: body.cnpj,
        address: body.address,
        city: body.city,
        state: body.state,
        phone: body.phone,
        whatsapp: body.whatsapp,
        email: body.email,
        userId: '22222222-2222-2222-2222-222222222222',
      },
    });

    return NextResponse.json(clinic, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: 'Erro ao criar clínica', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const clinics = await prisma.clinic.findMany();

    return NextResponse.json(clinics);
  } catch (error) {
    console.error('Error fetching clinics:', error);
    return NextResponse.json({ error: 'Failed to fetch clinics' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  try {
    const clinic = await prisma.clinic.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(clinic, { status: 200 });
  } catch (error) {
    console.error('Error deleting clinic:', error);
    return NextResponse.json({ error: 'Failed to delete clinic' }, { status: 500 });
  }
}
export async function PUT(req: Request) {       
  const { id, ...data } = await req.json();

  try {
    const clinic = await prisma.clinic.update({
      where: {
        id,
      },
      data,
    });

    return NextResponse.json(clinic, { status: 200 });
  } catch (error) {
    console.error('Error updating clinic:', error);
    return NextResponse.json({ error: 'Failed to update clinic' }, { status: 500 });
  }
}
// get clinic by id
// export async function GETBYID(req: Request) {
//   const { id } = await req.json();

//   try {
//     const clinic = await prisma.clinic.findUnique({
//       where: {
//         id,
//       },
//     });

//     return NextResponse.json(clinic, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching clinic:', error);
//     return NextResponse.json({ error: 'Failed to fetch clinic' }, { status: 500 });
//   }
// }

// lib/clinic.ts


// export const getClinicById = async (id: string) => {
//   try {
//     const clinic = await prisma.clinic.findUnique({
//       where: { id },
//     });

//     return clinic;
//   } catch (error) {
//     console.error('Erro ao buscar clínica:', error);
//     return null;
//   }
// };
