'use client'

import type React from 'react'

import { Button } from '@/components/ui/button'
import { Bold, Italic, Underline, List, ListOrdered, Quote } from 'lucide-react'

interface TextFormattingToolbarProps {
  textareaRef: React.RefObject<HTMLTextAreaElement>
  onTextChange: (text: string) => void
  className?: string
}

export function TextFormattingToolbar({
  textareaRef,
  onTextChange,
  className,
}: TextFormattingToolbarProps) {
  const applyFormatting = (prefix: string, suffix = '') => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = textarea.value.substring(start, end)
    const beforeText = textarea.value.substring(0, start)
    const afterText = textarea.value.substring(end)

    let newText
    if (selectedText) {
      // Se há texto selecionado, aplica a formatação
      newText = beforeText + prefix + selectedText + suffix + afterText
    } else {
      // Se não há seleção, insere o formato com placeholder
      const placeholder = getPlaceholder(prefix)
      newText = beforeText + prefix + placeholder + suffix + afterText
    }

    onTextChange(newText)

    // Reposiciona o cursor
    setTimeout(() => {
      const newCursorPos = selectedText
        ? start + prefix.length + selectedText.length + suffix.length
        : start + prefix.length + getPlaceholder(prefix).length
      textarea.setSelectionRange(newCursorPos, newCursorPos)
      textarea.focus()
    }, 0)
  }

  const getPlaceholder = (prefix: string): string => {
    switch (prefix) {
      case '**':
        return 'texto em negrito'
      case '*':
        return 'texto em itálico'
      case '~~':
        return 'texto riscado'
      case '- ':
        return 'item da lista'
      case '1. ':
        return 'item numerado'
      case '> ':
        return 'citação'
      default:
        return 'texto'
    }
  }

  const insertList = (ordered = false) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const beforeText = textarea.value.substring(0, start)
    const afterText = textarea.value.substring(start)

    const listItem = ordered ? '1. Item da lista\n2. ' : '- Item da lista\n- '
    const newText = beforeText + listItem + afterText

    onTextChange(newText)

    setTimeout(() => {
      const newCursorPos = start + listItem.length
      textarea.setSelectionRange(newCursorPos, newCursorPos)
      textarea.focus()
    }, 0)
  }

  const formatButtons = [
    { icon: Bold, action: () => applyFormatting('**', '**'), title: 'Negrito' },
    { icon: Italic, action: () => applyFormatting('*', '*'), title: 'Itálico' },
    { icon: Underline, action: () => applyFormatting('~~', '~~'), title: 'Riscado' },
    { icon: List, action: () => insertList(false), title: 'Lista' },
    { icon: ListOrdered, action: () => insertList(true), title: 'Lista Numerada' },
    { icon: Quote, action: () => applyFormatting('> '), title: 'Citação' },
  ]

  return (
    <div
      className={`flex flex-wrap items-center gap-1 rounded-md border border-blue-200 bg-blue-50 p-2 ${className}`}
    >
      {formatButtons.map(({ icon: Icon, action, title }, index) => (
        <Button
          key={index}
          variant="ghost"
          size="sm"
          onClick={action}
          className="h-8 w-8 p-0 hover:bg-blue-100"
          title={title}
        >
          <Icon className="h-4 w-4" />
        </Button>
      ))}
      <div className="ml-2 hidden text-xs text-blue-600 sm:block">
        Selecione o texto e clique nos botões para formatar
      </div>
    </div>
  )
}
