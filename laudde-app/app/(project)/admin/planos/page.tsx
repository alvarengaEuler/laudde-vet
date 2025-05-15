"use client"

import { useState, useEffect } from "react"
import { Search, Plus, Edit, Trash2, Check, X, CreditCard, Users } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { userPlans, adminUsers } from "@/lib/mock-data"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

// Hook para detectar se é dispositivo móvel
function useMobileDetect() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768) // Considerando dispositivos com menos de 768px como móveis
    }

    // Verificar inicialmente
    checkIfMobile()

    // Adicionar listener para redimensionamento
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return isMobile
}

// Schema de validação para o formulário de plano
const planFormSchema = z.object({
  name: z.string().min(2, {
    message: "O nome do plano deve ter pelo menos 2 caracteres.",
  }),
  type: z.enum(["basic", "standard", "premium", "enterprise"], {
    required_error: "Selecione um tipo de plano.",
  }),
  price: z.coerce.number().min(0, {
    message: "O preço deve ser um número positivo.",
  }),
  billingCycle: z.enum(["monthly", "yearly"], {
    required_error: "Selecione um ciclo de cobrança.",
  }),
  features: z.array(z.string()).min(1, {
    message: "Adicione pelo menos um recurso.",
  }),
  maxReports: z.coerce.number().int().min(-1, {
    message: "Use -1 para ilimitado ou um número positivo.",
  }),
  maxPatients: z.coerce.number().int().min(-1, {
    message: "Use -1 para ilimitado ou um número positivo.",
  }),
  maxClinics: z.coerce.number().int().min(-1, {
    message: "Use -1 para ilimitado ou um número positivo.",
  }),
  includesSupport: z.boolean().optional().default(false),
})

type PlanFormValues = z.infer<typeof planFormSchema>

// Componente para o formulário de plano
const PlanForm = ({
  defaultValues,
  onSubmit,
  onCancel,
}: {
  defaultValues?: PlanFormValues
  onSubmit: (values: PlanFormValues) => void
  onCancel: () => void
}) => {
  const form = useForm<PlanFormValues>({
    resolver: zodResolver(planFormSchema),
    defaultValues: defaultValues || {
      name: "",
      type: "basic",
      price: 99.9,
      billingCycle: "monthly",
      features: [],
      maxReports: 100,
      maxPatients: 200,
      maxClinics: 1,
      includesSupport: false,
    },
  })

  const [newFeature, setNewFeature] = useState("")

  // Função para adicionar um novo recurso
  const addFeature = (currentFeatures: string[], newFeature: string) => {
    if (newFeature.trim()) {
      return [...currentFeatures, newFeature.trim()]
    }
    return currentFeatures
  }

  // Função para remover um recurso
  const removeFeature = (currentFeatures: string[], index: number) => {
    return currentFeatures.filter((_, i) => i !== index)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do Plano</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Plano Básico" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="basic">Básico</SelectItem>
                    <SelectItem value="standard">Padrão</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="enterprise">Empresarial</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preço (R$)</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" min="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="billingCycle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ciclo de Cobrança</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um ciclo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="monthly">Mensal</SelectItem>
                    <SelectItem value="yearly">Anual</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="features"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Recursos</FormLabel>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Adicionar recurso..."
                      value={newFeature}
                      onChange={(e) => setNewFeature(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          field.onChange(addFeature(field.value, newFeature))
                          setNewFeature("")
                        }
                      }}
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        field.onChange(addFeature(field.value, newFeature))
                        setNewFeature("")
                      }}
                    >
                      Adicionar
                    </Button>
                  </div>

                  {field.value.length > 0 ? (
                    <div className="space-y-2">
                      {field.value.map((feature, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-md">
                          <span>{feature}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => field.onChange(removeFeature(field.value, index))}
                            className="h-8 w-8 p-0"
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remover</span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Nenhum recurso adicionado.</p>
                  )}
                </div>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="maxReports"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Máximo de Laudos</FormLabel>
                <FormControl>
                  <Input type="number" min="-1" {...field} />
                </FormControl>
                <FormDescription>Use -1 para ilimitado</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="maxPatients"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Máximo de Pacientes</FormLabel>
                <FormControl>
                  <Input type="number" min="-1" {...field} />
                </FormControl>
                <FormDescription>Use -1 para ilimitado</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="maxClinics"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Máximo de Clínicas</FormLabel>
                <FormControl>
                  <Input type="number" min="-1" {...field} />
                </FormControl>
                <FormDescription>Use -1 para ilimitado</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="includesSupport"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Suporte Prioritário</FormLabel>
                <FormDescription>Inclui suporte prioritário por email e telefone.</FormDescription>
              </div>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit">Salvar Plano</Button>
        </DialogFooter>
      </form>
    </Form>
  )
}

// Componente para o card de plano (visualização mobile)
const PlanCard = ({
  plan,
  onEdit,
  onDelete,
}: { plan: (typeof userPlans)[0]; onEdit: () => void; onDelete: () => void }) => {
  const userCount = adminUsers.filter((user) => user.planId === plan.id).length

  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">{plan.name}</CardTitle>
          <Badge
            variant="outline"
            className={
              plan.type === "basic"
                ? "border-gray-500 text-gray-500"
                : plan.type === "standard"
                  ? "border-blue-500 text-blue-500"
                  : plan.type === "premium"
                    ? "border-purple-500 text-purple-500"
                    : "border-green-500 text-green-500"
            }
          >
            {plan.type === "basic" && "Básico"}
            {plan.type === "standard" && "Padrão"}
            {plan.type === "premium" && "Premium"}
            {plan.type === "enterprise" && "Empresarial"}
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-2">
          <CreditCard className="h-4 w-4" />
          R$ {plan.price.toFixed(2)} / {plan.billingCycle === "monthly" ? "mês" : "ano"}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid gap-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Usuários:</span>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>{userCount}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Laudos:</span>
            <span>{plan.maxReports === -1 ? "Ilimitado" : plan.maxReports}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Pacientes:</span>
            <span>{plan.maxPatients === -1 ? "Ilimitado" : plan.maxPatients}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Clínicas:</span>
            <span>{plan.maxClinics === -1 ? "Ilimitado" : plan.maxClinics}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Suporte Prioritário:</span>
            <span>
              {plan.includesSupport ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <X className="h-4 w-4 text-red-500" />
              )}
            </span>
          </div>

          <Separator className="my-2" />

          <div>
            <span className="text-muted-foreground">Recursos:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {plan.features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="font-normal">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 pt-2">
        <Button variant="outline" size="sm" onClick={onEdit}>
          <Edit className="h-4 w-4 mr-1" /> Editar
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="sm">
              <Trash2 className="h-4 w-4 mr-1" /> Excluir
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Excluir Plano</AlertDialogTitle>
              <AlertDialogDescription>
                Tem certeza que deseja excluir o plano "{plan.name}"? Esta ação não pode ser desfeita.
                {userCount > 0 && (
                  <p className="mt-2 text-destructive font-semibold">
                    Atenção: Este plano está sendo usado por {userCount} usuário(s).
                  </p>
                )}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={onDelete}>Excluir</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  )
}

// Componente para a tabela de planos (visualização desktop)
const PlansTable = ({
  plans,
  onEdit,
  onDelete,
}: {
  plans: typeof userPlans
  onEdit: (planId: string) => void
  onDelete: (planId: string) => void
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Preço</TableHead>
          <TableHead>Ciclo</TableHead>
          <TableHead>Recursos</TableHead>
          <TableHead>Limites</TableHead>
          <TableHead>Usuários</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {plans.map((plan) => {
          const userCount = adminUsers.filter((user) => user.planId === plan.id).length
          return (
            <TableRow key={plan.id}>
              <TableCell className="font-medium">{plan.name}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    plan.type === "basic"
                      ? "border-gray-500 text-gray-500"
                      : plan.type === "standard"
                        ? "border-blue-500 text-blue-500"
                        : plan.type === "premium"
                          ? "border-purple-500 text-purple-500"
                          : "border-green-500 text-green-500"
                  }
                >
                  {plan.type === "basic" && "Básico"}
                  {plan.type === "standard" && "Padrão"}
                  {plan.type === "premium" && "Premium"}
                  {plan.type === "enterprise" && "Empresarial"}
                </Badge>
              </TableCell>
              <TableCell>R$ {plan.price.toFixed(2)}</TableCell>
              <TableCell>{plan.billingCycle === "monthly" ? "Mensal" : "Anual"}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {plan.features.slice(0, 2).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="font-normal">
                      {feature}
                    </Badge>
                  ))}
                  {plan.features.length > 2 && (
                    <Badge variant="secondary" className="font-normal">
                      +{plan.features.length - 2}
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="text-xs space-y-1">
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">Laudos:</span>
                    <span>{plan.maxReports === -1 ? "Ilimitado" : plan.maxReports}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">Pacientes:</span>
                    <span>{plan.maxPatients === -1 ? "Ilimitado" : plan.maxPatients}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">Clínicas:</span>
                    <span>{plan.maxClinics === -1 ? "Ilimitado" : plan.maxClinics}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">Suporte:</span>
                    <span>
                      {plan.includesSupport ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{userCount}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" onClick={() => onEdit(plan.id)}>
                    <Edit className="h-4 w-4 mr-1" /> Editar
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="h-4 w-4 mr-1" /> Excluir
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Excluir Plano</AlertDialogTitle>
                        <AlertDialogDescription>
                          Tem certeza que deseja excluir o plano "{plan.name}"? Esta ação não pode ser desfeita.
                          {userCount > 0 && (
                            <p className="mt-2 text-destructive font-semibold">
                              Atenção: Este plano está sendo usado por {userCount} usuário(s).
                            </p>
                          )}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={() => onDelete(plan.id)}>Excluir</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default function AdminPlansPage() {
  const [plans, setPlans] = useState([...userPlans])
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingPlan, setEditingPlan] = useState<string | null>(null)
  const isMobile = useMobileDetect()

  // Filtrar planos com base nos critérios
  const filteredPlans = plans.filter((plan) => {
    const matchesSearch = plan.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = typeFilter === "all" || plan.type === typeFilter

    return matchesSearch && matchesType
  })

  // Manipuladores de eventos
  const handleAddPlan = (values: PlanFormValues) => {
    const newPlan = {
      id: `plan-${Date.now()}`,
      ...values,
    }
    setPlans([...plans, newPlan])
    setIsAddDialogOpen(false)
  }

  const handleEditPlan = (values: PlanFormValues) => {
    if (editingPlan) {
      setPlans(
        plans.map((plan) =>
          plan.id === editingPlan
            ? {
                ...plan,
                ...values,
              }
            : plan,
        ),
      )
      setEditingPlan(null)
    }
  }

  const handleDeletePlan = (planId: string) => {
    setPlans(plans.filter((plan) => plan.id !== planId))
  }

  // Obter plano para edição
  const getPlanForEdit = (planId: string) => {
    const plan = plans.find((p) => p.id === planId)
    if (!plan) return undefined

    return {
      name: plan.name,
      type: plan.type,
      price: plan.price,
      billingCycle: plan.billingCycle,
      features: plan.features,
      maxReports: plan.maxReports,
      maxPatients: plan.maxPatients,
      maxClinics: plan.maxClinics,
      includesSupport: plan.includesSupport,
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Gerenciamento de Planos</h2>
          <p className="text-muted-foreground">Gerencie os planos disponíveis no sistema.</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full md:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Plano
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Plano</DialogTitle>
              <DialogDescription>
                Preencha os detalhes do novo plano. Clique em salvar quando terminar.
              </DialogDescription>
            </DialogHeader>
            <PlanForm onSubmit={handleAddPlan} onCancel={() => setIsAddDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Filtros</CardTitle>
          <CardDescription>Use os filtros abaixo para encontrar planos específicos.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar por nome..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filtrar por tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os tipos</SelectItem>
                <SelectItem value="basic">Básico</SelectItem>
                <SelectItem value="standard">Padrão</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
                <SelectItem value="enterprise">Empresarial</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <div>
            <CardTitle>Planos ({filteredPlans.length})</CardTitle>
            <CardDescription>Lista de todos os planos disponíveis no sistema.</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          {filteredPlans.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              Nenhum plano encontrado com os filtros selecionados.
            </div>
          ) : isMobile ? (
            <div className="grid grid-cols-1 gap-4">
              {filteredPlans.map((plan) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  onEdit={() => setEditingPlan(plan.id)}
                  onDelete={() => handleDeletePlan(plan.id)}
                />
              ))}
            </div>
          ) : (
            <PlansTable plans={filteredPlans} onEdit={(planId) => setEditingPlan(planId)} onDelete={handleDeletePlan} />
          )}
        </CardContent>
      </Card>

      {/* Dialog para edição de plano */}
      {editingPlan && (
        <Dialog open={!!editingPlan} onOpenChange={(open) => !open && setEditingPlan(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Editar Plano</DialogTitle>
              <DialogDescription>Modifique os detalhes do plano. Clique em salvar quando terminar.</DialogDescription>
            </DialogHeader>
            <PlanForm
              defaultValues={getPlanForEdit(editingPlan)}
              onSubmit={handleEditPlan}
              onCancel={() => setEditingPlan(null)}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
