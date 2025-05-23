'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, Save, Building2 } from 'lucide-react'


import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { use } from 'react'
import { veterinarianSchema } from '@/lib/utils/br-validations'


type vetFormData = z.infer<typeof veterinarianSchema>

interface EditParams {
  id: string;
}


export default function EditVetPage({ params }: { params: Promise<EditParams> }) {
  const { id } = use(params); 
  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<vetFormData>({
    resolver: zodResolver(veterinarianSchema),
    defaultValues: {
      name: searchParams.get('name') || '',
      phone: searchParams.get('phone') || '',
      whatsapp: searchParams.get('whatsapp') || '',
      email: searchParams.get('email') || '',
      crmNumber: searchParams.get('crmNumber') || '',
    },
  })

  const onSubmit = async (data: vetFormData) => {
    const response = await fetch('/api/vets', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id, ...data }),
    })

    if (response.ok) {
      router.push(`/dashboard/vets/${id}`)
    } else {
      alert('Erro ao atualizar clínica.')
    }
  }


  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-2">
        <Link href={`/dashboard/vets/${id}`}>
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-xl sm:text-2xl font-bold">Editar Veterinário</h1>
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
              <InputField label="Nome (obrigatório)" name="name" error={errors.name?.message} register={register} />
         
              <InputField label="Email (obrigatório)" name="email" error={errors.email?.message} register={register} />
              <InputField label="Telefone" name="phone" error={errors.phone?.message} register={register} />
              <InputField label="WhatsApp (obrigatório)" name="whatsapp" error={errors.whatsapp?.message} register={register} />
              <InputField label="CRM" name="crmNumber" error={errors.crmNumber?.message} register={register} />
              
            </div>
            <div className="pt-4">
              <Button type="submit" variant="success"  className="flex items-center gap-2">
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
