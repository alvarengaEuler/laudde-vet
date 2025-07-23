import { z } from 'zod';

export const fieldSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.enum(['textarea', 'number']), // Pode expandir para outros tipos se precisar
  defaultDescription: z.string(),
  required: z.boolean(),
  templateContent: z.string(),
});

export const modelTemplateContentSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string().datetime(), // ou z.date() se já estiver convertido
  updatedAt: z.string().datetime(),
  fields: z.array(fieldSchema),
});

export type ModelTemplateContent = z.infer<typeof modelTemplateContentSchema>;