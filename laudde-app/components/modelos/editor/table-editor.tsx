'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Trash2, Save } from 'lucide-react'
import type { Field } from '@/lib/mocks/types'
import { useModelStore } from '@/lib/store'

interface TableEditorProps {
  field: Field
  modelId: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface TableData {
  headers: string[]
  rows: string[][]
}

export function TableEditor({ field, modelId, open, onOpenChange }: TableEditorProps) {
  const { updateField } = useModelStore()
  const [tableData, setTableData] = useState<TableData>({ headers: [], rows: [] })

  useEffect(() => {
    if (field.tableContent) {
      try {
        const parsed = JSON.parse(field.tableContent)
        setTableData(parsed)
      } catch {
        setTableData({ headers: ['Coluna 1'], rows: [['Valor 1']] })
      }
    } else {
      setTableData({ headers: ['Coluna 1'], rows: [['Valor 1']] })
    }
  }, [field.tableContent, open])

  const handleSave = () => {
    const jsonContent = JSON.stringify(tableData)
    updateField(modelId, field.id, { tableContent: jsonContent })
    onOpenChange(false)
  }

  const addColumn = () => {
    const newColumnIndex = tableData.headers.length + 1
    setTableData({
      headers: [...tableData.headers, `Coluna ${newColumnIndex}`],
      rows: tableData.rows.map((row) => [...row, '']),
    })
  }

  const removeColumn = (index: number) => {
    if (tableData.headers.length <= 1) return
    setTableData({
      headers: tableData.headers.filter((_, i) => i !== index),
      rows: tableData.rows.map((row) => row.filter((_, i) => i !== index)),
    })
  }

  const addRow = () => {
    const newRow = new Array(tableData.headers.length).fill('')
    setTableData({
      ...tableData,
      rows: [...tableData.rows, newRow],
    })
  }

  const removeRow = (index: number) => {
    if (tableData.rows.length <= 1) return
    setTableData({
      ...tableData,
      rows: tableData.rows.filter((_, i) => i !== index),
    })
  }

  const updateHeader = (index: number, value: string) => {
    const newHeaders = [...tableData.headers]
    newHeaders[index] = value
    setTableData({ ...tableData, headers: newHeaders })
  }

  const updateCell = (rowIndex: number, colIndex: number, value: string) => {
    const newRows = [...tableData.rows]
    newRows[rowIndex][colIndex] = value
    setTableData({ ...tableData, rows: newRows })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-blue-900">Editor de Tabela - {field.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Controles */}
          <div className="flex flex-wrap gap-2">
            <Button onClick={addColumn} variant="outline" size="sm" className="border-blue-300">
              <Plus className="mr-1 h-4 w-4" />
              Adicionar Coluna
            </Button>
            <Button onClick={addRow} variant="outline" size="sm" className="border-blue-300">
              <Plus className="mr-1 h-4 w-4" />
              Adicionar Linha
            </Button>
          </div>

          {/* Tabela editável */}
          <div className="overflow-hidden rounded-lg border border-blue-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Headers */}
                <thead>
                  <tr className="bg-blue-50">
                    {tableData.headers.map((header, index) => (
                      <th key={index} className="min-w-[120px] border border-blue-200 p-2">
                        <div className="flex items-center gap-1">
                          <Input
                            value={header}
                            onChange={(e) => updateHeader(index, e.target.value)}
                            className="h-auto border-none bg-transparent p-1 text-center text-sm font-semibold focus-visible:ring-1 focus-visible:ring-blue-500"
                            placeholder="Nome da coluna"
                          />
                          {tableData.headers.length > 1 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeColumn(index)}
                              className="h-auto p-1 text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Rows */}
                <tbody>
                  {tableData.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-emerald-25">
                      {row.map((cell, colIndex) => (
                        <td key={colIndex} className="border border-emerald-200 p-2">
                          <div className="flex items-center gap-2">
                            <Input
                              value={cell}
                              onChange={(e) => updateCell(rowIndex, colIndex, e.target.value)}
                              className="h-auto border-none bg-transparent p-1 focus-visible:ring-1 focus-visible:ring-emerald-500"
                              placeholder="Valor da célula"
                            />
                            {colIndex === 0 && tableData.rows.length > 1 && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeRow(rowIndex)}
                                className="h-auto p-1 text-red-600 hover:text-red-800"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* JSON Preview */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-emerald-700">Preview JSON:</label>
            <pre className="overflow-x-auto rounded bg-gray-100 p-3 text-xs">
              {JSON.stringify(tableData, null, 2)}
            </pre>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-700">
              <Save className="mr-2 h-4 w-4" />
              Salvar Tabela
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
