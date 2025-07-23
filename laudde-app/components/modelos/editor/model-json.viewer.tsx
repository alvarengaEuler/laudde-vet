'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Copy, Download, Eye } from 'lucide-react'
import type { Model } from '@/lib/mocks/types'
import { toast } from 'sonner'

interface ModelJsonViewerProps {
  model: Model
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ModelJsonViewer({ model, open, onOpenChange }: ModelJsonViewerProps) {
  const [copied, setCopied] = useState(false)

  const modelJson = JSON.stringify(model, null, 2)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(modelJson)
      setCopied(true)

      toast('O JSON do modelo foi copiado para a área de transferência.')
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast(`Erro ao copiar. Não foi possível copiar o JSON. ${error}`, {
        style: { background: '#f87171', color: '#fff' },
      })
    }
  }

  const handleDownload = () => {
    const blob = new Blob([modelJson], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `modelo-${model.name.toLowerCase().replace(/\s+/g, '-')}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast('O arquivo JSON está sendo baixado.')
  }

  const getFieldTypeStats = () => {
    const stats = model.fields.reduce(
      (acc, field) => {
        acc[field.type] = (acc[field.type] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )
    return stats
  }

  const fieldStats = getFieldTypeStats()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[90vh] max-w-4xl flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-blue-900">
            <Eye className="h-5 w-5" />
            JSON do Modelo: {model.name}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-1 flex-col space-y-4 overflow-hidden">
          {/* Estatísticas */}
          <div className="flex flex-wrap gap-2 rounded-lg bg-blue-50 p-3">
            <Badge variant="outline" className="bg-white">
              {model.fields.length} {model.fields.length === 1 ? 'campo' : 'campos'}
            </Badge>
            {fieldStats.textarea && (
              <Badge className="bg-blue-100 text-blue-800">
                {fieldStats.textarea} texto{fieldStats.textarea > 1 ? 's' : ''}
              </Badge>
            )}
            {fieldStats.number && (
              <Badge className="bg-green-100 text-green-800">
                {fieldStats.number} número{fieldStats.number > 1 ? 's' : ''}
              </Badge>
            )}
            {fieldStats.table && (
              <Badge className="bg-purple-100 text-purple-800">
                {fieldStats.table} tabela{fieldStats.table > 1 ? 's' : ''}
              </Badge>
            )}
          </div>

          {/* Controles */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className={`${copied ? 'border-green-300 bg-green-50 text-green-700' : ''}`}
            >
              <Copy className="mr-2 h-4 w-4" />
              {copied ? 'Copiado!' : 'Copiar JSON'}
            </Button>
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Baixar JSON
            </Button>
          </div>

          {/* JSON Content */}
          <div className="flex-1 overflow-hidden">
            <div className="h-full overflow-auto rounded-lg bg-gray-900 p-4">
              <pre className="font-mono text-sm leading-relaxed text-gray-100">
                <code>{modelJson}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
