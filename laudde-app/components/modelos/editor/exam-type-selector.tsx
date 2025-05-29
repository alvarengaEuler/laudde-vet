'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useModelStore } from '@/lib/store'
import { examTemplates } from '@/lib/mocks/exam-templates'
import { Stethoscope } from 'lucide-react'

interface ExamTypeSelectorProps {
  modelId: string
}

export function ExamTypeSelector({ modelId }: ExamTypeSelectorProps) {
  const { setFieldsFromTemplate } = useModelStore()

  const handleTemplateSelect = (templateKey: string) => {
    const template = examTemplates[templateKey]
    if (template) {
      setFieldsFromTemplate(modelId, template.fields)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Stethoscope className="h-4 w-4 text-blue-600" />
      <Select onValueChange={handleTemplateSelect}>
        <SelectTrigger className="w-full border-blue-300 sm:w-48">
          <SelectValue placeholder="Tipo de exame" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(examTemplates).map(([key, template]) => (
            <SelectItem key={key} value={key}>
              {template.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
