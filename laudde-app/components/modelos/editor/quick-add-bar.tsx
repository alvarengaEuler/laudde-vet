'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { FileText, Table, Plus, PanelsRightBottom, Dock, GalleryThumbnails } from 'lucide-react'
import { useModelStore } from '@/lib/stores/model-store'

interface QuickAddBarProps {
  modelId: string
  className?: string
}

export function QuickAddBar({ modelId, className }: QuickAddBarProps) {
  const { addFieldWithType } = useModelStore()

  const fieldTypes = [
    {
      type: 'textarea' as const,
      label: 'Texto',
      icon: FileText,
      description: 'Campo de texto longo',
      color: 'bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700',
    },
    {
      type: 'image' as const,
      label: 'Imagem',
      icon: PanelsRightBottom,
      description: 'Campo Imagem',
      color: 'bg-green-50 hover:bg-green-100 border-green-200 text-green-700',
    },
    {
      type: 'table' as const,
      label: 'Tabela',
      icon: Table,
      description: 'Tabela editável',
      color: 'bg-purple-50 hover:bg-purple-100 border-purple-200 text-purple-700',
    },
    {
      type: 'header' as const,
      label: 'Cabeçalho',
      icon: GalleryThumbnails,
      description: 'Campo Rodapé',
      color: 'bg-rose-50 hover:bg-rose-100 border-rose-200 text-rose-700',
    },
    {
      type: 'footer' as const,
      label: 'Rodapé',
      icon: Dock,
      description: 'Campo Rodapé',
      color: 'bg-amber-50 hover:bg-amber-100 border-amber-200 text-amber-700',
    },
  ]

  const handleAddField = (type: 'textarea' | 'image' | 'table' | 'header' | 'footer') => {
    console.log(`modelId: ${modelId}`)
    addFieldWithType(modelId, type)
  }

  return (
    <Card className={`border-2 border-dashed border-blue-300 bg-blue-50/30 ${className}`}>
      <CardContent className="p-4">
        <div className="mb-3 flex items-center gap-2">
          <Plus className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">Adicionar Campo</span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {fieldTypes.map(({ type, label, icon: Icon, description, color }) => (
            <Button
              key={type}
              variant="outline"
              onClick={() => handleAddField(type)}
              className={`flex h-auto flex-col items-center gap-2 p-3 ${color} transition-all hover:scale-105`}
            >
              <Icon className="h-6 w-6" />
              <div className="text-center">
                <div className="text-sm font-medium">{label}</div>
                <div className="text-xs opacity-75">{description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
