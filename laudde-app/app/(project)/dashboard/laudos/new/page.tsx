'use client'

import type React from 'react'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ArrowLeft, Save, Eye, DollarSign, Settings, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import {
  mockPatients,
  mockClinics,
  mockVeterinarians,
  mockBillingItems,
  generateAccessCode,
  ReportFormData,
  BillingMode,
} from '@/lib/mocks/mock-data'

export default function NewReportPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<ReportFormData>({
    label: '',
    patientId: '',
    clinicId: '',
    veterinarianIds: [],
    examType: '',
    findings: '',
    diagnosis: '',
    recommendations: '',
    accessCode: generateAccessCode(),
    expiresAt: undefined,
    billing: {
      mode: 'predefined',
      totalAmount: 0,
    },
    reportDate: new Date().toISOString().split('T')[0],
    species: '',
    breed: '',
    age: 0,
    sex: 'Fêmea',
    owner: '',
    clinicalSuspicion: '',
    veterinarianName: '',
  })
  const [patientSearch, setPatientSearch] = useState('')
  const [showPatientDropdown, setShowPatientDropdown] = useState(false)
  const [billingModalOpen, setBillingModalOpen] = useState(false)
  const [settingsModalOpen, setSettingsModalOpen] = useState(false)
  const [basicInfoOpen, setBasicInfoOpen] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally save to your backend
    console.log('Saving report:', formData)
    router.push('/reports')
  }

  const handleInputChange = (field: keyof ReportFormData, value: string | Date | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleBillingModeChange = (mode: BillingMode) => {
    setFormData((prev) => ({
      ...prev,
      billing: {
        mode,
        totalAmount: 0,
        predefinedItemId: undefined,
        customAmount: undefined,
        customDescription: undefined,
      },
    }))
  }

  const handlePredefinedItemChange = (itemId: string) => {
    const item = mockBillingItems.find((i) => i.id === itemId)
    if (item && formData.billing) {
      setFormData((prev) => ({
        ...prev,
        billing: {
          ...prev.billing!,
          predefinedItemId: itemId,
          totalAmount: item.price,
        },
      }))
    }
  }

  const handleCustomAmountChange = (amount: number, description: string) => {
    if (formData.billing) {
      setFormData((prev) => ({
        ...prev,
        billing: {
          ...prev.billing!,
          customAmount: amount,
          customDescription: description,
          totalAmount: amount,
        },
      }))
    }
  }

  const filteredPatients = mockPatients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(patientSearch.toLowerCase()) ||
      patient.species.toLowerCase().includes(patientSearch.toLowerCase()) ||
      patient.owner.toLowerCase().includes(patientSearch.toLowerCase())
  )

  const handlePatientSelect = (patientId: string) => {
    handleInputChange('patientId', patientId)
    const selectedPatient = mockPatients.find((p) => p.id === patientId)
    if (selectedPatient) {
      setPatientSearch(selectedPatient.name)
      setFormData((prev) => ({
        ...prev,
        species: selectedPatient.species,
        breed: selectedPatient.breed || '',
        age: selectedPatient.age || 0,
        sex: selectedPatient.sex,
        owner: selectedPatient.owner,
      }))
    }
    setShowPatientDropdown(false)
  }

  const selectedBillingItem = formData.billing?.predefinedItemId
    ? mockBillingItems.find((item) => item.id === formData.billing?.predefinedItemId)
    : null

  return (
    <div className="p-4 md:p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link href="/reports">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-foreground text-2xl font-bold md:text-3xl">Novo Laudo</h1>
          <p className="text-muted-foreground">Crie um novo laudo veterinário</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={billingModalOpen} onOpenChange={setBillingModalOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <DollarSign className="mr-2 h-4 w-4" />
                Cobrança
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Configurar Cobrança
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Tipo de Cobrança</Label>
                  <RadioGroup
                    value={formData.billing?.mode}
                    onValueChange={handleBillingModeChange}
                    className="mt-2 flex flex-col gap-4 sm:flex-row"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="predefined" id="predefined" />
                      <Label htmlFor="predefined">Lista Pré-definida</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom">Valor Avulso</Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.billing?.mode === 'predefined' && (
                  <div className="space-y-3">
                    <div>
                      <Label>Selecionar Serviço</Label>
                      <Select
                        value={formData.billing.predefinedItemId}
                        onValueChange={handlePredefinedItemChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          {mockBillingItems.map((item) => (
                            <SelectItem key={item.id} value={item.id}>
                              <div className="flex flex-col">
                                <span>{item.name}</span>
                                <span className="text-muted-foreground text-sm">
                                  R$ {item.price.toFixed(2)} - {item.description}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {selectedBillingItem && (
                      <div className="bg-muted rounded-md p-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium">{selectedBillingItem.name}</p>
                            <p className="text-muted-foreground text-sm">
                              {selectedBillingItem.description}
                            </p>
                          </div>
                          <p className="text-lg font-bold">
                            R$ {selectedBillingItem.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {formData.billing?.mode === 'custom' && (
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="customDescription">Descrição do Serviço</Label>
                      <Input
                        id="customDescription"
                        value={formData.billing.customDescription || ''}
                        onChange={(e) =>
                          handleCustomAmountChange(
                            formData.billing?.customAmount || 0,
                            e.target.value
                          )
                        }
                        placeholder="Descreva o serviço prestado"
                      />
                    </div>
                    <div>
                      <Label htmlFor="customAmount">Valor (R$)</Label>
                      <Input
                        id="customAmount"
                        type="number"
                        step="0.01"
                        min="0"
                        value={formData.billing.customAmount || ''}
                        onChange={(e) =>
                          handleCustomAmountChange(
                            Number.parseFloat(e.target.value) || 0,
                            formData.billing?.customDescription || ''
                          )
                        }
                        placeholder="0,00"
                      />
                    </div>
                    {formData.billing.totalAmount > 0 && (
                      <div className="bg-muted rounded-md p-3">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Total:</span>
                          <span className="text-lg font-bold">
                            R$ {formData.billing.totalAmount.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline" onClick={() => setBillingModalOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={() => setBillingModalOpen(false)}>Confirmar</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={settingsModalOpen} onOpenChange={setSettingsModalOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Configurações
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Configurações do Laudo
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="veterinarian">Veterinário Responsável</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o veterinário" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockVeterinarians.map((vet) => (
                        <SelectItem key={vet.id} value={vet.id}>
                          {vet.name} - {vet.crmv}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="accessCode">Código de Acesso</Label>
                  <div className="flex gap-2">
                    <Input
                      id="accessCode"
                      value={formData.accessCode}
                      onChange={(e) => handleInputChange('accessCode', e.target.value)}
                      placeholder="Código para acesso público"
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleInputChange('accessCode', generateAccessCode())}
                      className="flex-shrink-0"
                    >
                      Gerar
                    </Button>
                  </div>
                  <p className="text-muted-foreground mt-1 text-xs">
                    Este código será usado para acesso público ao laudo
                  </p>
                </div>

                <div>
                  <Label htmlFor="expiresAt">Data de Expiração (Opcional)</Label>
                  <Input
                    id="expiresAt"
                    type="date"
                    onChange={(e) => handleInputChange('expiresAt', new Date(e.target.value))}
                  />
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline" onClick={() => setSettingsModalOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={() => setSettingsModalOpen(false)}>Salvar</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6">
          <Card className="rounded-md">
            <Collapsible open={basicInfoOpen} onOpenChange={setBasicInfoOpen}>
              <CollapsibleTrigger asChild>
                <CardHeader className="hover:bg-muted/50 cursor-pointer transition-colors">
                  <CardTitle className="flex items-center justify-between">
                    Informações Básicas
                    {basicInfoOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="label">Título do Laudo</Label>
                    <Input
                      id="label"
                      value={formData.label}
                      onChange={(e) => handleInputChange('label', e.target.value)}
                      placeholder="Ex: Laudo - Exame Radiológico"
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="relative">
                      <Label htmlFor="patient">Paciente</Label>
                      <div className="relative">
                        <Input
                          id="patient"
                          value={patientSearch}
                          onChange={(e) => {
                            setPatientSearch(e.target.value)
                            setShowPatientDropdown(true)
                          }}
                          onFocus={() => setShowPatientDropdown(true)}
                          placeholder="Buscar paciente por nome..."
                          className="pr-10"
                        />
                        {showPatientDropdown && filteredPatients.length > 0 && (
                          <div className="bg-background border-input absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border shadow-lg">
                            {filteredPatients.map((patient) => (
                              <button
                                key={patient.id}
                                type="button"
                                onClick={() => handlePatientSelect(patient.id)}
                                className="hover:bg-muted focus:bg-muted w-full px-3 py-2 text-left focus:outline-none"
                              >
                                <div className="font-medium">{patient.name}</div>
                                <div className="text-muted-foreground text-sm">
                                  {patient.species} - {patient.breed} | Proprietário:{' '}
                                  {patient.owner}
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="reportDate">Data</Label>
                      <Input
                        id="reportDate"
                        type="date"
                        value={formData.reportDate}
                        onChange={(e) => handleInputChange('reportDate', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <Label htmlFor="species">Espécie</Label>
                      <Input
                        id="species"
                        value={formData.species}
                        onChange={(e) => handleInputChange('species', e.target.value)}
                        placeholder="Ex: Canino, Felino"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="breed">Raça</Label>
                      <Input
                        id="breed"
                        value={formData.breed}
                        onChange={(e) => handleInputChange('breed', e.target.value)}
                        placeholder="Ex: Labrador, SRD"
                      />
                    </div>

                    <div>
                      <Label htmlFor="age">Idade</Label>
                      <Input
                        id="age"
                        type="number"
                        min="0"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', Number(e.target.value))}
                        placeholder="Anos"
                      />
                    </div>

                    <div>
                      <Label htmlFor="sex">Sexo</Label>
                      <Select
                        value={formData.sex}
                        onValueChange={(value: 'Macho' | 'Fêmea') =>
                          handleInputChange('sex', value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o sexo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Fêmea">Fêmea</SelectItem>
                          <SelectItem value="Macho">Macho</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="owner">Tutor</Label>
                      <Input
                        id="owner"
                        value={formData.owner}
                        onChange={(e) => handleInputChange('owner', e.target.value)}
                        placeholder="Nome do proprietário"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="veterinarianName">Veterinário</Label>
                      <Input
                        id="veterinarianName"
                        value={formData.veterinarianName}
                        onChange={(e) => handleInputChange('veterinarianName', e.target.value)}
                        placeholder="Dr(a). Nome"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="clinic">Clínica</Label>
                      <Select
                        value={formData.clinicId}
                        onValueChange={(value) => handleInputChange('clinicId', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a clínica" />
                        </SelectTrigger>
                        <SelectContent>
                          {mockClinics.map((clinic) => (
                            <SelectItem key={clinic.id} value={clinic.id}>
                              {clinic.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="clinicalSuspicion">Suspeita Clínica</Label>
                      <Input
                        id="clinicalSuspicion"
                        value={formData.clinicalSuspicion}
                        onChange={(e) => handleInputChange('clinicalSuspicion', e.target.value)}
                        placeholder="Suspeita diagnóstica inicial"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="examType">Tipo de Exame</Label>
                    <Input
                      id="examType"
                      value={formData.examType}
                      onChange={(e) => handleInputChange('examType', e.target.value)}
                      placeholder="Ex: Ultrassom, Radiografia, Exame Clínico"
                      required
                    />
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          <Card className="rounded-md">
            <CardHeader>
              <CardTitle>Conteúdo do Laudo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="findings">Achados do Exame</Label>
                <Textarea
                  id="findings"
                  value={formData.findings}
                  onChange={(e) => handleInputChange('findings', e.target.value)}
                  placeholder="Descreva os achados observados durante o exame..."
                  rows={4}
                  required
                  className="resize-none"
                />
              </div>

              <div>
                <Label htmlFor="diagnosis">Diagnóstico</Label>
                <Textarea
                  id="diagnosis"
                  value={formData.diagnosis}
                  onChange={(e) => handleInputChange('diagnosis', e.target.value)}
                  placeholder="Diagnóstico baseado nos achados..."
                  rows={3}
                  required
                  className="resize-none"
                />
              </div>

              <div>
                <Label htmlFor="recommendations">Recomendações</Label>
                <Textarea
                  id="recommendations"
                  value={formData.recommendations}
                  onChange={(e) => handleInputChange('recommendations', e.target.value)}
                  placeholder="Recomendações de tratamento ou acompanhamento..."
                  rows={3}
                  className="resize-none"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button type="submit" className="flex-1">
              <Save className="mr-2 h-4 w-4" />
              Salvar Laudo
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-transparent sm:flex-initial"
            >
              <Eye className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Visualizar</span>
              <span className="sm:hidden">Ver</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
