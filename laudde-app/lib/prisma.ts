// lib/prisma.ts
// import { PrismaClient } from '@prisma/client'
import { PrismaClient } from "@prisma/client"
// import { PrismaClient } from '@/lib/generated/prisma'


// declare global {
//   var prisma: PrismaClient | undefined
// }

// export const prisma =
//   global.prisma ||
//   new PrismaClient({
//     log: ['query'],
//   })

// if (process.env.NODE_ENV !== 'production') global.prisma = prisma
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export default prisma