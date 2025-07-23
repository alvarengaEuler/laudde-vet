'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Trash2, Save, Image as ImageIcon } from 'lucide-react'
import type { Field } from '@/lib/mocks/types'
import { useModelStore } from '@/lib/stores/model-store'

interface ImageColumn {
  label: string
  imageBase64: string | null
}

interface ImageEditorProps {
  field: Field
  modelId: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ImageColumnEditor({ field, modelId, open, onOpenChange }: ImageEditorProps) {
  const { updateField } = useModelStore()
  const [columns, setColumns] = useState<ImageColumn[]>([])

  useEffect(() => {
    if (field.tableContent) {
      try {
        const parsed = JSON.parse(field.tableContent)
        setColumns(parsed.columns || [])
      } catch {
        setColumns([{ label: 'Imagem 1', imageBase64: null }])
      }
    } else {
      setColumns([{ label: 'Imagem 1', imageBase64: null }])
    }
  }, [field.tableContent, open])

  const handleSave = () => {
    const jsonContent = JSON.stringify({ columns })
    updateField(modelId, field.id, { tableContent: jsonContent })
    onOpenChange(false)
  }

  const handleImageChange = async (index: number, file: File | null) => {
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64 = reader.result as string
      const newColumns = [...columns]
      newColumns[index].imageBase64 = base64
      setColumns(newColumns)
    }
    reader.readAsDataURL(file)
  }

  const addColumn = () => {
    setColumns([...columns, { label: `Imagem ${columns.length + 1}`, imageBase64: null }])
  }

  const removeColumn = (index: number) => {
    if (columns.length <= 1) return
    const newCols = columns.filter((_, i) => i !== index)
    setColumns(newCols)
  }

  const updateLabel = (index: number, value: string) => {
    const newCols = [...columns]
    newCols[index].label = value
    setColumns(newCols)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-blue-900">Editor de Imagens - {field.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Controles */}
          <div className="flex flex-wrap gap-2">
            <Button onClick={addColumn} variant="outline" size="sm" className="border-blue-300">
              <Plus className="mr-1 h-4 w-4" />
              Adicionar Imagem
            </Button>
          </div>

          {/* Colunas de Imagens */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {columns.map((col, index) => (
              <div key={index} className="space-y-2 rounded border border-blue-200 p-3">
                <div className="flex items-center justify-between">
                  <Input
                    value={col.label}
                    onChange={(e) => updateLabel(index, e.target.value)}
                    placeholder="Legenda"
                    className="text-sm font-medium"
                  />
                  {columns.length > 1 && (
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => removeColumn(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                {/* Preview da imagem */}
                {col.imageBase64 ? (
                  <Image
                    src={col.imageBase64}
                    alt={`Imagem ${index + 1}`}
                    width={400}
                    height={300}
                    className="h-auto max-h-64 w-full rounded border border-gray-300 object-contain"
                    unoptimized
                  />
                ) : (
                  <div className="flex h-40 items-center justify-center rounded border border-dashed border-gray-300 bg-gray-50 text-gray-400">
                    <ImageIcon className="h-10 w-10" />
                  </div>
                )}

                {/* Upload */}
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(index, e.target.files?.[0] ?? null)}
                />
              </div>
            ))}
          </div>

          {/* JSON Preview */}
          {/* <div>
            <label className="text-sm font-medium text-blue-700">Preview JSON:</label>
            <pre className="overflow-x-auto rounded bg-gray-100 p-3 text-xs">
              {JSON.stringify({ columns }, null, 2)}
            </pre>
          </div> */}

          {/* Ações */}
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-700">
              <Save className="mr-2 h-4 w-4" />
              Salvar Imagens
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
