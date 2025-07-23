// app/api/models/[id]/route.ts
import { prisma } from '@/lib/prisma'

import { modelTemplateService } from '@/lib/services/model-template'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const model = await prisma.modelTemplate.findUnique({
      where: { id: params.id },
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

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  const data = await req.json()

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
