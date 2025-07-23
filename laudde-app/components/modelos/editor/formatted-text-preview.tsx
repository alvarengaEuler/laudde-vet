'use client'

import React from 'react'

interface FormattedTextPreviewProps {
  text: string
  alignment?: string
  className?: string
}

export function FormattedTextPreview({
  text,
  alignment = 'left',
  className = '',
}: FormattedTextPreviewProps) {
  const formatText = (text: string): string => {
    if (!text) return ''
    const fText = text
      // Negrito
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Itálico
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Riscado
      .replace(/~~(.*?)~~/g, '<del>$1</del>')
      // Lista não ordenada
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/gs, '<ul class="list-disc pl-6 space-y-1">$1</ul>')
      // Lista ordenada
      .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/gs, (match) => {
        if (match.includes('ul')) return match
        return '<ol class="list-decimal pl-6 space-y-1">' + match + '</ol>'
      })
      // Citação
      .replace(
        /^> (.+)$/gm,
        '<blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-500">$1</blockquote>'
      )
      // Quebras de linha
      .replace(/\n/g, '<br>')

    console.log('FTEXT', fText)
    return fText
  }

  const getAlignmentClass = () => {
    switch (alignment) {
      case 'center':
        return 'text-center'
      case 'right':
        return 'text-right'
      case 'justify':
        return 'text-justify'
      default:
        return 'text-left'
    }
  }

  return (
    <div
      className={`space-y-2 text-sm leading-relaxed ${getAlignmentClass()} ${className}`}
      dangerouslySetInnerHTML={{ __html: formatText(text) }}
    />
  )
}
