// lib/clinic.ts
import { prisma } from '@/lib/prisma';

export const getVetById = async (id: string) => {
  try {
    const vets = await prisma.veterinarian.findUnique({
      where: { id },
    });
    if (!vets) {
      throw new Error('Veterinarian not found');
    }
  
    return vets;
  } catch (error) {
    console.error('Erro ao buscar clínica:', error);
    return null;
  }
};
