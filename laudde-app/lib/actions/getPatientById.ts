// lib/clinic.ts
import { prisma } from '@/lib/prisma'

export const getPatientById = async (id: string) => {
  try {
    const patient = await prisma.patient.findUnique({
      where: { id },
    })
    if (!patient) {
      throw new Error('Veterinarian not found')
    }

    return patient
  } catch (error) {
    console.error('Erro ao buscar clínica:', error)
    return null
  }
}
