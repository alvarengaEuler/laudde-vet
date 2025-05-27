'use client'

import { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function TokenEditorPage() {
  const [text, setText] = useState('Olá, {{nome}}! Bem-vindo à {{empresa}}.')
  const [tokens, setTokens] = useState<{ [key: string]: string }>({})
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const extractTokens = (str: string): { [key: string]: string } => {
    const regex = /\{\{(.*?)\}\}/g
    const found: { [key: string]: string } = {}
    let match
    while ((match = regex.exec(str))) {
      const key = match[1]
      if (!(key in found)) {
        found[key] = tokens[key] || ''
      }
    }
    return found
  }

  const currentTokens = extractTokens(text)

  const handleTokenChange = (key: string, value: string) => {
    setTokens((prev) => ({ ...prev, [key]: value }))
  }

  const renderWithValues = () => {
    return text.replace(/\{\{(.*?)\}\}/g, (_, key) => tokens[key] || `{{${key}}}`)
  }

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Editor de Texto com Tokens</h1>

      <textarea
        className="h-40 w-full rounded-md border p-3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="rounded-md bg-gray-100 p-4">
        <h2 className="mb-2 font-semibold">Preview</h2>
        <p>{renderWithValues()}</p>
      </div>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Abrir Inspetor de Tokens</Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[320px]">
          <SheetHeader>
            <SheetTitle>Tokens detectados</SheetTitle>
          </SheetHeader>
          <div className="mt-4 space-y-4">
            {Object.entries(currentTokens).map(([key]) => (
              <div key={key}>
                <label className="text-muted-foreground text-sm">{key}</label>
                <Input
                  value={tokens[key] || ''}
                  onChange={(e) => handleTokenChange(key, e.target.value)}
                />
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
