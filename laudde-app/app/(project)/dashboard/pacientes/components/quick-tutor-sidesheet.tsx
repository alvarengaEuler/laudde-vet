'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { formatCPF, formatPhone } from '@/lib/utils/masks'
import { tutorSchema } from '@/lib/utils/br-validations'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface QuickTutorSidesheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onTutorCreated: (tutor: { id: string; name: string }) => void
}

export function QuickTutorSidesheet({
  open,
  onOpenChange,
  onTutorCreated,
}: QuickTutorSidesheetProps) {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    phone: '',
    email: '',
    whatsapp: '',
  })

  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let maskedValue = value

    if (name === 'cpf') maskedValue = formatCPF(value)
    if (name === 'phone' || name === 'whatsapp') maskedValue = formatPhone(value)

    setFormData((prev) => ({
      ...prev,
      [name]: maskedValue,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const result = tutorSchema.safeParse(formData)

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      const formattedErrors = Object.fromEntries(
        Object.entries(fieldErrors).map(([key, value]) => [key, value?.[0]])
      )
      setErrors(formattedErrors)
      toast.error('Erro ao salvar. Verifique os campos.')
      setIsSubmitting(false)
      return
    }

    setErrors({})

    try {
      const response = await fetch('/api/tutor', {
        method: 'POST',
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Erro ao cadastrar tutor')

      const newTutor = await response.json()

      toast.success('Tutor cadastrado com sucesso!')
      onTutorCreated({ id: newTutor.id, name: newTutor.name })
      handleClose()

      // Reset form
      setFormData({
        name: '',
        cpf: '',
        phone: '',
        email: '',
        whatsapp: '',
      })
    } catch (error) {
      toast.error('Ocorreu um erro ao salvar. Tente novamente.')
      console.error('Erro ao salvar:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    const url = new URL(window.location.href)
    url.searchParams.delete('openTutorSideSheet')
    window.history.replaceState({}, '', url.toString())

    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={handleClose}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Cadastro Rápido de Tutor</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 px-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Nome do tutor *</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">CPF *</label>
            <Input
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              maxLength={18}
              className={errors.cpf ? 'border-red-500' : ''}
            />
            {errors.cpf && <p className="mt-1 text-sm text-red-500">{errors.cpf}</p>}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Telefone *</label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={15}
                className={errors.phone ? 'border-red-500' : ''}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">WhatsApp</label>
              <Input
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                maxLength={15}
                className={errors.whatsapp ? 'border-red-500' : ''}
              />
              {errors.whatsapp && <p className="mt-1 text-sm text-red-500">{errors.whatsapp}</p>}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}
