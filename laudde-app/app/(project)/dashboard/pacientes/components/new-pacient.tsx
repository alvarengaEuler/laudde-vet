'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FileSearch } from 'lucide-react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { PatientOwnerSidesheet } from '../components/patient-owner-sidesheet'

import { QuickTutorSidesheet } from '../components/quick-tutor-sidesheet'
import { fetchTutors } from '../../tutor/actions'

const patientSchema = z.object({
  name: z.string().min(1, 'Nome do paciente é obrigatório'),
  species: z.string().min(1, 'Espécie é obrigatória'),
  breed: z.string().min(1, 'Raça é obrigatória'),
  sex: z.enum(['MALE', 'FEMALE']),
  age: z.string().min(1, 'Idade é obrigatória'),
  ageUnit: z.enum(['YEARS', 'MONTHS']),
  tutorId: z.string().min(3, 'É necessário associar um tutor'),
  tutorName: z.string().optional(),
})

type PatientFormData = z.infer<typeof patientSchema>

export default function NovoPacienteClientComponent() {
  const queryClient = useQueryClient()
  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PatientFormData>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      name: '',
      species: '',
      breed: '',
      sex: 'MALE',
      age: '',
      ageUnit: 'YEARS',
      tutorId: '',
      tutorName: '',
    },
  })

  const [open, setOpen] = useState(false)

  const {
    data: tutors = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['tutors'],
    queryFn: fetchTutors,
  })

  useEffect(() => {
    const tutorId = searchParams.get('ownerId')
    const tutorName = searchParams.get('ownerName')
    const openTutorSideSheet = searchParams.get('openTutorSideSheet')
    if (openTutorSideSheet === 'true') {
      setIsSidesheetOpen(true)
    }

    console.log('Tutor ID:', tutorId)
    console.log('Tutor Name:', tutorName)
    if (tutorId && tutorName) {
      setValue('tutorId', tutorId)
      setValue('tutorName', tutorName)
    }
  }, [searchParams, setValue])

  const [isSidesheetOpen, setIsSidesheetOpen] = useState(false)

  const handleTutorCreated = (tutor: { id: string; name: string }) => {
    // Faça algo com o novo tutor criado
    console.log('Novo tutor criado:', tutor)
    setValue('tutorId', tutor.id)
    setValue('tutorName', tutor.name)
    setOpen(false)
  }

  const handleTutorSelect = (tutor: { id: string; name: string }) => {
    console.log('SideSheet Tutor ID:', tutor.id)
    console.log('SideSheet Tutor Name:', tutor.name)
    setValue('tutorId', tutor.id)
    setValue('tutorName', tutor.name)
    setOpen(false)
  }

  const onSubmit = async (data: PatientFormData) => {
    try {
      console.log('Form data submitted:', data)
      await fetch('/api/patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      toast.success('Paciente cadastrado com sucesso!')
      // Redirecionar para a lista de pacientes após salvar
      router.push('/dashboard/pacientes')
    } catch (error) {
      console.error('Erro ao salvar paciente:', error)
      toast.error('Erro ao salvar. Verifique os campos.')
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-xl font-bold sm:text-2xl">Novo Paciente</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Cadastre um novo paciente</p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-700 dark:bg-gray-800">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nome do Paciente <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('name')}
                className={`w-full rounded-lg border bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 ${
                  errors.name
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Espécie <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('species')}
                className={`w-full rounded-lg border bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 ${
                  errors.species
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
              />
              {errors.species && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                  {errors.species.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Raça <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('breed')}
                className={`w-full rounded-lg border bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 ${
                  errors.breed
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
              />
              {errors.breed && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                  {errors.breed.message}
                </p>
              )}
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Sexo <span className="text-red-500">*</span>
              </label>
              <select
                {...register('sex')}
                className={`w-full rounded-lg border bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 ${
                  errors.sex
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                <option value="MALE">Macho</option>
                <option value="FEMALE">Fêmea</option>
              </select>
              {errors.sex && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.sex.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-3 sm:space-y-0">
              <div className="flex-1">
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Idade <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  {...register('age')}
                  className={`w-full rounded-lg border bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 ${
                    errors.age
                      ? 'border-red-500 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  min="0"
                />
                {errors.age && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.age.message}
                  </p>
                )}
              </div>
              <div className="sm:w-1/3">
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Unidade <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('ageUnit')}
                  className={`w-full rounded-lg border bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 ${
                    errors.ageUnit
                      ? 'border-red-500 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <option value="YEARS">Anos</option>
                  <option value="MONTHS">Meses</option>
                </select>
                {errors.ageUnit && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.ageUnit.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Tutor <span className="text-red-500">*</span>
              </label>
              <div>
                <div className="flex items-center gap-2">
                  <div
                    className={`flex-1 rounded-lg border bg-white p-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white ${
                      errors.tutorId
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    {watch('tutorName') || (
                      <span className="text-gray-400 dark:text-gray-400">
                        Nenhum tutor selecionado
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(true)
                      queryClient.invalidateQueries({ queryKey: ['tutors'] })
                    }}
                    className="flex items-center justify-center rounded-lg border border-gray-300 p-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
                  >
                    <FileSearch className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
                {errors.tutorId && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.tutorId.message}
                  </p>
                )}
                <input type="hidden" {...register('tutorId')} />
                <input type="hidden" {...register('tutorName')} />

                <PatientOwnerSidesheet
                  open={open}
                  onOpenChange={setOpen}
                  patientOwners={tutors}
                  isLoading={isLoading}
                  error={error ? error.message : null}
                  onSelectTutor={handleTutorSelect}
                />
                <QuickTutorSidesheet
                  open={isSidesheetOpen}
                  onOpenChange={setIsSidesheetOpen}
                  onTutorCreated={handleTutorCreated}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2 sm:flex-row sm:justify-end sm:space-x-3 sm:space-y-0">
            <button
              type="button"
              onClick={() => router.push('/dashboard/pacientes')}
              className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Salvar Paciente
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
