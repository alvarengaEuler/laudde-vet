import { ExamTypeSelector } from '@/components/modelos/editor/exam-type-selector'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { ArrowLeft, Eye, EyeOff, Plus, FileJson, Pencil, Save } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ModelPreview } from './model-preview'
import { Model } from '@/lib/mocks/types'

type ToolBarProps = {
  handleNameChange: (name: string) => void
  handleAddField: () => void
  handleSaveModel: () => void
  openJsonViewer?: () => void
  showPreview?: boolean
  setShowPreview?: (show: boolean) => void
  lastSaved: Date | null
  saving: boolean
  modelId: string
  model: Model
  setShowJsonViewer: (show: boolean) => void
  backButton?: () => void
}

export function ToolBar({
  handleNameChange,
  handleAddField,
  handleSaveModel,
  showPreview,
  setShowPreview,
  model,

  setShowJsonViewer,
  modelId,
  backButton,
}: ToolBarProps) {
  return (
    <div className="mb-6 mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Nome e botão de voltar */}
      <div className="flex w-full items-center gap-3">
        {backButton && (
          <Button
            variant="ghost"
            onClick={backButton}
            className="text-blue-700 hover:text-blue-900"
            aria-label="Voltar"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}

        <div className="flex max-w-full flex-1 items-center gap-2 sm:max-w-md">
          <Pencil size={16} className="text-blue-500" />
          <Input
            value={model.name}
            onChange={(e) => handleNameChange(e.target.value)}
            className="h-10 border-blue-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-900 focus-visible:ring-0"
            placeholder="Nome do modelo"
          />
        </div>
      </div>

      {/* Ações */}
      <div className="flex flex-wrap items-center gap-2 md:flex-nowrap">
        {/* Visualização mobile */}
        <div className="sm:hidden">
          <Sheet open={showPreview} onOpenChange={setShowPreview}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="border-blue-300 text-blue-700 hover:text-blue-900"
              >
                {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-lg">
              <ModelPreview model={model} />
            </SheetContent>
          </Sheet>
        </div>

        {/* Visualização desktop opcional (se necessário) */}
        <ExamTypeSelector modelId={modelId} />

        {/* JSON Viewer */}
        <Button
          variant="outline"
          onClick={() => setShowJsonViewer(true)}
          className="border-blue-300 text-blue-700 hover:text-blue-900"
          aria-label="Visualizar JSON"
        >
          <FileJson className="h-4 w-4" />
        </Button>

        {/* Adicionar campo */}
        <Button
          onClick={handleAddField}
          className="bg-blue-600 text-white hover:bg-blue-700"
          aria-label="Adicionar campo"
        >
          <Plus className="h-4 w-4" />
        </Button>

        {/* Salvar modelo */}
        <Button
          onClick={handleSaveModel}
          className="bg-blue-600 text-white hover:bg-blue-700"
          aria-label="Salvar modelo"
        >
          <Save className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
