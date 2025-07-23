'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
// import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  GripVertical,
  Edit,
  Trash2,
  TableIcon,
  ChevronUp,
  ChevronDown,
  CodeXml,
} from 'lucide-react'
import type { Field } from '@/lib/mocks/types'
import { useModelStore } from '@/lib/stores/model-store'
import { FieldEditDialog } from './field-edit-dialog'
import { TableEditor } from './table-editor'
import { useState, useRef } from 'react'
import { TextAlignmentControl } from './text-alignment-control'
import { TextFormattingToolbar } from './text-formatting-toolbar'
import { FormattedTextPreview } from './formatted-text-preview'
import { Textarea } from '@/components/ui/textarea'
import { VariableEditorSheet } from './variable-inspector-sheet'

interface SortableFieldItemProps {
  field: Field
  modelId: string
}

export function SortableFieldItem({ field, modelId }: SortableFieldItemProps) {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isTableEditorOpen, setIsTableEditorOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isVariableSheetOpen, setIsVariableSheetOpen] = useState(false)

  const { removeField, updateField } = useModelStore()

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: field.id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'textarea':
        return 'bg-blue-100 text-blue-800'
      case 'number':
        return 'bg-green-100 text-green-800'
      case 'table':
        return 'bg-purple-100 text-purple-800'
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
      default:
        return type
    }
  }

  const handleFieldUpdate = (key: keyof Field, value: any) => {
    updateField(modelId, field.id, { [key]: value })
  }

  const templateContentRef = useRef<HTMLTextAreaElement>(
    null
  ) as React.RefObject<HTMLTextAreaElement>
  const [showFormattingToolbar, setShowFormattingToolbar] = useState(true)

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
              <button
                className="cursor-grab text-blue-400 hover:text-blue-600 active:cursor-grabbing"
                {...attributes}
                {...listeners}
              >
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
                {isCollapsed ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronUp className="h-4 w-4" />
                )}
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

          {/* Conteúdo colapsável */}
          {!isCollapsed && (
            <>
              {/* titulo */}
              <div className="min-w-0 flex-1">
                <label className="text-sm font-medium text-blue-700">Descrição do Título</label>
                <div className="mb-2 mt-2 flex flex-wrap items-center gap-2">
                  {/* {field.required && (
                  <Badge variant="destructive" className="text-xs">
                    Obrigatório
                  </Badge>
                )} */}

                  <Input
                    value={field.name}
                    onChange={(e) => handleFieldUpdate('name', e.target.value)}
                    className="h-auto bg-transparent py-2 font-medium text-blue-900 focus-visible:ring-1 focus-visible:ring-blue-500"
                    placeholder="Nome do campo"
                  />
                </div>
              </div>
              {/* tipo */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-700">Tipo</label>
                  <Select
                    value={field.type}
                    onValueChange={(value) => handleFieldUpdate('type', value)}
                  >
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="textarea">Texto (Textarea)</SelectItem>
                      <SelectItem value="number">Número</SelectItem>
                      <SelectItem value="table">Tabela</SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}

                {/* <div className="flex items-center space-x-2">
                  <Switch
                    id={`required-${field.id}`}
                    checked={field.required}
                    onCheckedChange={(checked) => handleFieldUpdate('required', checked)}
                  />
                  <label
                    htmlFor={`required-${field.id}`}
                    className="text-sm font-medium text-blue-700"
                  >
                    Obrigatório
                  </label>
                </div> */}
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label className="text-sm font-medium text-blue-700">Subtítulo</label>
                  <TextAlignmentControl
                    value={field.descriptionAlignment || 'left'}
                    onChange={(alignment) => handleFieldUpdate('descriptionAlignment', alignment)}
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

              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label className="text-sm font-medium text-blue-700">Conteúdo Padrão</label>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsVariableSheetOpen(true)}
                      className="text-xs"
                    >
                      <CodeXml className="h-4 w-4" />
                      template
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowFormattingToolbar(!showFormattingToolbar)}
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
                  <div className="space-y-1 md:hidden">
                    <label className="text-xs font-medium text-blue-600">Preview:</label>
                    <div className="rounded border border-gray-200 bg-gray-50 p-2 text-sm">
                      <FormattedTextPreview text={field.templateContent} />
                    </div>
                  </div>
                )}
              </div>

              {field.type === 'table' && field.tableContent && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-700">Preview da Tabela</label>
                  <div className="rounded border border-blue-200 bg-blue-50 p-2">
                    {(() => {
                      try {
                        const tableData = JSON.parse(field.tableContent)
                        if (tableData.headers && tableData.rows) {
                          return (
                            <div className="overflow-x-auto">
                              <table className="w-full text-xs">
                                <thead>
                                  <tr>
                                    {tableData.headers.map((header: string, index: number) => (
                                      <th
                                        key={index}
                                        className="border border-blue-300 bg-blue-100 p-1"
                                      >
                                        {header}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {tableData.rows
                                    .slice(0, 2)
                                    .map((row: string[], rowIndex: number) => (
                                      <tr key={rowIndex}>
                                        {row.map((cell: string, cellIndex: number) => (
                                          <td
                                            key={cellIndex}
                                            className="border border-blue-300 p-1"
                                          >
                                            {cell}
                                          </td>
                                        ))}
                                      </tr>
                                    ))}
                                </tbody>
                              </table>
                              {tableData.rows.length > 2 && (
                                <p className="mt-1 text-xs text-blue-600">
                                  +{tableData.rows.length - 2} linhas...
                                </p>
                              )}
                            </div>
                          )
                        }
                      } catch {
                        return <p className="text-xs text-red-600">Formato de tabela inválido</p>
                      }
                      return <p className="text-xs text-blue-600">Tabela não configurada</p>
                    })()}
                  </div>
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
      <VariableEditorSheet
        open={isVariableSheetOpen}
        onOpenChange={setIsVariableSheetOpen}
        template={field.templateContent || ''}
      />
    </>
  )
}
