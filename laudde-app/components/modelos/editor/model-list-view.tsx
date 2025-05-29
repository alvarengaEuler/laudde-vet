'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
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
    <div className="overflow-hidden rounded-lg border border-blue-200 bg-white">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-50">
              <TableHead className="font-semibold text-blue-900">Nome do Modelo</TableHead>
              <TableHead className="font-semibold text-blue-900">Data de Criação</TableHead>
              <TableHead className="font-semibold text-blue-900">Campos</TableHead>
              <TableHead className="font-semibold text-blue-900">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {models.map((model) => (
              <TableRow key={model.id} className="hover:bg-blue-50">
                <TableCell className="font-medium text-blue-900">{model.name}</TableCell>
                <TableCell className="text-blue-700">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {format(model.createdAt, 'dd/MM/yyyy', { locale: ptBR })}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {model.fields.length} {model.fields.length === 1 ? 'campo' : 'campos'}
                    </Badge>
                    {model.fields.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {model.fields.slice(0, 2).map((field) => (
                          <Badge
                            key={field.id}
                            variant="outline"
                            className="border-blue-300 text-xs text-blue-700"
                          >
                            {field.name}
                          </Badge>
                        ))}
                        {model.fields.length > 2 && (
                          <Badge
                            variant="outline"
                            className="border-blue-300 text-xs text-blue-700"
                          >
                            +{model.fields.length - 2}
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onEditModel(model.id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit className="mr-1 h-4 w-4" />
                    Editar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
