"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner" // importa o sonner para exibir toasts

import { clinicaSchema } from "@/lib/utils/br-validations"
import { formatCNPJ, formatCPF, formatPhone } from "@/lib/utils/masks"
import { estadosBrasil } from "@/lib/utils/br-states"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function NovaClinicaPage() {
  const router = useRouter()

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    cnpj: "",
    cpf: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    whatsapp: "",
  })

  // Estado para armazenar erros de validação
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({})

  // Lida com alterações nos campos de input, aplicando máscaras conforme o campo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let maskedValue = value

    if (name === "cnpj") maskedValue = formatCNPJ(value)
    if (name === "cpf") maskedValue = formatCPF(value)
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
    const result = clinicaSchema.safeParse(formData)

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
      await fetch("/api/clinics", { method: "POST", body: JSON.stringify(formData) })

      toast.success("Clínica cadastrada com sucesso!")
      router.push("/dashboard/clinicas")
    } catch (error) {
      toast.error("Ocorreu um erro ao salvar. Tente novamente.")
      console.error("Erro ao salvar:", error)
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold">Nova Clínica</h1>
        <p className="text-sm text-gray-500">Cadastre uma nova clínica parceira</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl sm:p-6">
        {/* Formulário com onSubmit */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Campo Nome */}
            <div>
              <label className="block text-sm font-medium mb-1">Nome da Clínica</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg px-3 py-2`}
              />
              {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
            </div>

            {/* Campo CNPJ */}
            <div>
              <label className="block text-sm font-medium mb-1">CNPJ</label>
              <input
                type="text"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleChange}
                maxLength={18}
                className={`w-full border ${errors.cnpj ? "border-red-500" : "border-gray-300"} rounded-lg px-3 py-2`}
              />
              {errors.cnpj && <p className="text-sm text-red-600">{errors.cnpj}</p>}
            </div>
          </div>

          {/* CPF e WhatsApp */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* <div>
              <label className="block text-sm font-medium mb-1">CPF</label>
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                maxLength={14}
                className={`w-full border ${errors.cpf ? "border-red-500" : "border-gray-300"} rounded-lg px-3 py-2`}
              />
              {errors.cpf && <p className="text-sm text-red-600">{errors.cpf}</p>}
            </div> */}

            <div>
              <label className="block text-sm font-medium mb-1">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                maxLength={15}
                className={`w-full border ${errors.whatsapp ? "border-red-500" : "border-gray-300"} rounded-lg px-3 py-2`}
              />
              {errors.whatsapp && <p className="text-sm text-red-600">{errors.whatsapp}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Telefone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={15}
                className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg px-3 py-2`}
              />
              {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
            </div>
          </div>

          {/* Telefone e Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* <div>
              <label className="block text-sm font-medium mb-1">Telefone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={15}
                className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg px-3 py-2`}
              />
              {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
            </div> */}

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
               className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg px-3 py-2`}
              />
               {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
            </div>
          </div>

          {/* Endereço */}
          <div className="border-t border-t-gray-200 pt-4">
            <label className="block text-sm font-medium mb-1">Endereço</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          {/* Cidade e Estado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Cidade</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            {/* Select para o estado com validação */}
            <div>
              <label className="block text-sm font-medium mb-1">Estado</label>
              <Select
                value={formData.state}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, state: value }))
                }
              >
                <SelectTrigger className="w-full border border-gray-300 rounded-lg px-3 py-5">
                  <SelectValue placeholder="Selecione o estado" />
                </SelectTrigger>
                <SelectContent>
                  {estadosBrasil.map((estado) => (
                    <SelectItem key={estado.value} value={estado.value}>
                      {estado.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.state && <p className="text-sm text-red-600">{errors.state}</p>}
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => router.push("/dashboard/clinicas")}
              className="px-4 py-2 border border-gray-300 rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Salvar Clínica
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
