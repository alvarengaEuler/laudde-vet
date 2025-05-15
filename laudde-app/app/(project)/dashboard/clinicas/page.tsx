"use client"
import Link from "next/link"
import { Plus } from "lucide-react"
import { DataTable } from "@/components/ui/data-table"
import { clinics } from "@/lib/mock-data"
import { useRouter } from "next/navigation"

export default function ClinicasPage() {
  const router = useRouter()

  const columns = [
    {
      key: "name",
      header: "Nome",
    },
    {
      key: "cnpj",
      header: "CNPJ",
    },
    {
      key: "address",
      header: "Endereço",
      render: (clinic: any) => <span>{`${clinic.address}, ${clinic.city}/${clinic.state}`}</span>,
    },
    {
      key: "createdAt",
      header: "Cadastro",
      render: (clinic: any) => <span>{new Date(clinic.createdAt).toLocaleDateString("pt-BR")}</span>,
    },
  ]

  const handleRowClick = (clinic: any) => {
    router.push(`/dashboard/clinicas/${clinic.id}`)
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Clínicas</h1>
          <p className="text-sm text-gray-500">Gerencie suas clínicas parceiras</p>
        </div>
        <Link
          href="/dashboard/clinicas/novo"
          className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          <Plus size={18} className="mr-2" />
          Nova Clínica
        </Link>
      </div>

      <div className=" rounded-xl  border border-gray-100 dark:border-gray-800 p-4 sm:p-6">
        <DataTable
          data={clinics}
          columns={columns}
          searchable={true}
          searchKeys={["name", "cnpj", "city"]}
          onRowClick={handleRowClick}
        />
      </div>
    </div>
  )
}
