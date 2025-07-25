import { prisma } from '@/lib/prisma'
import { UserRole } from '@prisma/client'

interface UserInput {
  name: string
  email: string
  password: string
  role: UserRole
}

export const userService = {
  create: async (data: UserInput) => {
    return prisma.user.create({
      data,
    })
  },

  getAll: async () => {
    return prisma.user.findMany({
      include: {
        profile: true,
      },
      orderBy: { createdAt: 'desc' },
    })
  },

  update: async (id: string, data: Partial<UserInput>) => {
    return prisma.user.update({
      where: { id },
      data,
    })
  },

  delete: async (id: string) => {
    return prisma.user.delete({
      where: { id },
    })
  },
}
