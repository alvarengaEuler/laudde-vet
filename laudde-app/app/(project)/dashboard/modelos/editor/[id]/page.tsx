'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useModelStore } from '@/lib/stores/model-store'
import { Button } from '@/components/ui/button'
import { FieldEditor } from '@/components/modelos/editor/field-editor'
import { ModelPreview } from '@/components/modelos/editor/model-preview'
import { ModelJsonViewer } from '@/components/modelos/editor/model-json.viewer'
import { ToolBar } from '@/components/modelos/editor/toolbar'

export default function EditorPage() {
  const params = useParams()
  const router = useRouter()
  const modelId = params.id as string

  const {
    models,
    updateModel,
    addField,
    addModel, // <- nova função da store
  } = useModelStore()

  const [loading, setLoading] = useState(true)
  const [showPreview, setShowPreview] = useState(false)
  const [showJsonViewer, setShowJsonViewer] = useState(false)

  const model = models.find((m) => m.id === modelId)

  useEffect(() => {
    if (!modelId || model) {
      setLoading(false)
      return
    }

    const fetchModelById = async () => {
      try {
        const res = await fetch(`/api/models/${modelId}`)
        if (!res.ok) throw new Error('Erro ao buscar modelo')

        const data = await res.json()

        const normalized = {
          id: data.id,
          name: data.title,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          fields: Array.isArray(data.fields)
            ? data.fields
            : Object.entries(data.fields || {}).map(([key, value]) => ({
                id: key,
                name: value,
                type: 'textarea',
                required: false,
              })),
        }

        addModel(normalized)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchModelById()
  }, [modelId, model, addModel])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-slate-50">
        <p className="text-blue-800">Carregando modelo...</p>
      </div>
    )
  }

  if (!model) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-blue-900">Modelo não encontrado</h1>
          <Button onClick={() => router.push('/')} className="bg-blue-600 hover:bg-blue-700">
            Voltar à lista
          </Button>
        </div>
      </div>
    )
  }

  const handleNameChange = (name: string) => {
    updateModel(modelId, { name })
  }

  const handleAddField = () => {
    addField(modelId)
  }

  const saveTemplate = async () => {
    const payload = {
      name: model.name,
      fields: model.fields,
    }

    const response = await fetch('/api/models', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      alert('Template salvo com sucesso!')
    } else {
      alert('Erro ao salvar template')
    }
  }

  return (
    <div className="mt-8 min-h-screen md:mt-0">
      <div className="container mx-auto py-6">
        <ToolBar
          handleNameChange={handleNameChange}
          handleAddField={handleAddField}
          showPreview={showPreview}
          setShowPreview={setShowPreview}
          model={model}
          lastSaved={null}
          saving={false}
          setShowJsonViewer={setShowJsonViewer}
          modelId={modelId}
          openJsonViewer={() => setShowJsonViewer(true)}
          backButton={() => router.back()}
          handleSaveModel={saveTemplate}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <FieldEditor modelId={modelId} />
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-6">
              <ModelPreview model={model} />
            </div>
          </div>
        </div>
      </div>

      <ModelJsonViewer model={model} open={showJsonViewer} onOpenChange={setShowJsonViewer} />
    </div>
  )
}
