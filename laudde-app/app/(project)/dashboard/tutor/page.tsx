'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { DataTable } from '@/components/ui/data-table'
import { fetchTutors } from './actions'

export default function TutorsPage() {
  const router = useRouter()

  const {
    data: tutors = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['tutors'],
    queryFn: fetchTutors,
  })

  const columns = [
    {
      key: 'name',
      header: 'Nome',
      render: (tutor: any) => tutor.name || '-',
    },
    {
      key: 'whatsapp',
      header: 'Whatsapp',
      render: (tutor: any) => tutor.whatsapp || '-',
    },
    {
      key: 'email',
      header: 'Email',
      render: (tutor: any) => tutor.email || '-',
    },
    {
      key: 'createdAt',
      header: 'Cadastro',
      render: (tutor: any) =>
        tutor.createdAt ? (
          <span>{new Date(tutor.createdAt).toLocaleDateString('pt-BR')}</span>
        ) : (
          '-'
        ),
    },
    {
      key: 'pets',
      header: 'Pets',
      render: (tutor: any) => {
        const pets = tutor.patients || [] // ou tutor.pets dependendo da API
        const hasPets = pets.length > 0

        const handlePetRegisterClick = (e: React.MouseEvent) => {
          e.stopPropagation()
          router.push(`/dashboard/pacientes/novo?ownerId=${tutor.id}&ownerName=${tutor.name}`)
        }

        return (
          <div className="flex flex-col gap-1">
            <span>{hasPets ? `${pets.length} pet(s)` : 'Nenhum pet'}</span>
            <button
              onClick={handlePetRegisterClick}
              className="text-left text-sm text-blue-600 hover:underline"
            >
              {hasPets ? 'Cadastrar novo pet' : 'Cadastrar Bicho'}
            </button>
          </div>
        )
      },
    },
  ]

  const handleRowClick = (tutor: any) => {
    router.push(`/dashboard/tutor/${tutor.id}`)
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <h1 className="text-xl font-bold sm:text-2xl">Tutores</h1>
          <p className="text-sm text-gray-500">Lista de tutores cadastrados.</p>
        </div>
        <Link
          href="/dashboard/tutor/novo"
          className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 sm:w-auto"
        >
          <Plus size={18} className="mr-2" />
          Cadastrar Tutor
        </Link>
      </div>

      <div className="rounded-xl">
        {isLoading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p className="text-red-500">Erro ao carregar lista de tutores.</p>
        ) : (
          <DataTable
            data={tutors}
            columns={columns}
            searchable={true}
            searchKeys={['name', 'email', 'whatsapp']}
            onRowClick={handleRowClick}
          />
        )}
      </div>
    </div>
  )
}
