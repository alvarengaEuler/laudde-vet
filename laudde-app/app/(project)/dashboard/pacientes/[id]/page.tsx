"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect, use } from "react"
import { Pencil, ArrowLeft, User, Calendar, Phone, PawPrintIcon as Paw, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type Patient, getPatientById } from "@/lib/mock-data"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


interface PageParams {
  id: string;
}



export default function PacienteDetalhesPage({ params }: { params: Promise<PageParams> }) {
  const { id } = use(params); 
  const router = useRouter()
  const [patient, setPatient] = useState<Patient | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulando carregamento de dados
    const timer = setTimeout(() => {
      const foundPatient = getPatientById(id)
      setPatient(foundPatient || null)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [id])

  if (loading) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-10 w-24" />
        </div>
        <Card>
          <CardHeader>
            <Skeleton className="h-7 w-40 mb-2" />
            <Skeleton className="h-4 w-60" />
          </CardHeader>
          <CardContent className="space-y-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-4 w-full max-w-md" />
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!patient) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => router.push("/dashboard/pacientes")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-xl sm:text-2xl font-bold">Paciente não encontrado</h1>
        </div>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              O paciente que você está procurando não foi encontrado ou não existe.
            </p>
            <Button className="mt-4" onClick={() => router.push("/dashboard/pacientes")}>
              Voltar para Pacientes
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => router.push("/dashboard/pacientes")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-xl sm:text-2xl font-bold">{patient.name}</h1>
        </div>
        <Button onClick={() => router.push(`/dashboard/pacientes/${id}/editar`)}>
          <Pencil className="h-4 w-4 mr-2" />
          Editar Paciente
        </Button>
      </div>

      <Tabs defaultValue="info" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="info">Informações</TabsTrigger>
          <TabsTrigger value="history">Histórico</TabsTrigger>
          <TabsTrigger value="reports">Laudos</TabsTrigger>
        </TabsList>

        <TabsContent value="info">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Informações do Paciente
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Paw className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Espécie</p>
                      <p className="text-gray-600 dark:text-gray-400">{patient.species}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Paw className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Raça</p>
                      <p className="text-gray-600 dark:text-gray-400">{patient.breed}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Sexo</p>
                      <p className="text-gray-600 dark:text-gray-400">{patient.sex === "male" ? "Macho" : "Fêmea"}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Idade</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {patient.age} {patient.ageUnit === "years" ? "anos" : "meses"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <User className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Tutor</p>
                      <p className="text-gray-600 dark:text-gray-400">{patient.ownerName}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Telefone do Tutor</p>
                      <p className="text-gray-600 dark:text-gray-400">{patient.ownerPhone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">Nenhum histórico disponível para este paciente.</p>
                <Button className="mt-4">Adicionar Histórico</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">Nenhum laudo disponível para este paciente.</p>
                <Button className="mt-4" onClick={() => router.push("/laudos/novo")}>
                  Criar Novo Laudo
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
