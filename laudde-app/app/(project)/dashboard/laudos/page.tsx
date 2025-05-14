"use client"
import Link from "next/link"
import { Copy, FileText, Link2, Mail, MessageCircle, Plus } from "lucide-react"
import { DataTable } from "@/components/ui/data-table"
import { reports, getPatientById, getClinicById } from "@/lib/mock-data"
import { useRouter } from "next/navigation"
import { useState } from "react"
// import { useToast } from "@/hooks/use-toast"

export default function LaudosPage() {
  const router = useRouter()
  const [showDuplicateOptions, setShowDuplicateOptions] = useState(false)
  const [selectedReport, setSelectedReport] = useState<string | null>(null)
//   const { toast } = useToast()
  // Adicione um novo estado para o filtro de status após os outros estados
  const [statusFilter, setStatusFilter] = useState<"all" | "completed" | "draft">("all")

  const columns = [
    {
      key: "id",
      header: "ID",
      render: (report: any) => <span>#{report.id}</span>,
    },
    {
      key: "patientId",
      header: "Paciente",
      render: (report: any) => {
        const patient = getPatientById(report.patientId)
        return (
          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100">{patient?.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {patient?.species} - {patient?.breed}
            </div>
          </div>
        )
      },
    },
    {
      key: "clinicId",
      header: "Clínica",
      render: (report: any) => {
        const clinic = getClinicById(report.clinicId)
        return <span>{clinic?.name}</span>
      },
    },
    {
      key: "type",
      header: "Tipo",
      render: (report: any) => (
        <div className="flex flex-col">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
            {report.type === "ultrasound" ? "Ultrassom" : "Raio-X"}
          </span>
          {report.category && (
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{getCategoryName(report.category)}</span>
          )}
        </div>
      ),
    },
    {
      key: "createdAt",
      header: "Data",
      render: (report: any) => <span>{new Date(report.createdAt).toLocaleDateString("pt-BR")}</span>,
    },
    {
      key: "status",
      header: "Status",
      render: (report: any) => (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            report.status === "completed"
              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
          }`}
        >
          {report.status === "completed" ? "Concluído" : "Rascunho"}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Ações",
      render: (report: any) => (
        <div className="flex space-x-1">
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleDuplicate(report.id)
            }}
            className="p-1.5 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-gray-800"
            title="Duplicar laudo"
          >
            <Copy size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleShareEmail(report.id)
            }}
            className="p-1.5 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-gray-800"
            title="Enviar por email"
          >
            <Mail size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleShareWhatsApp(report.id)
            }}
            className="p-1.5 text-gray-500 hover:text-green-600 rounded-full hover:bg-gray-100 dark:text-gray-400 dark:hover:text-green-400 dark:hover:bg-gray-800"
            title="Enviar por WhatsApp"
          >
            <MessageCircle size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleShareLink(report.id)
            }}
            className="p-1.5 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-gray-800"
            title="Compartilhar link"
          >
            <Link2 size={16} />
          </button>
        </div>
      ),
    },
  ]

  const getCategoryName = (category: string): string => {
    const categoryNames: Record<string, string> = {
      abdominal: "Abdominal",
      cardiac: "Cardíaco",
      reproductive: "Reprodutivo",
      musculoskeletal: "Musculoesquelético",
      ocular: "Ocular",
      thyroid: "Tireoide",
      thoracic: "Torácico",
      skeletal: "Esquelético",
      dental: "Dentário",
    }

    return categoryNames[category] || category
  }

  const handleRowClick = (report: any) => {
    router.push(`/laudos/${report.id}`)
  }

  const handleDuplicate = (reportId: string) => {
    setSelectedReport(reportId)
    setShowDuplicateOptions(true)
  }

  const handleDuplicateConfirm = (keepPatient: boolean, keepClinic: boolean) => {
    // Na implementação real, isso seria uma chamada à API
    // Para demonstração, vamos apenas navegar para a página de novo laudo com parâmetros
    const params = new URLSearchParams()
    params.append("duplicate", selectedReport || "")
    params.append("keepPatient", keepPatient.toString())
    params.append("keepClinic", keepClinic.toString())

    router.push(`/laudos/novo?${params.toString()}`)
    setShowDuplicateOptions(false)
  }

  const handleShareEmail = (reportId: string) => {
    // Na implementação real, isso abriria um modal ou enviaria diretamente
    const report = reports.find((r) => r.id === reportId)
    const patient = report ? getPatientById(report.patientId) : null

    if (report && patient) {
      const subject = `Laudo Veterinário - ${patient.name}`
      const body = `Acesse seu laudo através do link: ${window.location.origin}/laudos/publico/${report.code}`
      window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
    }
  }

  const handleShareWhatsApp = (reportId: string) => {
    // Na implementação real, isso poderia abrir um modal para escolher o contato
    const report = reports.find((r) => r.id === reportId)

    if (report) {
      const text = `Acesse seu laudo veterinário através do link: ${window.location.origin}/laudos/publico/${report.code}`
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`)
    }
  }

  const handleShareLink = (reportId: string) => {
    const report = reports.find((r) => r.id === reportId)

    if (report) {
      const publicUrl = `${window.location.origin}/laudos/publico/${report.code}`
      navigator.clipboard.writeText(publicUrl)

    //   toast({
    //     title: "Link copiado!",
    //     description: "Link de acesso ao laudo copiado para a área de transferência.",
    //   })
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Laudos</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Gerencie seus laudos veterinários</p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <Link
            href="/laudos/novo"
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            <Plus size={18} className="mr-2" />
            Novo Laudo
          </Link>
          <Link
            href="/laudos/abdominal"
            className="inline-flex items-center justify-center px-4 py-2 border border-blue-600 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto dark:bg-transparent dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-950"
          >
            <FileText size={18} className="mr-2" />
            Editor Abdominal
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none">
        {/* Modifique a função DataTable para adicionar o filtro de status */}
        <DataTable
          data={reports.filter((report) => (statusFilter === "all" ? true : report.status === statusFilter))}
          columns={columns}
          searchable={true}
          searchKeys={["id", "patientId", "clinicId", "type", "category"]}
          onRowClick={handleRowClick}
        >
          {/* Status filter chips */}
          <div className="mb-4 flex flex-wrap gap-2">
            <button
              onClick={() => setStatusFilter("all")}
              className={`px-3 py-1 rounded-full text-sm ${
                statusFilter === "all"
                  ? "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800"
                  : "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
              } border`}
            >
              Todos
            </button>
            <button
              onClick={() => setStatusFilter("completed")}
              className={`px-3 py-1 rounded-full text-sm ${
                statusFilter === "completed"
                  ? "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
                  : "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
              } border`}
            >
              Concluídos
            </button>
            <button
              onClick={() => setStatusFilter("draft")}
              className={`px-3 py-1 rounded-full text-sm ${
                statusFilter === "draft"
                  ? "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800"
                  : "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
              } border`}
            >
              Rascunhos
            </button>
          </div>

          {/* Versão para dispositivos móveis - cards */}
          <div className="lg:hidden space-y-3">
            {reports.length > 0 ? (
              reports.map((item, index) => (
                <div
                  key={index}
                  className={`border border-gray-200 rounded-lg p-3 dark:border-gray-700 ${handleRowClick ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800" : ""}`}
                  onClick={() => handleRowClick && handleRowClick(item)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">#{item.id}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(item.createdAt).toLocaleDateString("pt-BR")}
                      </div>
                    </div>
                    <div>
                      {item.type === "ultrasound" ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
                          Ultrassom
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300">
                          Raio-X
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between">
                      <div>
                        <div className="text-sm font-medium dark:text-gray-300">Paciente:</div>
                        <div className="text-sm dark:text-gray-400">{getPatientById(item.patientId)?.name}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium dark:text-gray-300">Clínica:</div>
                        <div className="text-sm dark:text-gray-400">{getClinicById(item.clinicId)?.name}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        item.status === "completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
                      }`}
                    >
                      {item.status === "completed" ? "Concluído" : "Rascunho"}
                    </span>

                    <div className="flex space-x-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDuplicate(item.id)
                        }}
                        className="p-1.5 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-gray-800"
                        title="Duplicar laudo"
                      >
                        <Copy size={16} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleShareEmail(item.id)
                        }}
                        className="p-1.5 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-gray-800"
                        title="Enviar por email"
                      >
                        <Mail size={16} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleShareLink(item.id)
                        }}
                        className="p-1.5 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-gray-800"
                        title="Compartilhar link"
                      >
                        <Link2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-4 text-gray-500 dark:text-gray-400">Nenhum resultado encontrado</div>
            )}
          </div>
        </DataTable>
      </div>

      {/* Modal de opções de duplicação */}
      {showDuplicateOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-md p-6 dark:bg-gray-800">
            <h3 className="text-lg font-medium mb-4 dark:text-white">Duplicar Laudo</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Escolha quais informações você deseja manter do laudo original:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleDuplicateConfirm(true, true)}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mr-2 dark:bg-blue-700 dark:hover:bg-blue-600"
                >
                  Mesmo paciente e clínica
                </button>
                <button
                  onClick={() => handleDuplicateConfirm(true, false)}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ml-2 dark:bg-blue-700 dark:hover:bg-blue-600"
                >
                  Apenas mesmo paciente
                </button>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleDuplicateConfirm(false, true)}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mr-2 dark:bg-blue-700 dark:hover:bg-blue-600"
                >
                  Apenas mesma clínica
                </button>
                <button
                  onClick={() => handleDuplicateConfirm(false, false)}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ml-2 dark:bg-blue-700 dark:hover:bg-blue-600"
                >
                  Novo paciente e clínica
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowDuplicateOptions(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
