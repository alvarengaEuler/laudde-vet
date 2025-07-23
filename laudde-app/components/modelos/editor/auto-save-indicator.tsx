'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Save, CheckCircle } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface AutoSaveIndicatorProps {
  lastSaved: Date | null
  saving: boolean
}

export function AutoSaveIndicator({ lastSaved, saving }: AutoSaveIndicatorProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (saving || lastSaved) {
      setVisible(true)
      const timer = setTimeout(() => {
        setVisible(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [saving, lastSaved])

  if (!visible && !saving) return null

  return (
    <Badge
      variant="outline"
      className={`transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      } flex items-center gap-1 border-blue-200 bg-white px-2 py-1 text-blue-700`}
    >
      {saving ? (
        <>
          <Save className="h-3 w-3 animate-pulse" />
          <span className="text-xs">Salvando...</span>
        </>
      ) : lastSaved ? (
        <>
          <CheckCircle className="h-3 w-3 text-green-500" />
          <span className="text-xs">
            Salvo às {format(lastSaved, 'HH:mm:ss', { locale: ptBR })}
          </span>
        </>
      ) : null}
    </Badge>
  )
}
