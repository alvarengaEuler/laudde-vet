"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type Patient, getPatientById } from "@/lib/mock-data"
import { Skeleton } from "@/components/ui/skeleton"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const patientFormSchema = z.object({
  name: z.string().min(1, "O nome do paciente é obrigatório"),
  species: z.string().min(1, "A espécie é obrigatória"),
  breed: z.string().min(1, "A raça é obrigatória"),
  sex: z.enum(["male", "female"], {
    required_error: "O sexo é obrigatório",
  }),
  age: z.coerce.number().min(0, "A idade deve ser maior ou igual a zero"),
  ageUnit: z.enum(["years", "months"], {
    required_error: "A unidade de idade é obrigatória",
  }),
  ownerName: z.string().min(1, "O nome do tutor é obrigatório"),
  ownerPhone: z.string().min(1, "O telefone do tutor é obrigatório"),
})

type PatientFormValues = z.infer<typeof patientFormSchema>

export default function EditarPacientePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  
  const [patient, setPatient] = useState<Patient | null>(null)
  const [loading, setLoading] = useState(true)

  const form = useForm<PatientFormValues>({
    resolver: zodResolver(patientFormSchema),
    defaultValues: {
      name: "",
      species: "",
      breed: "",
      sex: "male",
      age: 0,
      ageUnit: "years",
      ownerName: "",
      ownerPhone: "",
    },
  })

  useEffect(() => {
    // Simulando carregamento de dados
    const timer = setTimeout(() => {
      const foundPatient = getPatientById(params.id)
      setPatient(foundPatient || null)

      if (foundPatient) {
        form.reset({
          name: foundPatient.name,
          species: foundPatient.species,
          breed: foundPatient.breed,
          sex: foundPatient.sex,
          age: foundPatient.age,
          ageUnit: foundPatient.ageUnit,
          ownerName: foundPatient.ownerName,
          ownerPhone: foundPatient.ownerPhone,
        })
      }

      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [params.id, form])

  const onSubmit = (data: PatientFormValues) => {
    console.log("Dados atualizados do paciente:", data)
    // toast({
    //   title: "Paciente atualizado",
    //   description: "As informações do paciente foram atualizadas com sucesso.",
    // })
    router.push(`/dashboard//pacientes/${params.id}`)
  }

  if (loading) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10 rounded-md" />
          <Skeleton className="h-8 w-48" />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 dark:bg-gray-900 dark:border-gray-800">
          <div className="space-y-4">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            <div className="flex justify-end gap-2 pt-4">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-24" />
            </div>
          </div>
        </div>
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
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center dark:bg-gray-900 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400">
            O paciente que você está tentando editar não foi encontrado ou não existe.
          </p>
          <Button className="mt-4" onClick={() => router.push("/dashboard/pacientes")}>
            Voltar para Pacientes
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={() => router.push(`/dashboard/pacientes/${params.id}`)}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-xl sm:text-2xl font-bold">Editar Paciente</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 dark:bg-gray-900 dark:border-gray-800">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Paciente</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome do paciente" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="species"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Espécie</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Canino, Felino" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <FormField
                control={form.control}
                name="breed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Raça</FormLabel>
                    <FormControl>
                      <Input placeholder="Raça do animal" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sex"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sexo</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o sexo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Macho</SelectItem>
                        <SelectItem value="female">Fêmea</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-4 sm:space-y-0">
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Idade</FormLabel>
                      <FormControl>
                        <Input type="number" min="0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ageUnit"
                  render={({ field }) => (
                    <FormItem className="sm:w-1/3">
                      <FormLabel>Unidade</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="years">Anos</SelectItem>
                          <SelectItem value="months">Meses</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="ownerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Tutor</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome do tutor" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="ownerPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone do Tutor</FormLabel>
                  <FormControl>
                    <Input placeholder="(00) 00000-0000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-3">
              <Button type="button" variant="outline" onClick={() => router.push(`/dashboard/pacientes/${params.id}`)}>
                Cancelar
              </Button>
              <Button type="submit">Salvar Alterações</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
