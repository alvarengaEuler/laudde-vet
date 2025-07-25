import { prisma } from '@/lib/prisma'

interface UserProfileInput {
  userId: string
  name: string
  cnpj?: string
  CRMV?: string
  phone?: string
  instagramHandle?: string
  instagramURL?: string
  twitterHandle?: string
  twitterURL?: string
  websiteHandle?: string
  websiteURL?: string
  address?: string
  city?: string
  state?: string
  profilePictureURL?: string
  logoPictureURL?: string
  signaturePictureURL?: string
}

export const userProfileService = {
  create: async (data: UserProfileInput) => {
    return prisma.userProfile.create({
      data,
    })
  },

  getAll: async () => {
    return prisma.userProfile.findMany({
      include: {
        user: true,
      },
      orderBy: { createdAt: 'desc' },
    })
  },

  getById: async (id: string) => {
    return prisma.userProfile.findUnique({
      where: { id },
    })
  },

  update: async (id: string, data: Partial<UserProfileInput>) => {
    return prisma.userProfile.update({
      where: { id },
      data,
    })
  },

  delete: async (id: string) => {
    return prisma.userProfile.delete({
      where: { id },
    })
  },
}
