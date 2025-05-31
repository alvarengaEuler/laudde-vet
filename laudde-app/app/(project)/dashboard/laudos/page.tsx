'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useModelStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  FileText,
  Plus,
  Search,
  Calendar,
  FilePenLine,
  Trash2,
  Eye,
  Copy,
  Filter,
  ArrowUpDown,
  Grid3X3,
  List,
} from 'lucide-react'

export default function LaudosPage() {
  const router = useRouter()
  const { reports, models, createReportFromModel, deleteReport } = useModelStore()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'draft' | 'published'>('all')
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'status'>('date')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards')

  // Filtrar e ordenar laudos
  const filteredReports = reports
    .filter((report) => {
      const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === 'all' || report.status === statusFilter
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      let comparison = 0
      if (sortBy === 'date') {
        // Ensure we're working with Date objects or convert from strings
        const dateA = a.updatedAt instanceof Date ? a.updatedAt : new Date(a.updatedAt)
        const dateB = b.updatedAt instanceof Date ? b.updatedAt : new Date(b.updatedAt)
        comparison = dateA.getTime() - dateB.getTime()
      } else if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name)
      } else if (sortBy === 'status') {
        comparison = a.status.localeCompare(b.status)
      }
      return sortOrder === 'asc' ? comparison : -comparison
    })

  const handleCreateReport = (modelId: string) => {
    const newReport = createReportFromModel(modelId)
    router.push(`/laudos/${newReport.id}`)
  }

  const handleDeleteReport = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este laudo?')) {
      deleteReport(id)
    }
  }

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-blue-900">Laudos Veterinários</h1>
            <p className="text-blue-700">Gerencie e crie laudos a partir dos seus modelos</p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                Novo Laudo
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-blue-900">Selecione um modelo</DialogTitle>
              </DialogHeader>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {models.map((model) => (
                  <Card
                    key={model.id}
                    className="cursor-pointer border-blue-200 transition-all hover:shadow-md"
                    onClick={() => handleCreateReport(model.id)}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-blue-900">{model.name}</CardTitle>
                      <CardDescription className="text-xs">
                        {model.fields.length} {model.fields.length === 1 ? 'campo' : 'campos'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 text-blue-600 hover:text-blue-800"
                      >
                        <Plus className="mr-1 h-4 w-4" />
                        Usar este modelo
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filtros, busca e toggle de visualização */}
        <div className="mb-6 rounded-lg border border-blue-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <Input
                placeholder="Buscar laudos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {/* Toggle de visualização */}
              <div className="flex items-center rounded-md border border-blue-300">
                <Button
                  variant={viewMode === 'cards' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('cards')}
                  className={viewMode === 'cards' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-blue-600" />
                <Select
                  value={statusFilter}
                  onValueChange={(value: 'all' | 'draft' | 'published') => setStatusFilter(value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filtrar por status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os status</SelectItem>
                    <SelectItem value="draft">Rascunhos</SelectItem>
                    <SelectItem value="published">Publicados</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4 text-blue-600" />
                <Select
                  value={sortBy}
                  onValueChange={(value: 'date' | 'name' | 'status') => setSortBy(value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Data</SelectItem>
                    <SelectItem value="name">Nome</SelectItem>
                    <SelectItem value="status">Status</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleSortOrder}
                  className="h-10 w-10"
                >
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de laudos */}
        {filteredReports.length === 0 ? (
          <Card className="border-blue-200 py-12 text-center">
            <CardContent>
              <FileText className="mx-auto mb-4 h-16 w-16 text-blue-400" />
              <h3 className="mb-2 text-xl font-semibold text-blue-900">Nenhum laudo encontrado</h3>
              <p className="mb-6 text-blue-600">
                {searchTerm || statusFilter !== 'all'
                  ? 'Tente ajustar seus filtros de busca'
                  : 'Comece criando seu primeiro laudo veterinário'}
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Criar Primeiro Laudo
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-blue-900">Selecione um modelo</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {models.map((model) => (
                      <Card
                        key={model.id}
                        className="cursor-pointer border-blue-200 transition-all hover:shadow-md"
                        onClick={() => handleCreateReport(model.id)}
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base text-blue-900">{model.name}</CardTitle>
                          <CardDescription className="text-xs">
                            {model.fields.length} {model.fields.length === 1 ? 'campo' : 'campos'}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 text-blue-600 hover:text-blue-800"
                          >
                            <Plus className="mr-1 h-4 w-4" />
                            Usar este modelo
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ) : viewMode === 'cards' ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredReports.map((report) => (
              <Card
                key={report.id}
                className="border-blue-200 transition-shadow hover:border-blue-300 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-lg text-blue-900">
                    <span className="truncate">{report.name}</span>
                    <Badge
                      className={
                        report.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-amber-100 text-amber-800'
                      }
                    >
                      {report.status === 'published' ? 'Publicado' : 'Rascunho'}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="flex items-center text-blue-600">
                    <Calendar className="mr-1 h-4 w-4" />
                    {format(report.updatedAt, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="mb-2 text-sm text-blue-700">Paciente:</p>
                      <p className="text-sm font-medium">
                        {report.headerData.patient.name || 'Não especificado'}
                      </p>
                    </div>

                    {report.status === 'published' && (
                      <div>
                        <p className="mb-1 text-sm text-blue-700">Código de acesso:</p>
                        <div className="flex items-center gap-2">
                          <code className="rounded bg-blue-50 px-2 py-1 font-mono text-sm text-blue-800">
                            {report.accessCode}
                          </code>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 w-7 p-0"
                            onClick={() => {
                              navigator.clipboard.writeText(report.accessCode || '')
                            }}
                          >
                            <Copy className="h-3.5 w-3.5 text-blue-600" />
                          </Button>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.push(`/laudos/${report.id}`)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FilePenLine className="mr-1 h-4 w-4" />
                        Editar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.push(`/laudos/visualizar/${report.id}`)}
                        className="text-green-600 hover:text-green-800"
                      >
                        <Eye className="mr-1 h-4 w-4" />
                        Visualizar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteReport(report.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="mr-1 h-4 w-4" />
                        Excluir
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* Visualização em lista */
          <div className="overflow-hidden rounded-lg border border-blue-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-blue-200 bg-blue-50">
                    <th className="p-4 text-left font-semibold text-blue-900">Nome do Laudo</th>
                    <th className="p-4 text-left font-semibold text-blue-900">Paciente</th>
                    <th className="p-4 text-left font-semibold text-blue-900">Status</th>
                    <th className="p-4 text-left font-semibold text-blue-900">Data</th>
                    <th className="p-4 text-left font-semibold text-blue-900">Código</th>
                    <th className="p-4 text-left font-semibold text-blue-900">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReports.map((report) => (
                    <tr key={report.id} className="border-b border-gray-100 hover:bg-blue-50">
                      <td className="p-4">
                        <div className="max-w-[200px] truncate font-medium text-blue-900">
                          {report.name}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-gray-900">
                          {report.headerData.patient.name || 'Não especificado'}
                        </div>
                        {report.headerData.patient.species && (
                          <div className="text-xs text-gray-500">
                            {report.headerData.patient.species}
                          </div>
                        )}
                      </td>
                      <td className="p-4">
                        <Badge
                          className={
                            report.status === 'published'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-amber-100 text-amber-800'
                          }
                        >
                          {report.status === 'published' ? 'Publicado' : 'Rascunho'}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1 text-sm text-gray-900">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          {format(report.updatedAt, 'dd/MM/yyyy', { locale: ptBR })}
                        </div>
                        <div className="text-xs text-gray-500">
                          {format(report.updatedAt, 'HH:mm', { locale: ptBR })}
                        </div>
                      </td>
                      <td className="p-4">
                        {report.status === 'published' && (
                          <div className="flex items-center gap-2">
                            <code className="rounded bg-blue-50 px-2 py-1 font-mono text-xs text-blue-800">
                              {report.accessCode}
                            </code>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0"
                              onClick={() => {
                                navigator.clipboard.writeText(report.accessCode || '')
                              }}
                            >
                              <Copy className="h-3 w-3 text-blue-600" />
                            </Button>
                          </div>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push(`/laudos/${report.id}`)}
                            className="h-8 px-2 text-blue-600 hover:text-blue-800"
                          >
                            <FilePenLine className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push(`/laudos/visualizar/${report.id}`)}
                            className="h-8 px-2 text-green-600 hover:text-green-800"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteReport(report.id)}
                            className="h-8 px-2 text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
