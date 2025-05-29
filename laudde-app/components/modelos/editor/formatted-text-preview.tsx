'use client'

interface FormattedTextPreviewProps {
  text: string
  alignment?: string
  className?: string
}

export function FormattedTextPreview({
  text,
  alignment = 'left',
  className,
}: FormattedTextPreviewProps) {
  const formatText = (text: string): string => {
    if (!text) return ''

    return (
      text
        // Negrito
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Itálico
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Riscado
        .replace(/~~(.*?)~~/g, '<del>$1</del>')
        // Lista não ordenada
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
        // Lista ordenada
        .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/s, (match) => {
          if (match.includes('<ul>')) return match
          return '<ol>' + match + '</ol>'
        })
        // Citação
        .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
        // Quebras de linha
        .replace(/\n/g, '<br>')
    )
  }

  const getAlignmentClass = (alignment: string): string => {
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
      className={`prose prose-sm max-w-none ${getAlignmentClass(alignment)} ${className}`}
      dangerouslySetInnerHTML={{ __html: formatText(text) }}
      style={{
        lineHeight: '1.5',
      }}
    />
  )
}
