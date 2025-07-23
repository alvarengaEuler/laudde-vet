import { modelTemplateService } from '@/lib/services/model-template'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  console.log('post', body)

  // Aqui você pode adicionar validações adicionais se necessário
  if (!body.name || !Array.isArray(body.fields)) {
    return NextResponse.json({ error: 'Nome e campos são obrigatórios.' }, { status: 400 })
  }

  const userId = '22222222-2222-2222-2222-222222222222' // simulado
  const created = await modelTemplateService.create(body, userId)

  return NextResponse.json(created, { status: 201 })
}

export async function GET() {
  try {
    // const models = await prisma.modelTemplate.findMany({
    //   orderBy: { createdAt: 'desc' },
    // })
    const models = await modelTemplateService.getAll()

    return NextResponse.json(models)
  } catch (error) {
    console.error('Erro ao buscar modelos:', error)
    return NextResponse.json({ error: 'Erro ao buscar modelos' }, { status: 500 })
  }
}

