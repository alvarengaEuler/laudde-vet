import { z } from 'zod'

export const contentItemSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  type: z.enum(['textarea', 'number', 'table']),
  defaultDescription: z.string().optional(),
  descriptionAlignment: z.string().optional(),
  required: z.boolean().optional(),
  templateContent: z.string().optional(),
  tableContent: z.string().optional(),
})

export const templateSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  // examType: z.enum(['ULTRASOUND', 'X_RAY']),
  fields: z.array(contentItemSchema),
})

// Tipagem inferida automaticamente pelo Zod
export type TemplateInput = z.infer<typeof templateSchema>
