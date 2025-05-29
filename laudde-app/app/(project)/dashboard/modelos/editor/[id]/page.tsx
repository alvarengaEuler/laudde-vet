'use client'

import { useParams, useRouter } from 'next/navigation'
import { useModelStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Eye, EyeOff, Plus, FileJson } from 'lucide-react'
import { useState } from 'react'
import { FieldEditor } from '@/components/modelos/editor/field-editor'
import { ModelPreview } from '@/components/modelos/editor/model-preview'
import { ExamTypeSelector } from '@/components/modelos/editor/exam-type-selector'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { AutoSaveIndicator } from '@/components/modelos/editor/auto-save-indicator'
import { useAutoSave } from '@/hooks/use-auto-save'
import { ModelJsonViewer } from '@/components/modelos/editor/model-json.viewer'

export default function EditorPage() {
  const params = useParams()
  const router = useRouter()
  const { models, updateModel, addField } = useModelStore()
  const [showPreview, setShowPreview] = useState(false)
  const [showJsonViewer, setShowJsonViewer] = useState(false)

  const modelId = params.id as string
  const model = models.find((m) => m.id === modelId)

  const { lastSaved, saving } = useAutoSave({
    data: model,
    onSave: (data) => {
      if (data) {
        updateModel(data.id, data)
      }
    },
    interval: 60000, // 1 minuto
  })

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => router.push('/')}
              className="text-blue-700 hover:text-blue-900"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
            <div>
              <Input
                value={model.name}
                onChange={(e) => handleNameChange(e.target.value)}
                className="h-auto border-none bg-transparent p-0 text-xl font-bold text-blue-900 focus-visible:ring-0"
                placeholder="Nome do modelo"
              />
            </div>
            <AutoSaveIndicator lastSaved={lastSaved} saving={saving} />
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-2 sm:mt-0">
            {/* Mobile preview toggle */}
            <div className="lg:hidden">
              <Sheet open={showPreview} onOpenChange={setShowPreview}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="border-blue-300">
                    {showPreview ? (
                      <EyeOff className="mr-2 h-4 w-4" />
                    ) : (
                      <Eye className="mr-2 h-4 w-4" />
                    )}
                    Visualizar
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-lg">
                  <ModelPreview model={model} />
                </SheetContent>
              </Sheet>
            </div>

            <ExamTypeSelector modelId={modelId} />

            <Button
              variant="outline"
              onClick={() => setShowJsonViewer(true)}
              className="border-blue-300 text-blue-700 hover:text-blue-900"
            >
              <FileJson className="mr-2 h-4 w-4" />
              Ver JSON
            </Button>

            <Button onClick={handleAddField} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Campo
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Editor */}
          <div className="space-y-4">
            <FieldEditor modelId={modelId} />
          </div>

          {/* Preview - Desktop only */}
          <div className="hidden lg:block">
            <div className="sticky top-6">
              <ModelPreview model={model} />
            </div>
          </div>
        </div>
      </div>

      {/* JSON Viewer Modal */}
      <ModelJsonViewer model={model} open={showJsonViewer} onOpenChange={setShowJsonViewer} />
    </div>
  )
}
