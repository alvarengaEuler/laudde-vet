// app/api/models/[id]/route.ts
import { prisma } from '@/lib/prisma'

import { modelTemplateService } from '@/lib/services/model-template'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  try {
    const model = await prisma.modelTemplate.findUnique({
      where: { id: id },
    })

    if (!model) {
      return NextResponse.json({ error: 'Modelo não encontrado' }, { status: 404 })
    }

    return NextResponse.json(model)
  } catch (error) {
    console.error('Erro ao buscar modelo por ID:', error)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()

  if (!id) {
    return NextResponse.json({ error: 'ID não fornecido na URL' }, { status: 400 })
  }

  const data = await req.json()
  console.log('api id', id)
  console.log('api data', data)

  try {
    const updated = await modelTemplateService.update(id, data)
    return NextResponse.json(updated)
  } catch (error) {
    console.log('update-method', error)
    return NextResponse.json({ error: 'Failed to update template' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params

  try {
    await modelTemplateService.delete(id)
    return NextResponse.json({ message: 'Deleted successfully' })
  } catch (error) {
    console.log('delete-method', error)
    return NextResponse.json({ error: 'Failed to delete template' }, { status: 500 })
  }
}
