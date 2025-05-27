'use client'

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

// Validação com Zod
const patientFormSchema = z.object({
  name: z.string().min(1, 'O nome do paciente é obrigatório'),
  species: z.string().min(1, 'A espécie é obrigatória'),
  breed: z.string().min(1, 'A raça é obrigatória'),
  sex: z.enum(['MALE', 'FEMALE'], {
    required_error: 'O sexo é obrigatório',
  }),
  age: z.coerce.number().min(0, 'A idade deve ser maior ou igual a zero'),
  ageUnit: z.enum(['years', 'months'], {
    required_error: 'A unidade de idade é obrigatória',
  }),
})
type PatientFormData = z.infer<typeof patientFormSchema>

interface EditParams {
  id: string
}

export default function EditarPacientePage({ params }: { params: Promise<EditParams> }) {
  const { id } = use(params)
  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue,
    // watch,
  } = useForm<PatientFormData>({
    resolver: zodResolver(patientFormSchema),
    defaultValues: {
      name: searchParams.get('patientName') || '',
      species: searchParams.get('patientSpecies') || '',
      breed: searchParams.get('patientBreed') || '',
      sex: searchParams.get('patientSex') === 'MALE' ? 'MALE' : 'FEMALE',
      age: searchParams.get('patientAge') ? parseInt(searchParams.get('age') || '0', 10) : 0,
      ageUnit: searchParams.get('patientAgeUnit') === 'years' ? 'years' : 'months',
    },
  })

  const onSubmit = async (data: PatientFormData) => {
    const response = await fetch('/api/clinics', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id, ...data }),
    })

    if (response.ok) {
      router.push(`/dashboard/clinicas/${id}`)
    } else {
      alert('Erro ao atualizar clínica.')
    }
  }

  // const stateValue = watch('sex')

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-2">
        <Link href={`/dashboard/pacientes`}>
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold sm:text-2xl">Editar Paciente</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Informações do Paciente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <InputField
                label="Nome (obrigatório)"
                name="name"
                error={errors.name?.message}
                register={register}
              />
              <InputField
                label="Espécie"
                name="species"
                error={errors.species?.message}
                register={register}
              />
              <InputField
                label="Raça"
                name="breed"
                error={errors.breed?.message}
                register={register}
              />

              {/* Select do Estado */}
              {/* <div className="space-y-1">
                <label
                  htmlFor="sex"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Estado (obrigatório)
                </label>
                <Select value={stateValue} onValueChange={(value) => setValue('sex', value)}>
                  <SelectTrigger className="w-full rounded-md border border-gray-300 px-3 py-2">
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
              </div> */}

              <InputField
                label="Idade"
                name="age"
                error={errors.age?.message}
                register={register}
              />
            </div>
            <div className="pt-4">
              <Button type="submit" variant="success" className="flex items-center gap-2">
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
          className="w-full rounded-md border bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-800"
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
