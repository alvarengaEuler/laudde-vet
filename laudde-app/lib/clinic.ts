// lib/clinic.ts
import { prisma } from '@/lib/prisma';

export const getClinicById = async (id: string) => {
  try {
    const clinic = await prisma.clinic.findUnique({
      where: { id },
    });

    return clinic;
  } catch (error) {
    console.error('Erro ao buscar clínica:', error);
    return null;
  }
};
