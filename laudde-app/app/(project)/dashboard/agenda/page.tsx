"use client"

import { useRef } from "react"

import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight, Plus, Clock, User, Building2, X, Check, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { patients, clinics } from "@/lib/mock-data"

// Tipos para os eventos da agenda
interface AppointmentEvent {
  id: string
  title: string
  start: Date
  end: Date
  patientId: string
  clinicId: string
  type: "ultrasound" | "x-ray" | "consultation" | "surgery" | "other"
  status: "scheduled" | "confirmed" | "completed" | "canceled"
  notes?: string
}

// Dados de exemplo para a agenda
const mockAppointments: AppointmentEvent[] = [
  {
    id: "1",
    title: "Ultrassom Abdominal",
    start: new Date(new Date().setHours(9, 0, 0, 0)),
    end: new Date(new Date().setHours(9, 30, 0, 0)),
    patientId: "1",
    clinicId: "1",
    type: "ultrasound",
    status: "confirmed",
  },
  {
    id: "2",
    title: "Raio-X Tórax",
    start: new Date(new Date().setHours(10, 0, 0, 0)),
    end: new Date(new Date().setHours(10, 30, 0, 0)),
    patientId: "2",
    clinicId: "1",
    type: "x-ray",
    status: "scheduled",
  },
  {
    id: "3",
    title: "Consulta de Rotina",
    start: new Date(new Date().setHours(11, 0, 0, 0)),
    end: new Date(new Date().setHours(11, 45, 0, 0)),
    patientId: "3",
    clinicId: "2",
    type: "consultation",
    status: "completed",
    notes: "Paciente apresentou melhora significativa.",
  },
  {
    id: "4",
    title: "Cirurgia",
    start: new Date(new Date().setHours(14, 0, 0, 0)),
    end: new Date(new Date().setHours(16, 0, 0, 0)),
    patientId: "4",
    clinicId: "1",
    type: "surgery",
    status: "scheduled",
  },
  {
    id: "5",
    title: "Ultrassom Cardíaco",
    start: new Date(new Date().setHours(16, 30, 0, 0)),
    end: new Date(new Date().setHours(17, 0, 0, 0)),
    patientId: "5",
    clinicId: "2",
    type: "ultrasound",
    status: "confirmed",
  },
]

// Adicionar eventos para os próximos dias
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const dayAfterTomorrow = new Date()
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)

mockAppointments.push(
  {
    id: "6",
    title: "Ultrassom Abdominal",
    start: new Date(tomorrow.setHours(10, 0, 0, 0)),
    end: new Date(tomorrow.setHours(10, 30, 0, 0)),
    patientId: "1",
    clinicId: "1",
    type: "ultrasound",
    status: "scheduled",
  },
  {
    id: "7",
    title: "Raio-X Tórax",
    start: new Date(dayAfterTomorrow.setHours(14, 0, 0, 0)),
    end: new Date(dayAfterTomorrow.setHours(14, 30, 0, 0)),
    patientId: "2",
    clinicId: "2",
    type: "x-ray",
    status: "scheduled",
  },
)

// Função auxiliar para formatar horários
const formatTime = (date: Date) => {
  return date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
}

// // Função para obter o nome do dia da semana
// const getDayName = (date: Date) => {
//   return date.toLocaleDateString("pt-BR", { weekday: "long" })
// }

// Função para verificar se duas datas são do mesmo dia
const isSameDay = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

// Componente para exibir um evento na agenda
const AppointmentItem = ({
  appointment,
  onClick,
}: {
  appointment: AppointmentEvent
  onClick: (appointment: AppointmentEvent) => void
}) => {
  const patient = patients.find((p) => p.id === appointment.patientId)
  const clinic = clinics.find((c) => c.id === appointment.clinicId)

  // Definir cores com base no tipo de evento
  const getTypeColor = () => {
    switch (appointment.type) {
      case "ultrasound":
        return "bg-blue-100 border-blue-300 text-blue-800"
      case "x-ray":
        return "bg-purple-100 border-purple-300 text-purple-800"
      case "consultation":
        return "bg-green-100 border-green-300 text-green-800"
      case "surgery":
        return "bg-red-100 border-red-300 text-red-800"
      default:
        return "bg-gray-100 border-gray-300 text-gray-800"
    }
  }

  // Definir ícone de status
  const getStatusIcon = () => {
    switch (appointment.status) {
      case "confirmed":
        return <Check size={14} className="text-green-600" />
      case "completed":
        return <Check size={14} className="text-blue-600" />
      case "canceled":
        return <X size={14} className="text-red-600" />
      default:
        return <Clock size={14} className="text-yellow-600" />
    }
  }

  return (
    <div
      className={`p-2 mb-2 rounded-md border cursor-pointer hover:shadow-md transition-shadow ${getTypeColor()}`}
      onClick={() => onClick(appointment)}
    >
      <div className="flex justify-between items-start">
        <div className="font-medium">{appointment.title}</div>
        <div className="flex items-center text-xs">
          {getStatusIcon()}
          <span className="ml-1">
            {appointment.status === "scheduled"
              ? "Agendado"
              : appointment.status === "confirmed"
                ? "Confirmado"
                : appointment.status === "completed"
                  ? "Concluído"
                  : "Cancelado"}
          </span>
        </div>
      </div>
      <div className="text-xs mt-1 flex items-center">
        <Clock size={12} className="mr-1" />
        {formatTime(appointment.start)} - {formatTime(appointment.end)}
      </div>
      <div className="text-xs mt-1 flex items-center">
        <User size={12} className="mr-1" />
        {patient?.name || "Paciente não encontrado"}
      </div>
      <div className="text-xs mt-1 flex items-center">
        <Building2 size={12} className="mr-1" />
        {clinic?.name || "Clínica não encontrada"}
      </div>
    </div>
  )
}

// Componente para exibir um dia na agenda
const DayView = ({
  date,
  appointments,
  onAppointmentClick,
}: {
  date: Date
  appointments: AppointmentEvent[]
  onAppointmentClick: (appointment: AppointmentEvent) => void
}) => {
  // Filtrar eventos para o dia atual
  const dayAppointments = appointments.filter((appointment) => isSameDay(appointment.start, date))

  // Verificar se é hoje
  const isToday = isSameDay(date, new Date())

  // Ordenar eventos por hora de início
  dayAppointments.sort((a, b) => a.start.getTime() - b.start.getTime())

  // Criar horas do dia (de 8h às 18h)
  const hours = Array.from({ length: 11 }, (_, i) => i + 8)

  return (
    <div className="mb-6">
      <div className={`text-lg font-medium mb-2 pb-1 border-b ${isToday ? "text-blue-600" : ""}`}>
        {date.toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long" })}
        {isToday && <span className="ml-2 text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Hoje</span>}
      </div>

      {dayAppointments.length > 0 ? (
        <div>
          {dayAppointments.map((appointment) => (
            <AppointmentItem key={appointment.id} appointment={appointment} onClick={onAppointmentClick} />
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-center py-4">Nenhum agendamento para este dia</div>
      )}

      {/* Linha do tempo (apenas para desktop) */}
      <div className="hidden md:block mt-4 relative border-l border-gray-200 pl-4 ml-4">
        {hours.map((hour) => {
          const currentHour = new Date(date)
          currentHour.setHours(hour, 0, 0, 0)

          // Verificar se é a hora atual
          const now = new Date()
          const isCurrentHour = isToday && now.getHours() === hour

          // Encontrar eventos para esta hora
          const hourAppointments = dayAppointments.filter((appointment) => appointment.start.getHours() === hour)

          return (
            <div key={hour} className="mb-4">
              <div className={`flex items-center -ml-6 ${isCurrentHour ? "text-blue-600 font-medium" : ""}`}>
                <div className={`w-4 h-4 rounded-full ${isCurrentHour ? "bg-blue-600" : "bg-gray-300"}`}></div>
                <span className="ml-2">{hour}:00</span>
              </div>

              {hourAppointments.length > 0 && (
                <div className="mt-1 ml-2">
                  {hourAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="text-xs p-1 mb-1 rounded bg-gray-100 cursor-pointer hover:bg-gray-200"
                      onClick={() => onAppointmentClick(appointment)}
                    >
                      {formatTime(appointment.start)} - {appointment.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Componente para o formulário de agendamento
const AppointmentForm = ({
  appointment,
  onSave,
  onCancel,
  onDelete,
}: {
  appointment?: AppointmentEvent
  onSave: (appointment: Partial<AppointmentEvent>) => void
  onCancel: () => void
  onDelete?: (id: string) => void
}) => {
  const isNew = !appointment?.id
  const [formData, setFormData] = useState<Partial<AppointmentEvent>>(
    appointment || {
      title: "",
      patientId: "",
      clinicId: "",
      type: "consultation",
      status: "scheduled",
      start: new Date(),
      end: new Date(new Date().getTime() + 30 * 60000), // 30 minutos depois
      notes: "",
    },
  )

  const handleChange = (field: keyof AppointmentEvent, value: string | Date | undefined) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleTimeChange = (field: "start" | "end", timeString: string) => {
    const [hours, minutes] = timeString.split(":").map(Number)
    const newDate = new Date(formData[field] as Date)
    newDate.setHours(hours, minutes)
    handleChange(field, newDate)
  }

  const handleDateChange = (dateString: string) => {
    const newDate = new Date(dateString)

    // Manter as horas atuais
    const startHours = (formData.start as Date).getHours()
    const startMinutes = (formData.start as Date).getMinutes()
    const endHours = (formData.end as Date).getHours()
    const endMinutes = (formData.end as Date).getMinutes()

    const newStart = new Date(newDate)
    newStart.setHours(startHours, startMinutes)

    const newEnd = new Date(newDate)
    newEnd.setHours(endHours, endMinutes)

    setFormData((prev) => ({
      ...prev,
      start: newStart,
      end: newEnd,
    }))
  }

  return (
    <div className="space-y-4 border-4 border-red-500 ">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Título do agendamento"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Paciente</label>
          <Select value={formData.patientId} onValueChange={(value) => handleChange("patientId", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um paciente" />
            </SelectTrigger>
            <SelectContent>
              {patients.map((patient) => (
                <SelectItem key={patient.id} value={patient.id}>
                  {patient.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Clínica</label>
          <Select value={formData.clinicId} onValueChange={(value) => handleChange("clinicId", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma clínica" />
            </SelectTrigger>
            <SelectContent>
              {clinics.map((clinic) => (
                <SelectItem key={clinic.id} value={clinic.id}>
                  {clinic.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Data</label>
          <input
            type="date"
            value={formData.start ? (formData.start as Date).toISOString().split("T")[0] : ""}
            onChange={(e) => handleDateChange(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Hora Início</label>
          <input
            type="time"
            value={
              formData.start
                ? `${String((formData.start as Date).getHours()).padStart(2, "0")}:${String((formData.start as Date).getMinutes()).padStart(2, "0")}`
                : ""
            }
            onChange={(e) => handleTimeChange("start", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Hora Fim</label>
          <input
            type="time"
            value={
              formData.end
                ? `${String((formData.end as Date).getHours()).padStart(2, "0")}:${String((formData.end as Date).getMinutes()).padStart(2, "0")}`
                : ""
            }
            onChange={(e) => handleTimeChange("end", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
          <Select value={formData.type} onValueChange={(value: AppointmentEvent["type"]) => handleChange("type", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ultrasound">Ultrassom</SelectItem>
              <SelectItem value="x-ray">Raio-X</SelectItem>
              <SelectItem value="consultation">Consulta</SelectItem>
              <SelectItem value="surgery">Cirurgia</SelectItem>
              <SelectItem value="other">Outro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <Select value={formData.status} onValueChange={(value: AppointmentEvent["status"]) => handleChange("status", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="scheduled">Agendado</SelectItem>
              <SelectItem value="confirmed">Confirmado</SelectItem>
              <SelectItem value="completed">Concluído</SelectItem>
              <SelectItem value="canceled">Cancelado</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Observações</label>
        <textarea
          value={formData.notes || ""}
          onChange={(e) => handleChange("notes", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Observações adicionais"
          rows={3}
        />
      </div>

      <div className="flex justify-between pt-2">
        <div>
          {!isNew && onDelete && (
            <Button variant="destructive" onClick={() => onDelete(appointment.id)}>
              <Trash2 size={16} className="mr-2" /> Excluir
            </Button>
          )}
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button onClick={() => onSave(formData)}>{isNew ? "Agendar" : "Salvar Alterações"}</Button>
        </div>
      </div>
    </div>
  )
}

export default function AgendaPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("day")
  const [appointments, setAppointments] = useState<AppointmentEvent[]>(mockAppointments)
  const [selectedAppointment, setSelectedAppointment] = useState<AppointmentEvent | undefined>(undefined)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isNewAppointment, setIsNewAppointment] = useState(false)

  // Referência para o elemento da hora atual
  const currentTimeRef = useRef<HTMLDivElement>(null)

  // Função para navegar entre datas
  const navigateDate = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate)

    if (viewMode === "day") {
      newDate.setDate(newDate.getDate() + (direction === "next" ? 1 : -1))
    } else if (viewMode === "week") {
      newDate.setDate(newDate.getDate() + (direction === "next" ? 7 : -7))
    } else {
      newDate.setMonth(newDate.getMonth() + (direction === "next" ? 1 : -1))
    }

    setCurrentDate(newDate)
  }

  // Função para ir para hoje
  const goToToday = () => {
    setCurrentDate(new Date())
  }

  // Função para abrir o formulário de novo agendamento
  const openNewAppointmentForm = () => {
    setSelectedAppointment(undefined)
    setIsNewAppointment(true)
    setIsFormOpen(true)
  }

  // Função para abrir o formulário de edição
  const openEditForm = (appointment: AppointmentEvent) => {
    setSelectedAppointment(appointment)
    setIsNewAppointment(false)
    setIsFormOpen(true)
  }

  // Função para salvar um agendamento
  const saveAppointment = (appointmentData: Partial<AppointmentEvent>) => {
    if (isNewAppointment) {
      // Criar novo agendamento
      const newAppointment: AppointmentEvent = {
        id: Date.now().toString(), // Gerar ID único
        title: appointmentData.title || "Sem título",
        start: appointmentData.start || new Date(),
        end: appointmentData.end || new Date(),
        patientId: appointmentData.patientId || "",
        clinicId: appointmentData.clinicId || "",
        type: appointmentData.type || "other",
        status: appointmentData.status || "scheduled",
        notes: appointmentData.notes,
      }

      setAppointments([...appointments, newAppointment])
    } else if (selectedAppointment) {
      // Atualizar agendamento existente
      const updatedAppointments = appointments.map((appointment) =>
        appointment.id === selectedAppointment.id ? { ...appointment, ...appointmentData } : appointment,
      )

      setAppointments(updatedAppointments)
    }

    setIsFormOpen(false)
  }

  // Função para excluir um agendamento
  const deleteAppointment = (id: string) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== id)
    setAppointments(updatedAppointments)
    setIsFormOpen(false)
  }

  // Gerar dias para visualização
  const getDaysToShow = () => {
    const days: Date[] = []
    const startDate = new Date(currentDate)

    if (viewMode === "day") {
      days.push(new Date(startDate))
    } else if (viewMode === "week") {
      // Começar no domingo da semana atual
      const dayOfWeek = startDate.getDay()
      startDate.setDate(startDate.getDate() - dayOfWeek)

      // Adicionar 7 dias da semana
      for (let i = 0; i < 7; i++) {
        const day = new Date(startDate)
        day.setDate(startDate.getDate() + i)
        days.push(day)
      }
    } else {
      // Modo mês - mostrar apenas os próximos 30 dias para simplificar
      for (let i = 0; i < 30; i++) {
        const day = new Date(startDate)
        day.setDate(startDate.getDate() + i)
        days.push(day)
      }
    }

    return days
  }

  // Rolar para a hora atual quando a página carregar
  useEffect(() => {
    if (currentTimeRef.current) {
      currentTimeRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }, [])

  return (
    <div className="space-y-4 sm:space-y-6 border-2 border-red-500 ">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Agenda</h1>
          <p className="text-sm text-gray-500">Gerencie seus agendamentos</p>
        </div>

        <Button onClick={openNewAppointmentForm} className="sm:w-auto w-full">
          <Plus size={16} className="mr-2" /> Novo Agendamento
        </Button>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => navigateDate("prev")}>
                <ArrowLeft size={16} />
              </Button>
              <Button variant="outline" size="sm" onClick={goToToday}>
                Hoje
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigateDate("next")}>
                <ArrowRight size={16} />
              </Button>

              <div className="font-medium">
                {viewMode === "day" && (
                  <span>
                    {currentDate.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                  </span>
                )}
                {viewMode === "week" && (
                  <span>
                    Semana de {getDaysToShow()[0].toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })} a{" "}
                    {getDaysToShow()[6].toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })}
                  </span>
                )}
                {viewMode === "month" && (
                  <span>{currentDate.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}</span>
                )}
              </div>
            </div>

            <div className="flex space-x-2">
              <Button variant={viewMode === "day" ? "default" : "outline"} size="sm" onClick={() => setViewMode("day")}>
                Dia
              </Button>
              <Button
                variant={viewMode === "week" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("week")}
              >
                Semana
              </Button>
              <Button
                variant={viewMode === "month" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("month")}
              >
                Mês
              </Button>
            </div>
          </div>

          {/* Linha do tempo atual (marcador) */}
          <div className="relative">
            {isSameDay(currentDate, new Date()) && (
              <div
                ref={currentTimeRef}
                className="absolute left-0 right-0 border-t-2 border-red-500 z-10"
                style={{
                  top: `${((new Date().getHours() * 60 + new Date().getMinutes()) / 1440) * 100}%`,
                }}
              >
                <div className="absolute -left-2 -top-2 w-4 h-4 rounded-full bg-red-500"></div>
              </div>
            )}

            {/* Visualização dos dias */}
            <div className="space-y-6">
              {getDaysToShow().map((day, index) => (
                <DayView key={index} date={day} appointments={appointments} onAppointmentClick={openEditForm} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modal para criar/editar agendamento */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{isNewAppointment ? "Novo Agendamento" : "Editar Agendamento"}</DialogTitle>
          </DialogHeader>

          <AppointmentForm
            appointment={selectedAppointment}
            onSave={saveAppointment}
            onCancel={() => setIsFormOpen(false)}
            onDelete={!isNewAppointment ? deleteAppointment : undefined}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
