"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner" // importa o sonner para exibir toasts

import { veterinarianSchema } from "@/lib/utils/br-validations"
import { formatPhone } from "@/lib/utils/masks"

export default function NewVetPage() {
  const router = useRouter()

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    crm: "",
    crmNumber: "",
    state: "",
  })

  // Estado para armazenar erros de validação
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({})

  // Lida com alterações nos campos de input, aplicando máscaras conforme o campo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

  if (!target) return;

  const { name, value } = target;

    let maskedValue = value

    if (name === "phone" || name === "whatsapp") maskedValue = formatPhone(value)

    setFormData((prev) => ({
      ...prev,
      [name]: maskedValue,
    }))
  }

  // Lida com o envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Valida os dados usando o schema Zod
    const result = veterinarianSchema.safeParse(formData)

    if (!result.success) {
      // Extrai erros de validação e os exibe
      const fieldErrors = result.error.flatten().fieldErrors
      // Converte arrays de erros em strings únicas
      const formattedErrors = Object.fromEntries(
        Object.entries(fieldErrors).map(([key, value]) => [key, value?.[0]])
      )
      setErrors(formattedErrors)
      toast.error("Erro ao salvar. Verifique os campos.")
      return
    }

    // Limpa os erros
    setErrors({})

    try {
      // Aqui você faria a requisição real para salvar os dados
      await fetch("/api/vets", { method: "POST", body: JSON.stringify(formData) })

      toast.success("Veterinário cadastrado com sucesso!")
      router.push("/dashboard/vets")
    } catch (error) {
      toast.error("Ocorreu um erro ao salvar. Tente novamente.")
      console.error("Erro ao salvar:", error)
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold">Adicionar Veterinário</h1>
        <p className="text-sm text-gray-500">Cadastre uma novo veterinário parceiro</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl sm:p-6">
        {/* Formulário com onSubmit */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
  

             {/* Campo Nome */}
            <div>
              <label className="block text-sm font-medium mb-1">Nome do Veterinário</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg px-3 py-2`}
              />
              {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
            </div>
            {/* phone */}
          
            <div>
              <label className="block text-sm font-medium mb-1">Telefone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={15}
                className={`w-full border ${errors.whatsapp ? "border-red-500" : "border-gray-300"} rounded-lg px-3 py-2`}
              />
              {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
            </div>
            {/* Campo Whatsapp */}
            <div>
              <label className="block text-sm font-medium mb-1">Whatsapp</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                maxLength={15}
                className={`w-full border ${errors.whatsapp ? "border-red-500" : "border-gray-300"} rounded-lg px-3 py-2`}
              />
              {errors.whatsapp && <p className="text-sm text-red-600">{errors.whatsapp}</p>}
            </div>
            {/* Campo Email */}
            <InputField
              label="Email"
              name="email"
              register={handleChange}
              error={errors.email}
            />
            {/* Campo CRM */} 
           
            {/* Campo CRM Number */}
            <InputField
              label="CRM Number"
              name="crmNumber"
              register={handleChange}
              error={errors.crmNumber}
            />
          </div>

     


          {/* Botões de ação */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => router.push("/dashboard/vets")}
              className="px-4 py-2 border border-gray-300 rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-500/90 text-white rounded-lg"
            >
              Salvar Veterinário
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function InputField({
  label,
  name,
  register,
  error,
}: {
  label: string
  name: string
  register: any
  error?: string
}) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          {...register(name)}
          type="text"
          id={name}
          className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
