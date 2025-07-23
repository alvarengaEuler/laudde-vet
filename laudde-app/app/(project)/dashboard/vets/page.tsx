'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { DataTable } from '@/components/ui/data-table'

export default function VetsPage() {
  const [vets, setVets] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function fetchVets() {
      try {
        const res = await fetch('/api/vets', {
          cache: 'force-cache',
        })

        if (!res.ok) throw new Error('Erro ao buscar clínicas')
        const data = await res.json()
        setVets(data)
      } catch (error) {
        console.error('Erro ao buscar clínicas:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchVets()
  }, [])

  const columns = [
    {
      key: 'name',
      header: 'Nome',
    },
    {
      key: 'email',
      header: 'email',
    },
    {
      key: 'whatsapp',
      header: 'Whatsapp',
    },
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
    router.push(`/dashboard/vets/${clinic.id}`)
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <h1 className="text-xl font-bold sm:text-2xl">Veterinários</h1>
          <p className="text-sm text-gray-500">Gerencie suas veterinários parceiros</p>
        </div>
        <Link
          href="/dashboard/vets/novo"
          className="inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-500/90 sm:w-auto"
        >
          <Plus size={18} className="mr-2" />
          Cadastrar Veterinário
        </Link>
      </div>

      <div className="rounded-xl dark:border-gray-800">
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <DataTable
            data={vets}
            columns={columns}
            searchable={true}
            searchKeys={['name', 'crm', 'email', 'whatsapp']}
            onRowClick={handleRowClick}
          />
        )}
      </div>
    </div>
  )
}
