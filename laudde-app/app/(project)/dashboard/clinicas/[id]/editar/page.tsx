'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, Save, Building2 } from 'lucide-react'

import { estadosBrasil } from "@/lib/utils/br-states"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Validação com Zod
const clinicSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  whatsapp: z.string().min(1, { message: 'WhatsApp é obrigatório' }),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().min(1, { message: 'Estado é obrigatório' }),
  phone: z.string().optional(),
  cnpj: z.string().optional(),
})

type ClinicFormData = z.infer<typeof clinicSchema>

export type PageProps = {
  params: {
    id: string;
  };
};


export default function EditarClinicaPage({ params }: PageProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ClinicFormData>({
    resolver: zodResolver(clinicSchema),
    defaultValues: {
      name: searchParams.get('name') || '',
      address: searchParams.get('address') || '',
      city: searchParams.get('city') || '',
      state: searchParams.get('state') || '',
      email: searchParams.get('email') || '',
      phone: searchParams.get('phone') || '',
      whatsapp: searchParams.get('whatsapp') || '',
      cnpj: searchParams.get('cnpj') || '',
    },
  })

  const onSubmit = async (data: ClinicFormData) => {
    const response = await fetch('/api/clinics', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: params.id, ...data }),
    })

    if (response.ok) {
      router.push(`/dashboard/clinicas/${params.id}`)
    } else {
      alert('Erro ao atualizar clínica.')
    }
  }

  const stateValue = watch('state')

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-2">
        <Link href={`/dashboard/clinicas/${params.id}`}>
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-xl sm:text-2xl font-bold">Editar Clínica</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Informações da Clínica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Clínica (obrigatório)" name="name" error={errors.name?.message} register={register} />
              <InputField label="Endereço" name="address" error={errors.address?.message} register={register} />
              <InputField label="Cidade" name="city" error={errors.city?.message} register={register} />

              {/* Select do Estado */}
              <div className="space-y-1">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Estado (obrigatório)
                </label>
                <Select
                  value={stateValue}
                  onValueChange={(value) => setValue('state', value)}
                >
                  <SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2">
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
                {errors.state && <p className="text-sm text-red-500">{errors.state.message}</p>}
              </div>

              <InputField label="Email (obrigatório)" name="email" error={errors.email?.message} register={register} />
              <InputField label="Telefone" name="phone" error={errors.phone?.message} register={register} />
              <InputField label="WhatsApp (obrigatório)" name="whatsapp" error={errors.whatsapp?.message} register={register} />
              <InputField label="CNPJ" name="cnpj" error={errors.cnpj?.message} register={register} />
            </div>
            <div className="pt-4">
              <Button type="submit" className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                Salvar Alterações
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
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
