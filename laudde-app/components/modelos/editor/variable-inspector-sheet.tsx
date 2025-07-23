'use client'

import { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useTemplateVariables } from '@/lib/stores/template-variables-store'

interface VariableEditorSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  template: string
}

export function VariableEditorSheet({ open, onOpenChange, template }: VariableEditorSheetProps) {
  const { variables, setVariable } = useTemplateVariables()
  const [detectedVariables, setDetectedVariables] = useState<string[]>([])

  useEffect(() => {
    const matches = Array.from(template.matchAll(/\{\{\s*(\w+)\s*\}\}/g)).map((m) => m[1])
    const uniqueVars = Array.from(new Set(matches))
    setDetectedVariables(uniqueVars)
  }, [template])

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Editar Variáveis</SheetTitle>
        </SheetHeader>

        <ScrollArea className="h-full space-y-4 py-4 pr-2">
          {detectedVariables.length === 0 ? (
            <p className="text-sm text-gray-500">Nenhuma variável encontrada.</p>
          ) : (
            detectedVariables.map((variable) => (
              <div key={variable} className="space-y-1">
                <Label className="text-sm font-semibold">{`{{ ${variable} }}`}</Label>
                <Input
                  placeholder={`Valor para ${variable}`}
                  value={variables[variable] || ''}
                  onChange={(e) => setVariable(variable, e.target.value)}
                />
              </div>
            ))
          )}
        </ScrollArea>

        <div className="mt-4 flex justify-end gap-2">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Fechar
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
