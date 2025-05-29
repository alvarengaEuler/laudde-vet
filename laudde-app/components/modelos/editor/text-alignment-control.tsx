'use client'

import { Button } from '@/components/ui/button'
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react'

interface TextAlignmentControlProps {
  value: string
  onChange: (alignment: string) => void
  className?: string
}

export function TextAlignmentControl({ value, onChange, className }: TextAlignmentControlProps) {
  const alignments = [
    { value: 'left', icon: AlignLeft, label: 'Esquerda' },
    { value: 'center', icon: AlignCenter, label: 'Centro' },
    { value: 'right', icon: AlignRight, label: 'Direita' },
    { value: 'justify', icon: AlignJustify, label: 'Justificado' },
  ]

  return (
    <div className={`flex items-center rounded-md border border-blue-300 ${className}`}>
      {alignments.map(({ value: alignValue, icon: Icon, label }) => (
        <Button
          key={alignValue}
          variant={value === alignValue ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onChange(alignValue)}
          className={`rounded-none first:rounded-l-md last:rounded-r-md ${
            value === alignValue ? 'bg-blue-600 hover:bg-blue-700' : ''
          }`}
          title={label}
        >
          <Icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  )
}
