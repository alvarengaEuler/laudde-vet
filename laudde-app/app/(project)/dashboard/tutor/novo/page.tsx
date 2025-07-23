'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner' // importa o sonner para exibir toasts

import { tutorSchema } from '@/lib/utils/br-validations'
import { formatCPF, formatPhone } from '@/lib/utils/masks'

export default function NewTutorPage() {
  const router = useRouter()

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    phone: '',
    email: '',
    whatsapp: '',
  })

  // Estado para armazenar erros de validação
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({})

  // Lida com alterações nos campos de input, aplicando máscaras conforme o campo
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

  // Lida com o envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Valida os dados usando o schema Zod
    const result = tutorSchema.safeParse(formData)

    if (!result.success) {
      // Extrai erros de validação e os exibe
      const fieldErrors = result.error.flatten().fieldErrors
      // Converte arrays de erros em strings únicas
      const formattedErrors = Object.fromEntries(
        Object.entries(fieldErrors).map(([key, value]) => [key, value?.[0]])
      )
      setErrors(formattedErrors)
      toast.error('Erro ao salvar. Verifique os campos.')
      return
    }

    // Limpa os erros
    setErrors({})

    try {
      // Aqui você faria a requisição real para salvar os dados
      await fetch('/api/tutor', { method: 'POST', body: JSON.stringify(formData) })

      toast.success('Tutor cadastrado com sucesso!')
      router.push('/dashboard/tutor')
    } catch (error) {
      toast.error('Ocorreu um erro ao salvar. Tente novamente.')
      console.error('Erro ao salvar:', error)
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-xl font-bold sm:text-2xl">Cadastro de Tutor</h1>
        <p className="text-sm text-gray-500">Cadastre um novo tutor</p>
      </div>

      <div className="rounded-xl bg-white sm:p-6 dark:bg-gray-800">
        {/* Formulário com onSubmit */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            {/* Campo Nome */}
            <div>
              <label className="mb-1 block text-sm font-medium">Nome do tutor</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2`}
              />
              {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
            </div>

            {/* Campo CPF */}
            <div>
              <label className="mb-1 block text-sm font-medium">CPF</label>
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                maxLength={18}
                className={`w-full border ${errors.cnpj ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2`}
              />
              {errors.cpf && <p className="text-sm text-red-600">{errors.cpf}</p>}
            </div>
          </div>

          {/*  WhatsApp */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Telefone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={15}
                className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2`}
              />
              {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                maxLength={15}
                className={`w-full border ${errors.whatsapp ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2`}
              />
              {errors.whatsapp && <p className="text-sm text-red-600">{errors.whatsapp}</p>}
            </div>
          </div>
          {/* Telefone e Email */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2`}
              />
              {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => router.push('/dashboard/tutor')}
              className="rounded-lg border border-gray-300 px-4 py-2"
            >
              Cancelar
            </button>
            <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-white">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
