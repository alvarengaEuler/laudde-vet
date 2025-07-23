'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { DataTable } from '@/components/ui/data-table'

async function fetchClinics() {
  const res = await fetch('/api/clinics')
  if (!res.ok) throw new Error('Erro ao buscar clínicas')
  return res.json()
}

export default function ClinicasPage() {
  const router = useRouter()

  const {
    data: clinics = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['clinics'],
    queryFn: fetchClinics,
  })

  const columns = [
    { key: 'name', header: 'Nome' },
    { key: 'whatsapp', header: 'Whatsapp' },
    { key: 'email', header: 'Email' },
    {
      key: 'createdAt',
      header: 'Cadastro',
      render: (clinic: any) =>
        clinic.createdAt ? (
          <span>{new Date(clinic.createdAt).toLocaleDateString('pt-BR')}</span>
        ) : (
          '-'
        ),
    },
  ]

  const handleRowClick = (clinic: any) => {
    router.push(`/dashboard/clinicas/${clinic.id}`)
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <h1 className="text-xl font-bold sm:text-2xl">Clínicas</h1>
          <p className="text-sm text-gray-500">Gerencie suas clínicas parceiras</p>
        </div>
        <Link
          href="/dashboard/clinicas/novo"
          className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 sm:w-auto"
        >
          <Plus size={18} className="mr-2" />
          Nova Clínica
        </Link>
      </div>

      <div className="rounded-xl">
        {isLoading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p className="text-red-500">Erro ao carregar clínicas</p>
        ) : (
          <DataTable
            data={clinics}
            columns={columns}
            searchable={true}
            searchKeys={['name', 'cnpj', 'city']}
            onRowClick={handleRowClick}
          />
        )}
      </div>
    </div>
  )
}
