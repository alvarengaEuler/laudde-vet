'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Trash2, Table } from 'lucide-react'

interface TableData {
  columns: string[]
  rows: {
    label: string
    values: string[]
  }[]
}

export default function DynamicTableEditor() {
  const [tableData, setTableData] = useState<TableData>({
    columns: ['Olho Direito', 'Olho Esquerdo'],
    rows: [
      { label: 'Câmara anterior', values: ['0.38 cm', '0.16 cm'] },
      { label: 'Cristalino', values: ['0.71 cm', '0.72 cm'] },
    ],
  })

  const [editing, setEditing] = useState<{ rowIdx: number; colIdx: number } | null>(null)
  const [editValue, setEditValue] = useState('')
  const [showHtmlTable, setShowHtmlTable] = useState(false)

  const openEditor = (rowIdx: number, colIdx: number) => {
    setEditing({ rowIdx, colIdx })
    setEditValue(tableData.rows[rowIdx].values[colIdx])
  }

  const saveEdit = () => {
    if (!editing) return
    const newData = { ...tableData }
    newData.rows[editing.rowIdx].values[editing.colIdx] = editValue
    setTableData(newData)
    setEditing(null)
  }

  const addRow = () => {
    const newRow = {
      label: `Nova Linha ${tableData.rows.length + 1}`,
      values: Array(tableData.columns.length).fill(''),
    }
    setTableData({ ...tableData, rows: [...tableData.rows, newRow] })
  }

  const addColumn = () => {
    const columnLabel = `Coluna ${tableData.columns.length + 1}`
    const newColumns = [...tableData.columns, columnLabel]
    const newRows = tableData.rows.map((row) => ({
      ...row,
      values: [...row.values, ''],
    }))
    setTableData({ columns: newColumns, rows: newRows })
  }

  const removeColumn = (colIdx: number) => {
    const newColumns = tableData.columns.filter((_, i) => i !== colIdx)
    const newRows = tableData.rows.map((row) => ({
      ...row,
      values: row.values.filter((_, i) => i !== colIdx),
    }))
    setTableData({ columns: newColumns, rows: newRows })
  }

  const removeRow = (rowIdx: number) => {
    const newRows = tableData.rows.filter((_, i) => i !== rowIdx)
    setTableData({ ...tableData, rows: newRows })
  }

  const updateColumnName = (index: number, newName: string) => {
    const newColumns = [...tableData.columns]
    newColumns[index] = newName
    setTableData({ ...tableData, columns: newColumns })
  }

  const updateRowLabel = (index: number, newLabel: string) => {
    const newRows = [...tableData.rows]
    newRows[index].label = newLabel
    setTableData({ ...tableData, rows: newRows })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Editor de Tabela</h2>

      <div className="overflow-auto rounded border">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr>
              <th className="border bg-gray-100 px-3 py-2">Estrutura</th>
              {tableData.columns.map((col, colIdx) => (
                <th key={colIdx} className="group relative border bg-gray-100 px-3 py-2">
                  <Input
                    value={col}
                    onChange={(e) => updateColumnName(colIdx, e.target.value)}
                    className="w-full border-none bg-transparent p-0 text-sm focus:outline-none"
                  />
                  <button
                    className="absolute right-1 top-1 text-red-500 opacity-0 group-hover:opacity-100"
                    onClick={() => removeColumn(colIdx)}
                    title="Remover coluna"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="group">
                <td className="relative border px-3 py-2">
                  <Input
                    value={row.label}
                    onChange={(e) => updateRowLabel(rowIdx, e.target.value)}
                    className="w-full border-none bg-transparent p-0 text-sm focus:outline-none"
                  />
                  <button
                    className="absolute right-1 top-1 text-red-500 opacity-0 group-hover:opacity-100"
                    onClick={() => removeRow(rowIdx)}
                    title="Remover linha"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </td>
                {row.values.map((value, colIdx) => (
                  <td
                    key={colIdx}
                    className="cursor-pointer border px-3 py-2 hover:bg-blue-50"
                    onClick={() => openEditor(rowIdx, colIdx)}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-2">
        <Button onClick={addRow}>
          <Plus className="mr-1 h-4 w-4" />
          Adicionar Linha
        </Button>
        <Button onClick={addColumn} variant="outline">
          <Plus className="mr-1 h-4 w-4" />
          Adicionar Coluna
        </Button>
        <Button onClick={() => setShowHtmlTable(true)} variant="secondary">
          <Table className="mr-1 h-4 w-4" />
          Gerar Tabela HTML
        </Button>
      </div>

      <Dialog open={!!editing} onOpenChange={(open) => !open && setEditing(null)}>
        <DialogContent>
          <h3 className="mb-4 text-lg font-semibold">Editar Valor da Célula</h3>
          <Input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="mb-4"
            placeholder="Digite o novo valor"
          />
          <Button onClick={saveEdit}>Salvar</Button>
        </DialogContent>
      </Dialog>

      <div>
        <h3 className="text-md font-semibold text-gray-800">JSON Resultante</h3>
        <pre className="max-h-[300px] overflow-auto whitespace-pre-wrap rounded bg-gray-100 p-4 text-sm">
          {JSON.stringify(tableData, null, 2)}
        </pre>
      </div>

      {showHtmlTable && (
        <div className="mt-8">
          <h3 className="text-md mb-2 font-semibold">📄 Tabela HTML Gerada</h3>
          <div className="overflow-auto rounded border">
            <table className="min-w-full border-collapse border text-sm">
              <thead>
                <tr>
                  <th className="border bg-gray-100 px-3 py-2">Estrutura</th>
                  {tableData.columns.map((col, idx) => (
                    <th key={idx} className="border bg-gray-100 px-3 py-2">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.rows.map((row, rowIdx) => (
                  <tr key={rowIdx}>
                    <td className="border px-3 py-2 font-medium">{row.label}</td>
                    {row.values.map((value, idx) => (
                      <td key={idx} className="border px-3 py-2">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
