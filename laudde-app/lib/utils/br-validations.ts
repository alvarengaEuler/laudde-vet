import { z } from 'zod'

// lib/validations/br-validations.ts

export function validateCNPJ(cnpj: string): boolean {
  cnpj = cnpj.replace(/[^\d]+/g, '')

  if (cnpj.length !== 14) return false

  // Rejeita CNPJs com todos os dígitos iguais
  if (/^(\d)\1+$/.test(cnpj)) return false

  const calcVerifier = (length: number) => {
    const numbers = cnpj.substring(0, length)
    let sum = 0
    let pos = length - 7

    for (let i = length; i >= 1; i--) {
      sum += +numbers.charAt(length - i) * pos--
      if (pos < 2) pos = 9
    }

    const result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
    return result
  }

  const digit1 = calcVerifier(12)
  const digit2 = calcVerifier(13)

  return digit1 === +cnpj.charAt(12) && digit2 === +cnpj.charAt(13)
}

const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/

export const brCnpjSchema = z
  .string()
  .min(14, 'CNPJ deve ter pelo menos 14 dígitos')
  .refine((val) => validateCNPJ(val), {
    message: 'CNPJ inválido',
  })

export const brPhoneSchema = z.string().regex(phoneRegex, 'Telefone inválido')

export const brWhatsappSchema = z.string().regex(phoneRegex, 'Whatsapp inválido')

export const clinicaSchema = z.object({
  name: z.string().min(3, 'Nome da clínica é obrigatório'),
  email: z.string().min(1, 'Email é obrigatório para o envio dos laudos.').email(' Email inválido'),
  // cnpj: brCnpjSchema,
  // phone: brPhoneSchema,
  whatsapp: brWhatsappSchema,
})

export const tutorSchema = z.object({
  name: z.string().min(3, 'Nome da clínica é obrigatório'),
  email: z.string().min(1, 'Email é obrigatório para o envio dos laudos.').email(' Email inválido'),

  phone: brPhoneSchema,
})

export const veterinarianSchema = z.object({
  name: z.string().min(3, 'Nome do veterinário obrigatório'),
  phone: z.string().min(1, 'Telefone é obrigatório'),
  whatsapp: brWhatsappSchema,
  email: z.string().email('Email inválido'),

  crmNumber: z.string(),
})
