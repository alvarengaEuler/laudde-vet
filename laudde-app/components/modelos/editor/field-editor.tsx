'use client'

import { useModelStore } from '@/lib/store'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { SortableFieldItem } from './sortable-field-item'
import { QuickAddBar } from './quick-add-bar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GripVertical } from 'lucide-react'

interface FieldEditorProps {
  modelId: string
}

export function FieldEditor({ modelId }: FieldEditorProps) {
  const { models, reorderFields } = useModelStore()
  const model = models.find((m) => m.id === modelId)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  if (!model) return null

  const handleDragEnd = (event: any) => {
    const { active, over } = event

    if (active.id !== over.id) {
      const oldIndex = model.fields.findIndex((field) => field.id === active.id)
      const newIndex = model.fields.findIndex((field) => field.id === over.id)

      const newFields = arrayMove(model.fields, oldIndex, newIndex)
      reorderFields(modelId, newFields)
    }
  }

  if (model.fields.length === 0) {
    return (
      <div className="space-y-4">
        <Card className="border-blue-200">
          <CardContent className="py-12 text-center">
            <GripVertical className="mx-auto mb-4 h-16 w-16 text-blue-400" />
            <h3 className="mb-2 text-lg font-semibold text-blue-900">Nenhum campo adicionado</h3>
            <p className="mb-6 text-blue-600">
              Adicione campos para começar a construir seu modelo de laudo
            </p>
          </CardContent>
        </Card>

        <QuickAddBar modelId={modelId} />
      </div>
    )
  }

  return (
    <Card className="border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-900">
          <GripVertical className="h-5 w-5" />
          Campos do Modelo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext
            items={model.fields.map((f) => f.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-3">
              {model.fields.map((field) => (
                <SortableFieldItem key={field.id} field={field} modelId={modelId} />
              ))}
            </div>
          </SortableContext>
        </DndContext>

        {/* Barra de adição rápida no final da lista */}
        <QuickAddBar modelId={modelId} className="mt-4" />
      </CardContent>
    </Card>
  )
}
