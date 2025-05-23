"use client"
import Link from "next/link"
import { Plus, Calendar, Phone, Mail } from "lucide-react"
import { DataTable } from "@/components/ui/data-table"
import { patients } from "@/lib/mock-data"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function PacientesPage() {
  const router = useRouter()
  const [viewMode, setViewMode] = useState<"list" | "card">("card")

  const columns = [
    {
      key: "name",
      header: "Nome",
      render: (patient: any) => (
        <div>
          <div className="font-medium text-gray-900 dark:text-gray-100">{patient.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{patient.breed}</div>
        </div>
      ),
    },
    {
      key: "species",
      header: "Espécie",
    },
    {
      key: "sex",
      header: "Sexo",
      render: (patient: any) => <span>{patient.sex === "male" ? "Macho" : "Fêmea"}</span>,
    },
    {
      key: "age",
      header: "Idade",
      render: (patient: any) => (
        <span>
          {patient.age} {patient.ageUnit === "years" ? "anos" : "meses"}
        </span>
      ),
    },
    {
      key: "ownerName",
      header: "Tutor",
    },
    {
      key: "ownerPhone",
      header: "Telefone",
    },
    {
      key: "createdAt",
      header: "Cadastro",
      render: (patient: any) => <span>{new Date(patient.createdAt).toLocaleDateString("pt-BR")}</span>,
    },
  ]

  const handleRowClick = (patient: any) => {
    router.push(`/dashboard/pacientes/${patient.id}`)
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Pacientes</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Gerencie seus pacientes</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex rounded-md overflow-hidden">
            <Button
              variant={viewMode === "card" ? "default" : "outline"}
              className="rounded-r-none"
              onClick={() => setViewMode("card")}
            >
              Cards
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              className="rounded-l-none"
              onClick={() => setViewMode("list")}
            >
              Lista
            </Button>
          </div>
          <Link
            href="/dashboard/pacientes/novo"
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            <Plus size={18} className="mr-2" />
            Novo Paciente
          </Link>
        </div>
      </div>

      {viewMode === "list" ? (
        <div className="bg-white rounded-xl  border border-gray-100 p-4 sm:p-6 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none">
          <DataTable
            data={patients}
            columns={columns}
            searchable={true}
            searchKeys={["name", "species", "breed", "ownerName"]}
            onRowClick={handleRowClick}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {patients.map((patient) => (
            <Card
              key={patient.id}
              className="cursor-pointer hover:shadow-md transition-shadow dark:border-gray-800"
              onClick={() => router.push(`/dashboard/pacientes/${patient.id}`)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{patient.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg dark:text-white">{patient.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {patient.species} • {patient.breed}
                        </p>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                        {patient.sex === "male" ? "Macho" : "Fêmea"}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar size={14} />
                        <span>
                          {patient.age} {patient.ageUnit === "years" ? "anos" : "meses"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-1">
                        <Mail size={14} />
                        <span>{patient.ownerName}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone size={14} />
                        <span>{patient.ownerPhone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
