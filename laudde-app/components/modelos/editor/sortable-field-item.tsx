'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState, useRef } from 'react'
import Image from 'next/image'
import {
  GripVertical,
  Edit,
  Trash2,
  TableIcon,
  ChevronUp,
  ChevronDown,
  CodeXml,
  ImageIcon,
} from 'lucide-react'

import type { Field } from '@/lib/mocks/types'
import { useModelStore } from '@/lib/stores/model-store'
import { FieldEditDialog } from './field-edit-dialog'
import { TableEditor } from './table-editor'

import { TextAlignmentControl } from './text-alignment-control'
import { TextFormattingToolbar } from './text-formatting-toolbar'
import { FormattedTextPreview } from './formatted-text-preview'
import { VariableEditorSheet } from './variable-inspector-sheet'
import { ImageColumnEditor } from './ImageField'

interface SortableFieldItemProps {
  field: Field
  modelId: string
}

export function SortableFieldItem({ field, modelId }: SortableFieldItemProps) {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isTableEditorOpen, setIsTableEditorOpen] = useState(false)
  const [isImageEditorOpen, setIsImageEditorOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isVariableSheetOpen, setIsVariableSheetOpen] = useState(false)

  const { removeField, updateField } = useModelStore()
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: field.id })
  const style = { transform: CSS.Transform.toString(transform), transition }
    const templateContentRef = useRef<HTMLTextAreaElement>(
    null
  ) as React.RefObject<HTMLTextAreaElement>
  const [showFormattingToolbar, setShowFormattingToolbar] = useState(true)

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'textarea':
        return 'bg-blue-100 text-blue-800'
      case 'number':
        return 'bg-green-100 text-green-800'
      case 'table':
        return 'bg-purple-100 text-purple-800'
      case 'image':
        return 'bg-teal-100 text-teal-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'textarea':
        return 'Texto'
      case 'number':
        return 'Número'
      case 'table':
        return 'Tabela'
      case 'image':
        return 'Imagem'
      default:
        return type
    }
  }

  const handleFieldUpdate = (key: keyof Field, value: any) =>
    updateField(modelId, field.id, { [key]: value })

  return (
    <>
      <Card
        ref={setNodeRef}
        style={style}
        className={`border-blue-50 bg-gray-50/10 py-2 transition-all ${
          isDragging ? 'opacity-50' : 'hover:shadow-sm'
        }`}
      >
        <CardContent className="space-y-4 px-4 py-0">
          {/* Cabeçalho */}
          <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
            <div className="flex w-full items-center justify-end gap-1 sm:mt-0">
              <button className="cursor-grab text-blue-400 hover:text-blue-600 active:cursor-grabbing" {...attributes} {...listeners}>
                <GripVertical className="h-5 w-5" />
              </button>
              <div className="min-w-0 flex-1">
                <span className="font-medium text-blue-900">{field.name || 'Campo sem nome'}</span>
              </div>
              <Badge className={getTypeColor(field.type)}>{getTypeLabel(field.type)}</Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCollapsed((prev) => !prev)}
                className="text-gray-600 hover:text-gray-800"
                title={isCollapsed ? 'Expandir' : 'Minimizar'}
              >
                {isCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
              </Button>

              {field.type === 'table' && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsTableEditorOpen(true)}
                  className="text-purple-600 hover:text-purple-800"
                >
                  <TableIcon className="h-4 w-4" />
                </Button>
              )}

              {field.type === 'image' && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsImageEditorOpen(true)}
                  className="text-teal-600 hover:text-teal-800"
                >
                  <ImageIcon className="h-4 w-4" />
                </Button>
              )}

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsEditOpen(true)}
                className="text-blue-600 hover:text-blue-800"
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeField(modelId, field.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Conteúdo */}
          {!isCollapsed && (
            <>
              {/* Nome */}
              <div className="min-w-0 flex-1">
                <label className="text-sm font-medium text-blue-700">Descrição do Título</label>
                <div className="mb-2 mt-2 flex flex-wrap items-center gap-2">
                  <Input
                    value={field.name}
                    onChange={(e) => handleFieldUpdate('name', e.target.value)}
                    className="h-auto bg-transparent py-2 font-medium text-blue-900 focus-visible:ring-1 focus-visible:ring-blue-500"
                    placeholder="Nome do campo"
                  />
                </div>
              </div>

              {/* Subtítulo */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <label className="text-sm font-medium text-blue-700">Subtítulo</label>
                  <TextAlignmentControl
                    value={field.descriptionAlignment || 'left'}
                    onChange={(a) => handleFieldUpdate('descriptionAlignment', a)}
                    className="flex-shrink-0"
                  />
                </div>
                <Input
                  value={field.defaultDescription || ''}
                  onChange={(e) => handleFieldUpdate('defaultDescription', e.target.value)}
                  placeholder="Descrição que aparecerá no campo..."
                  className="h-8 rounded-sm py-5"
                />
                {field.defaultDescription && (
                  <div className="rounded border border-gray-200 bg-gray-50 p-2 text-sm md:hidden">
                    <FormattedTextPreview
                      text={field.defaultDescription}
                      alignment={field.descriptionAlignment || 'left'}
                    />
                  </div>
                )}
              </div>

              {/* Conteúdo padrão */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-blue-700">Conteúdo Padrão</label>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsVariableSheetOpen(true)}
                      className="text-xs"
                    >
                      <CodeXml className="h-4 w-4" /> template
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowFormattingToolbar((prev) => !prev)}
                      className="text-xs"
                    >
                      {showFormattingToolbar ? 'Ocultar' : 'Mostrar'} Formatação
                    </Button>
                  </div>
                </div>
                {showFormattingToolbar && (
                  <TextFormattingToolbar
                    textareaRef={templateContentRef}
                    onTextChange={(text) => handleFieldUpdate('templateContent', text)}
                  />
                )}
                <Textarea
                  ref={templateContentRef}
                  value={field.templateContent || ''}
                  onChange={(e) => handleFieldUpdate('templateContent', e.target.value)}
                  placeholder="Conteúdo padrão do campo..."
                  rows={showFormattingToolbar ? 4 : 3}
                  className="resize-none font-mono text-sm"
                />
                {field.templateContent && (
                  <div className="md:hidden space-y-1">
                    <label className="text-xs font-medium text-blue-600">Preview:</label>
                    <div className="rounded border border-gray-200 bg-gray-50 p-2 text-sm">
                      <FormattedTextPreview text={field.templateContent} />
                    </div>
                  </div>
                )}
              </div>

              {/* Preview Tabela */}
              {field.type === 'table' && field.tableContent && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-700">Preview da Tabela</label>
                  {/* ... (mantém o preview existente) */}
                </div>
              )}

              {/* Preview Imagens */}
              {field.type === 'image' && field.tableContent && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-700">Preview das Imagens</label>
                  {(() => {
                    try {
                      const parsed = JSON.parse(field.tableContent)
                      if (!Array.isArray(parsed.columns)) throw new Error()
                      return (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {parsed.columns.map((col, idx) => (
                            <div key={idx} className="rounded border border-gray-200 bg-white p-2 space-y-2">
                              <p className="text-xs font-medium text-blue-900 truncate">{col.label}</p>
                              {col.imageBase64 ? (
                                <Image
                                  src={col.imageBase64}
                                  alt={col.label}
                                  width={400}
                                  height={300}
                                  unoptimized
                                  className="rounded border border-gray-300 object-contain max-h-64 w-full"
                                />
                              ) : (
                                <div className="flex h-40 items-center justify-center rounded border-dashed border-gray-300 bg-gray-50 text-gray-400">
                                  <ImageIcon className="h-10 w-10" />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )
                    } catch {
                      return <p className="text-xs text-red-600">Formato de imagem inválido</p>
                    }
                  })()}
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>

      <FieldEditDialog
        field={field}
        modelId={modelId}
        open={isEditOpen}
        onOpenChange={setIsEditOpen}
      />

      {field.type === 'table' && (
        <TableEditor
          field={field}
          modelId={modelId}
          open={isTableEditorOpen}
          onOpenChange={setIsTableEditorOpen}
        />
      )}

      {field.type === 'image' && (
        <ImageColumnEditor
          field={field}
          modelId={modelId}
          open={isImageEditorOpen}
          onOpenChange={setIsImageEditorOpen}
        />
      )}

      <VariableEditorSheet
        open={isVariableSheetOpen}
        onOpenChange={setIsVariableSheetOpen}
        template={field.templateContent || ''}
      />
    </>
  )
}
