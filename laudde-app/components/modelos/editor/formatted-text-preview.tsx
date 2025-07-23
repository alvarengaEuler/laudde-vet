'use client'

import React from 'react'

interface FormattedTextPreviewProps {
  text: string
  alignment?: string
  className?: string
}

// Escapa caracteres HTML para evitar inserção de tags
const escapeHTML = (str: string): string =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const FormattedTextPreviewComponent = ({
  text,
  alignment = 'left',
  className = '',
}: FormattedTextPreviewProps) => {
  const formatText = (rawText: string): string => {
    if (!rawText) return ''

    const text = escapeHTML(rawText)

    const fText = text
      // Negrito: **text**
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Itálico: *text*
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Riscado: ~~text~~
      .replace(/~~(.*?)~~/g, '<del>$1</del>')
      // Citação: > text
      .replace(
        /^&gt; (.+)$/gm,
        '<blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-500">$1</blockquote>'
      )
      // Lista não ordenada: - item
      .replace(/^[-*] (.+)$/gm, '<li>$1</li>')
      .replace(/(<li>.*?<\/li>)/gs, '<ul class="list-disc pl-6">$1</ul>')
      // Lista ordenada: 1. item
      .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
      .replace(/(<li>.*?<\/li>)/gs, (match) => {
        if (match.includes('ul')) return match
        return '<ol class="list-decimal pl-6">' + match + '</ol>'
      })
      // Quebras de linha
      .replace(/\n/g, '<br>')

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

// 🧠 React.memo para evitar re-renderizações desnecessárias
export const FormattedTextPreview = React.memo(FormattedTextPreviewComponent)
