'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Edit, Calendar } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import type { Model } from '@/lib/mocks/types'

interface ModelListViewProps {
  models: Model[]
  onEditModel: (id: string) => void
}

export function ModelListView({ models, onEditModel }: ModelListViewProps) {
  return (
    <div className="space-y-4">
      {models.map((model) => (
        <div
          key={model.id}
          className="grid grid-cols-1 gap-3 p-4 rounded-lg border border-blue-200 bg-white shadow-sm md:grid-cols-4 md:items-center"
        >
          {/* Nome */}
          <div>
            <div className="text-xs font-semibold text-gray-500 md:hidden mb-1">Nome</div>
            <div className="font-medium text-blue-900">{model.name}</div>
          </div>

          {/* Data de Criação */}
          <div>
            <div className="text-xs font-semibold text-gray-500 md:hidden mb-1">Data</div>
            <div className="flex items-center gap-1 text-blue-700">
              <Calendar className="h-4 w-4" />
              {format(model.createdAt, 'dd/MM/yyyy', { locale: ptBR })}
            </div>
          </div>

          {/* Campos */}
          <div>
            <div className="text-xs font-semibold text-gray-500 md:hidden mb-1">Campos</div>
            <div className="flex flex-wrap items-center gap-1">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {model.fields.length} {model.fields.length === 1 ? 'campo' : 'campos'}
              </Badge>
              {model.fields.slice(0, 2).map((field) => (
                <Badge
                  key={field.id}
                  variant="outline"
                  className="border-blue-300 text-xs text-blue-700 whitespace-nowrap"
                >
                  {field.name}
                </Badge>
              ))}
              {model.fields.length > 2 && (
                <Badge
                  variant="outline"
                  className="border-blue-300 text-xs text-blue-700 whitespace-nowrap"
                >
                  +{model.fields.length - 2}
                </Badge>
              )}
            </div>
          </div>

          {/* Ações */}
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEditModel(model.id)}
              className="text-blue-600 hover:text-blue-800"
            >
              <Edit className="mr-1 h-4 w-4" />
              Editar
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
