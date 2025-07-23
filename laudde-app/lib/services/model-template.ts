import { prisma } from '@/lib/prisma'
import { ExamType } from '@prisma/client'

export type ContentType = {
  id: string
  name: string
  type: 'textarea' | 'number' | 'table'
  defaultDescription?: string
  descriptionAlignment?: string
  required?: boolean
  templateContent?: string
  tableContent?: string
}

interface TemplateInput {
  name: string
  examType: string
  fields: ContentType[]
}

export const modelTemplateService = {
  create: async (data: any, userId: string) => {
    console.log('create modelTemplateService', data, userId)
    return prisma.modelTemplate.create({
      data: {
        title: data.name,
        examType: '',
        fields: data.fields,
        createdById: userId,
      },
    })
  },

  getAll: async () => {
    return prisma.modelTemplate.findMany({
      orderBy: { createdAt: 'desc' },
    })
  },

  delete: async (id: string) => {
    return prisma.modelTemplate.delete({
      where: { id },
    })
  },

  update: async (id: string, data: TemplateInput) => {
    return prisma.modelTemplate.update({
      where: { id },
      data: {
        title: data.name,
        examType: data.examType === 'ULTRASOUND' ? ExamType.ULTRASOUND : ExamType.X_RAY,
        fields: data.fields,
      },
    })
  },
}
