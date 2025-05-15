"use client"

import { useState, useEffect } from "react"
import {
  Search,
  UserPlus,
  MoreHorizontal,
  Shield,
  User,
  Users,
  Building,
  Clock,
  Calendar,
  KeyRound,
  ChevronRight,
  Mail,
  Phone,
} from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

import { adminUsers, userPlans, type AdminUser, type UserRole, type SubscriptionStatus } from "@/lib/mock-data"

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

// Componente para exibir o status do usuário
const UserStatusBadge = ({ status }: { status: AdminUser["status"] }) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-500 hover:bg-green-600">Ativo</Badge>
    case "inactive":
      return (
        <Badge variant="outline" className="text-gray-500 border-gray-500">
          Inativo
        </Badge>
      )
    case "suspended":
      return <Badge variant="destructive">Suspenso</Badge>
    default:
      return null
  }
}

// Componente para exibir o status da assinatura
const SubscriptionStatusBadge = ({ status }: { status: SubscriptionStatus }) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-500 hover:bg-green-600">Ativa</Badge>
    case "trial":
      return <Badge className="bg-blue-500 hover:bg-blue-600">Trial</Badge>
    case "expired":
      return <Badge variant="destructive">Expirada</Badge>
    case "canceled":
      return (
        <Badge variant="outline" className="text-gray-500 border-gray-500">
          Cancelada
        </Badge>
      )
    case "pending":
      return (
        <Badge variant="outline" className="text-yellow-500 border-yellow-500">
          Pendente
        </Badge>
      )
    default:
      return null
  }
}

// Componente para exibir o ícone do cargo
const RoleIcon = ({ role }: { role: UserRole }) => {
  switch (role) {
    case "admin":
      return <Shield className="h-4 w-4 text-purple-500" />
    case "veterinarian":
      return <User className="h-4 w-4 text-blue-500" />
    case "assistant":
      return <Users className="h-4 w-4 text-green-500" />
    case "clinic_manager":
      return <Building className="h-4 w-4 text-orange-500" />
    default:
      return null
  }
}

// Componente para o modal de reset de senha
const ResetPasswordDialog = ({ user }: { user: AdminUser }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleResetPassword = () => {
    setIsLoading(true)
    // Simulação de envio de email
    setTimeout(() => {
      setIsLoading(false)
      setIsOpen(false)
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0" title="Resetar senha">
          <span className="sr-only">Resetar senha</span>
          <KeyRound className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Resetar senha</DialogTitle>
          <DialogDescription>Enviar email para resetar a senha de {user.name}?</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 py-4">
          <div className="grid flex-1 gap-2">
            <p className="text-sm text-muted-foreground">
              Um email será enviado para <span className="font-medium text-foreground">{user.email}</span> com
              instruções para criar uma nova senha.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleResetPassword} disabled={isLoading}>
            {isLoading ? "Enviando..." : "Enviar email de reset"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Componente para o modal de edição de plano
const EditPlanDialog = ({ user }: { user: AdminUser }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(user.planId)
  const [isLoading, setIsLoading] = useState(false)

  const handleChangePlan = () => {
    setIsLoading(true)
    // Simulação de mudança de plano
    setTimeout(() => {
      setIsLoading(false)
      setIsOpen(false)
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0" title="Editar plano">
          <span className="sr-only">Editar plano</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Alterar plano</DialogTitle>
          <DialogDescription>Alterar o plano de assinatura de {user.name}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="plan" className="text-sm font-medium">
              Plano
            </label>
            <Select defaultValue={selectedPlan} onValueChange={setSelectedPlan}>
              <SelectTrigger id="plan">
                <SelectValue placeholder="Selecione um plano" />
              </SelectTrigger>
              <SelectContent>
                {userPlans.map((plan) => (
                  <SelectItem key={plan.id} value={plan.id}>
                    {plan.name} - R$ {plan.price.toFixed(2)}/mês
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="status" className="text-sm font-medium">
              Status da assinatura
            </label>
            <Select defaultValue={user.subscriptionStatus}>
              <SelectTrigger id="status">
                <SelectValue placeholder="Selecione um status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Ativa</SelectItem>
                <SelectItem value="trial">Trial</SelectItem>
                <SelectItem value="expired">Expirada</SelectItem>
                <SelectItem value="canceled">Cancelada</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleChangePlan} disabled={isLoading}>
            {isLoading ? "Salvando..." : "Salvar alterações"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Componente de card para visualização móvel
const UserCard = ({ user }: { user: AdminUser }) => {
  const plan = userPlans.find((p) => p.id === user.planId)

  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={user.profileImage || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base">{user.name}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <RoleIcon role={user.role} />
                <span>
                  {user.role === "admin" && "Administrador"}
                  {user.role === "veterinarian" && "Veterinário"}
                  {user.role === "assistant" && "Assistente"}
                  {user.role === "clinic_manager" && "Gerente de Clínica"}
                </span>
              </CardDescription>
            </div>
          </div>
          <UserStatusBadge status={user.status} />
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{user.email}</span>
          </div>
          {user.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{user.phone}</span>
            </div>
          )}
          <Separator className="my-1" />
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Plano:</span>
            <span className="font-medium">{plan?.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Assinatura:</span>
            <SubscriptionStatusBadge status={user.subscriptionStatus} />
          </div>
          <Separator className="my-1" />
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">Último acesso:</span>
            <span>
              {user.lastLogin ? format(user.lastLogin, "dd/MM/yyyy HH:mm", { locale: ptBR }) : "Nunca acessou"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">Criado em:</span>
            <span>{format(user.createdAt, "dd/MM/yyyy", { locale: ptBR })}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <div className="flex gap-1">
          <ResetPasswordDialog user={user} />
          <EditPlanDialog user={user} />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8">
              Ações <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
            <DropdownMenuItem>Editar usuário</DropdownMenuItem>
            <DropdownMenuSeparator />
            {user.status === "active" ? (
              <DropdownMenuItem className="text-amber-600">Desativar usuário</DropdownMenuItem>
            ) : (
              <DropdownMenuItem className="text-green-600">Ativar usuário</DropdownMenuItem>
            )}
            <DropdownMenuItem className="text-red-600">Excluir usuário</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  )
}

// Componente de card para visualização móvel de planos
const PlanCard = ({ plan }: { plan: (typeof userPlans)[0] }) => {
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
        <CardDescription>
          R$ {plan.price.toFixed(2)} / {plan.billingCycle === "monthly" ? "mês" : "ano"}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid gap-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Usuários:</span>
            <span>{userCount}</span>
          </div>
          <div className="mt-2">
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
      <CardFooter className="flex justify-end pt-2">
        <Button variant="outline" size="sm">
          Editar
        </Button>
      </CardFooter>
    </Card>
  )
}

// Componente para renderizar a tabela de usuários
const UsersTable = ({ users }: { users: AdminUser[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Usuário</TableHead>
          <TableHead>Cargo</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Plano</TableHead>
          <TableHead>Assinatura</TableHead>
          <TableHead>Último Acesso</TableHead>
          <TableHead>Criado em</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.length === 0 ? (
          <TableRow>
            <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
              Nenhum usuário encontrado com os filtros selecionados.
            </TableCell>
          </TableRow>
        ) : (
          users.map((user) => {
            const plan = userPlans.find((p) => p.id === user.planId)
            return (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={user.profileImage || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <RoleIcon role={user.role} />
                    <span className="text-sm">
                      {user.role === "admin" && "Administrador"}
                      {user.role === "veterinarian" && "Veterinário"}
                      {user.role === "assistant" && "Assistente"}
                      {user.role === "clinic_manager" && "Gerente de Clínica"}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <UserStatusBadge status={user.status} />
                </TableCell>
                <TableCell>
                  <span className="font-medium">{plan?.name}</span>
                </TableCell>
                <TableCell>
                  <SubscriptionStatusBadge status={user.subscriptionStatus} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {user.lastLogin ? (
                      <>
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm">{format(user.lastLogin, "dd/MM/yyyy HH:mm", { locale: ptBR })}</span>
                      </>
                    ) : (
                      <span className="text-sm text-muted-foreground">Nunca acessou</span>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm">{format(user.createdAt, "dd/MM/yyyy", { locale: ptBR })}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <ResetPasswordDialog user={user} />
                    <EditPlanDialog user={user} />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Abrir menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                        <DropdownMenuItem>Editar usuário</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {user.status === "active" ? (
                          <DropdownMenuItem className="text-amber-600">Desativar usuário</DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem className="text-green-600">Ativar usuário</DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="text-red-600">Excluir usuário</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            )
          })
        )}
      </TableBody>
    </Table>
  )
}

// Componente para renderizar a tabela de planos
const PlansTable = ({ plans }: { plans: typeof userPlans }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Preço</TableHead>
          <TableHead>Ciclo</TableHead>
          <TableHead>Recursos</TableHead>
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
              <TableCell>{userCount}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm">
                  Editar
                </Button>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

// Componente para renderizar os cards de usuários
const UsersCards = ({ users }: { users: AdminUser[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {users.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          Nenhum usuário encontrado com os filtros selecionados.
        </div>
      ) : (
        users.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </div>
  )
}

// Componente para renderizar os cards de planos
const PlansCards = ({ plans }: { plans: typeof userPlans }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {plans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  )
}

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [planFilter, setPlanFilter] = useState<string>("all")
  const isMobile = useMobileDetect()

  // Filtrar usuários com base nos critérios
  const filteredUsers = adminUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRole = roleFilter === "all" || user.role === roleFilter
    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    const matchesPlan = planFilter === "all" || user.planId === planFilter

    return matchesSearch && matchesRole && matchesStatus && matchesPlan
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Gerenciamento de Usuários</h2>
          <p className="text-muted-foreground">Gerencie usuários, planos e permissões do sistema.</p>
        </div>
        <Button className="w-full md:w-auto">
          <UserPlus className="mr-2 h-4 w-4" />
          Adicionar Usuário
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="active">Ativos</TabsTrigger>
          <TabsTrigger value="trial">Em Trial</TabsTrigger>
          <TabsTrigger value="expired">Expirados</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Filtros</CardTitle>
              <CardDescription>Use os filtros abaixo para encontrar usuários específicos.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Buscar por nome ou email..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filtrar por cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os cargos</SelectItem>
                    <SelectItem value="admin">Administrador</SelectItem>
                    <SelectItem value="veterinarian">Veterinário</SelectItem>
                    <SelectItem value="assistant">Assistente</SelectItem>
                    <SelectItem value="clinic_manager">Gerente de Clínica</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filtrar por status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os status</SelectItem>
                    <SelectItem value="active">Ativo</SelectItem>
                    <SelectItem value="inactive">Inativo</SelectItem>
                    <SelectItem value="suspended">Suspenso</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={planFilter} onValueChange={setPlanFilter}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filtrar por plano" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os planos</SelectItem>
                    {userPlans.map((plan) => (
                      <SelectItem key={plan.id} value={plan.id}>
                        {plan.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div>
                <CardTitle>Usuários ({filteredUsers.length})</CardTitle>
                <CardDescription>Lista de todos os usuários registrados no sistema.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {isMobile ? <UsersCards users={filteredUsers} /> : <UsersTable users={filteredUsers} />}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <div>
                <CardTitle>Usuários Ativos</CardTitle>
                <CardDescription>Usuários com status de assinatura ativa.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {isMobile ? (
                <UsersCards users={adminUsers.filter((user) => user.subscriptionStatus === "active")} />
              ) : (
                <UsersTable users={adminUsers.filter((user) => user.subscriptionStatus === "active")} />
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trial" className="space-y-4">
          <Card>
            <CardHeader>
              <div>
                <CardTitle>Usuários em Trial</CardTitle>
                <CardDescription>Usuários que estão no período de avaliação gratuita.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {isMobile ? (
                <UsersCards users={adminUsers.filter((user) => user.subscriptionStatus === "trial")} />
              ) : (
                <UsersTable users={adminUsers.filter((user) => user.subscriptionStatus === "trial")} />
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expired" className="space-y-4">
          <Card>
            <CardHeader>
              <div>
                <CardTitle>Usuários com Assinatura Expirada</CardTitle>
                <CardDescription>Usuários que precisam renovar sua assinatura.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {isMobile ? (
                <UsersCards
                  users={adminUsers.filter(
                    (user) => user.subscriptionStatus === "expired" || user.subscriptionStatus === "canceled",
                  )}
                />
              ) : (
                <UsersTable
                  users={adminUsers.filter(
                    (user) => user.subscriptionStatus === "expired" || user.subscriptionStatus === "canceled",
                  )}
                />
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
