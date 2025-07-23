'use client'

import { useRef, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Combobox } from '@/components/ui/combobox'
import type { Field } from '@/lib/mocks/types'
import { useModelStore } from '@/lib/stores/model-store'
import { fieldSuggestions } from '@/lib/mocks/field-suggestions'
import { TextAlignmentControl } from './text-alignment-control'
import { TextFormattingToolbar } from './text-formatting-toolbar'
import { FormattedTextPreview } from './formatted-text-preview'

interface FieldEditDialogProps {
  field: Field
  modelId: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function FieldEditDialog({ field, modelId, open, onOpenChange }: FieldEditDialogProps) {
  const { updateField } = useModelStore()
  const [formData, setFormData] = useState(field)

  const templateContentRef = useRef<HTMLTextAreaElement>(null)
  const [showFormattingToolbar, setShowFormattingToolbar] = useState(true)

  const handleSave = () => {
    updateField(modelId, field.id, formData)
    onOpenChange(false)
  }

  const handleFieldChange = (key: keyof Field, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-blue-900">Editar Campo</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome do Campo</Label>
            <Combobox
              value={formData.name}
              onValueChange={(value) => handleFieldChange('name', value)}
              options={fieldSuggestions}
              placeholder="Digite ou selecione um campo..."
              searchPlaceholder="Buscar campos..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Tipo do Campo</Label>
            <Select
              value={formData.type}
              onValueChange={(value) => handleFieldChange('type', value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="textarea">Texto (Textarea)</SelectItem>
                <SelectItem value="number">Número</SelectItem>
                <SelectItem value="table">Tabela</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="defaultDescription">Descrição Padrão</Label>
              <TextAlignmentControl
                value={formData.descriptionAlignment || 'left'}
                onChange={(alignment) => handleFieldChange('descriptionAlignment', alignment)}
              />
            </div>
            <Textarea
              id="defaultDescription"
              value={formData.defaultDescription || ''}
              onChange={(e) => handleFieldChange('defaultDescription', e.target.value)}
              placeholder="Descrição que aparecerá no campo..."
              rows={3}
            />
            {formData.defaultDescription && (
              <div className="rounded border border-gray-200 bg-gray-50 p-2 text-sm">
                <FormattedTextPreview
                  text={formData.defaultDescription}
                  alignment={formData.descriptionAlignment || 'left'}
                />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="templateContent">Conteúdo do Template</Label>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFormattingToolbar(!showFormattingToolbar)}
                className="text-xs"
              >
                {showFormattingToolbar ? 'Ocultar' : 'Mostrar'} Formatação
              </Button>
            </div>

            {showFormattingToolbar && (
              <TextFormattingToolbar
                textareaRef={templateContentRef}
                onTextChange={(text) => handleFieldChange('templateContent', text)}
              />
            )}

            <Textarea
              ref={templateContentRef}
              id="templateContent"
              value={formData.templateContent || ''}
              onChange={(e) => handleFieldChange('templateContent', e.target.value)}
              placeholder="Conteúdo padrão do campo..."
              rows={showFormattingToolbar ? 6 : 4}
              className="font-mono text-sm"
            />

            {formData.templateContent && (
              <div className="space-y-1">
                <Label className="text-xs">Preview:</Label>
                <div className="rounded border border-gray-200 bg-gray-50 p-2 text-sm">
                  <FormattedTextPreview text={formData.templateContent} />
                </div>
              </div>
            )}
          </div>

          {formData.type === 'table' && (
            <div className="space-y-2">
              <Label htmlFor="tableContent">Configuração da Tabela (JSON)</Label>
              <Textarea
                id="tableContent"
                value={formData.tableContent || ''}
                onChange={(e) => handleFieldChange('tableContent', e.target.value)}
                placeholder='{"headers": ["Coluna 1", "Coluna 2"], "rows": [["Valor 1", "Valor 2"]]}'
                rows={6}
                className="font-mono text-sm"
              />
            </div>
          )}

          <div className="flex items-center space-x-2">
            <Switch
              id="required"
              checked={formData.required}
              onCheckedChange={(checked) => handleFieldChange('required', checked)}
            />
            <Label htmlFor="required">Campo obrigatório</Label>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
              Salvar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
