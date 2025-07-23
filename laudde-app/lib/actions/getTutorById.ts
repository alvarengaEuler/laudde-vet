// lib/clinic.ts
import { prisma } from '@/lib/prisma'

export const getTutorById = async (id: string) => {
  try {
    const tutor = await prisma.patientOwner.findUnique({
      where: { id },
      include: {
        patients: true,
      },
    })
    if (!tutor) {
      throw new Error('Veterinarian not found')
    }

    return tutor
  } catch (error) {
    console.error('Erro ao buscar clínica:', error)
    return null
  }
}
