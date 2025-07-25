import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { UserProfile } from '@prisma/client'
import { userProfileService } from '@/lib/services/userProfileService'

// ATENÇÃO: você deve obter o userId da sessão/autenticação
const userId = '22222222-2222-2222-2222-222222222222'

export async function PUT(req: NextRequest) {
  const body = await req.json()

  // Verificar se o usuário existe
  const userExists = await prisma.user.findUnique({ where: { id: userId } })
  if (!userExists) {
    return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 400 })
  }

  const updateData: Partial<UserProfile> = {
    name: body.name,
    phone: body.phone,
    cnpj: body.cnpj,
    CRMV: body.crm,
    pixKey: body.pixKey,
    instagramHandle: body.instagramHandle,
    instagramURL: body.instagramURL,
    twitterHandle: body.twitterHandle,
    twitterURL: body.twitterURL,
    websiteHandle: body.websiteHandle,
    websiteURL: body.websiteURL,
  }

  // Adiciona URLs somente se vierem do frontend
  if (body.avatarPictureUrl !== undefined) {
    updateData.avatarPictureUrl = body.avatarPictureUrl
  }
  if (body.logoPictureURL !== undefined) {
    updateData.logoPictureURL = body.logoPictureURL
  }
  if (body.signaturePictureURL !== undefined) {
    updateData.signaturePictureURL = body.signaturePictureURL
  }

  if (!updateData.name) {
    return NextResponse.json({ error: 'Nome é obrigatório' }, { status: 400 })
  }
  if (!updateData.phone) {
    return NextResponse.json({ error: 'Telefone é obrigatório' }, { status: 400 })
  }

  try {
    const updated = await prisma.userProfile.upsert({
      where: { userId }, // CORREÇÃO
      update: updateData,
      create: {
        ...updateData,
        userId,
        name: body.name ?? '',
      },
    })

    return NextResponse.json(updated)
  } catch (error) {
    console.error('Erro ao atualizar o perfil:', error)
    return NextResponse.json({ error: 'Erro ao atualizar o perfil' }, { status: 500 })
  }
}

export async function GET() {
  if (!userId) {
    return NextResponse.json({ error: 'Usuário não autenticado' }, { status: 401 })
  }
  try {
    const userProfile = await userProfileService.getById(userId)
    if (!userProfile) {
      return NextResponse.json({ error: 'Perfil não encontrado' }, { status: 404 })
    }
    return NextResponse.json(userProfile)
  } catch (error) {
    console.error('Erro ao buscar o perfil:', error)
    return NextResponse.json({ error: 'Erro ao buscar o perfil' }, { status: 500 })
  }
}
