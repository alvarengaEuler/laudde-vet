import { prisma } from '@/lib/prisma'
import { ExamType, ReportStatus } from '@prisma/client'

/**
 * Tipagem para criação e atualização de relatórios
 */
interface ReportInput {
  patientId: string
  clinicId: string
  examType?: ExamType
  fields?: any
  type?: string
  status?: ReportStatus
  label?: string
  accessCode?: string
  documentoPublicHash: string
  expiresAt?: Date
  maxAttempts?: number
  attemptCount?: number
  isBlocked?: boolean
}

/**
 * Função para gerar accessCode com letras e números (7 caracteres)
 */
function generateAccessCode(length: number = 7): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    result += chars[randomIndex]
  }
  return result
}

/**
 * Serviço para manipular relatórios
 */
export const reportService = {
  /**
   * Cria um novo relatório
   */
  create: async (data: ReportInput, userId: string) => {
    const accessCode = data.accessCode ?? generateAccessCode(7)

    return prisma.report.create({
      data: {
        patientId: data.patientId,
        clinicId: data.clinicId,
        userId,
        type: data.type,
        status: data.status || ReportStatus.DRAFT,
        label: data.label || 'Laudo Veterinário',
        fields: data.fields,
        accessCode,
        documentoPublicHash: data.documentoPublicHash,
        expiresAt: data.expiresAt,
        maxAttempts: data.maxAttempts ?? 5,
        attemptCount: data.attemptCount ?? 0,
        isBlocked: data.isBlocked ?? false,
      },
    })
  },

  /**
   * Retorna todos os relatórios
   */
  getAll: async () => {
    return prisma.report.findMany({
      orderBy: { createdAt: 'desc' },
    })
  },

  /**
   * Atualiza um relatório existente
   */
  update: async (id: string, data: Partial<ReportInput>) => {
    return prisma.report.update({
      where: { id },
      data,
    })
  },

  /**
   * Deleta um relatório pelo ID
   */
  delete: async (id: string) => {
    return prisma.report.delete({
      where: { id },
    })
  },
}
