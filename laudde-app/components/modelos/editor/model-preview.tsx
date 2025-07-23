'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Model } from '@/lib/mocks/types'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { FormattedTextPreview } from './formatted-text-preview'

import { useTemplateVariables } from '@/lib/stores/template-variables-store'

interface ModelPreviewProps {
  model: Model
}

export function ModelPreview({ model }: ModelPreviewProps) {
  const { variables } = useTemplateVariables()

  const interpolate = (text: string) => {
    return text.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) => variables[key] ?? `{{${key}}}`)
  }

  const renderField = (field: any) => {
    switch (field.type) {
      case 'textarea':
        return (
          <div className="space-y-2">
            <div className="min-h-[80px] whitespace-pre-wrap rounded bg-white text-sm text-gray-600">
              {field.templateContent
                ? interpolate(field.templateContent)
                : field.defaultDescription || 'Campo de texto...'}
            </div>
          </div>
        )

      case 'number':
        return (
          <div className="space-y-2">
            <div className="w-32 rounded border border-gray-200 bg-gray-50 p-2 text-sm text-gray-600">
              {interpolate(field.templateContent || '0')}
            </div>
          </div>
        )

      case 'table':
        let tableData
        try {
          tableData = field.tableContent ? JSON.parse(field.tableContent) : null
        } catch {
          tableData = null
        }

        if (tableData && tableData.headers && tableData.rows) {
          return (
            <div className="space-y-2">
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      {tableData.headers.map((header: string, index: number) => (
                        <th
                          key={index}
                          className="border border-gray-200 p-2 text-left font-medium"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.rows.map((row: string[], rowIndex: number) => (
                      <tr key={rowIndex}>
                        {row.map((cell: string, cellIndex: number) => (
                          <td key={cellIndex} className="border border-gray-200 p-2">
                            {interpolate(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
        }

        return (
          <div className="space-y-2">
            <div className="rounded border border-gray-200 bg-gray-50 p-3 text-sm text-gray-600">
              Tabela não configurada
            </div>
          </div>
        )

      default:
        return (
          <div className="rounded border border-gray-200 bg-gray-50 p-3 text-sm text-gray-600">
            Campo não configurado
          </div>
        )
    }
  }

  return (
    <Card className="border-gray-200 bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-900">
          📄 Visualização do Laudo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mx-auto h-[calc(100vh-200px)] max-w-full overflow-auto rounded-lg border border-gray-100 bg-white p-4 shadow-lg sm:p-8">
          {/* Header */}
          <div className="mb-8 border-b border-gray-200 pb-4 text-center">
            <h1 className="mb-2 text-2xl font-bold text-gray-900">LAUDO VETERINÁRIO</h1>
            <h2 className="text-lg font-semibold text-gray-700">{model.name}</h2>
            <p className="mt-2 text-sm text-gray-500">
              Data: {format(new Date(), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
            </p>
          </div>

          {/* Fields */}
          <div className="space-y-6">
            {model.fields.length === 0 ? (
              <div className="py-8 text-center text-gray-500">
                <p>Nenhum campo adicionado ao modelo</p>
                <p className="text-sm">Adicione campos para ver a visualização</p>
              </div>
            ) : (
              model.fields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                      {field.name}
                    </label>
                  </div>

                  {/* USO CORRETO DO FormattedTextPreview */}
                  {field.defaultDescription && (
                    <FormattedTextPreview
                      text={field.defaultDescription}
                      alignment={field.descriptionAlignment || 'left'}
                      className="text-xs italic text-gray-600"
                    />
                  )}

                  {renderField(field)}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <p className="mb-2 font-semibold">Veterinário Responsável:</p>
                <div className="h-8 border-b border-gray-300"></div>
                <p className="mt-1 text-xs text-gray-500">Nome e CRMV</p>
              </div>
              <div>
                <p className="mb-2 font-semibold">Data e Assinatura:</p>
                <div className="h-8 border-b border-gray-300"></div>
                <p className="mt-1 text-xs text-gray-500">Data e assinatura</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
