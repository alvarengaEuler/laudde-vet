'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, Calendar, FileText, Grid3X3, List, Trash } from 'lucide-react'
import { useModelStore } from '@/lib/stores/model-store'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { ModelListView } from '@/components/modelos/editor/model-list-view'
import ActionMenu from '@/components/modelos/editor/action-menu'

export default function ModelsListPage() {
  const { models, createModel, fetchModels } = useModelStore()
  const router = useRouter()
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards')
  const [modelToDelete, setModelToDelete] = useState<string | null>(null)
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  useEffect(() => {
    fetchModels()
  }, [])

  const handleCreateModel = () => {
    const response = fetch('/api/models', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Novo Modelo Ultrassom', ExamType: 'ULTRASOUND', fields: [] }),
    })
      .then((res) => res.json())
      .then((data) => {
        createModel({
          id: data.id,
          name: data.title,
          fields: [],
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
        })
        router.push(`/dashboard/modelos/editor/${data.id}`)
      })
      .catch((error) => {
        console.error('Error creating model:', error)
        alert('Erro ao criar modelo. Tente novamente.')
      })
    return response
  }

  const handleEditModel = (id: string) => {
    router.push(`/dashboard/modelos/editor/${id}`)
  }

  const handleDeleteModel = (id: string) => {
    setModelToDelete(id)
    setShowConfirmModal(true)
  }

  const handleDeleteModelConfirm = async () => {
    if (!modelToDelete) {
      console.warn('Nenhum modelo selecionado para deletar.')
      return
    }

    try {
      const response = await fetch(`/api/models/${modelToDelete}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Erro ao deletar modelo.')
      }

      // Atualiza a lista local
      await fetchModels()

      // Limpa o estado e fecha o modal
      setModelToDelete(null)
      setShowConfirmModal(false)
    } catch (error: any) {
      console.error('Erro ao deletar modelo:', error)
      alert(error.message || 'Erro ao deletar modelo. Tente novamente.')
    }
  }

  const handleCancelDelete = () => {
    setModelToDelete(null)
    setShowConfirmModal(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-blue-900">
              Modelos de Laudos Veterinários
            </h1>
            <p className="text-blue-700">Gerencie e edite seus modelos de laudos de forma visual</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
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

            <Button
              onClick={handleCreateModel}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              <Plus className="mr-2 h-4 w-4" />
              Novo Modelo
            </Button>
          </div>
        </div>

        {models.length === 0 ? (
          <Card className="border-blue-200 py-12 text-center">
            <CardContent>
              <FileText className="mx-auto mb-4 h-16 w-16 text-blue-400" />
              <h3 className="mb-2 text-xl font-semibold text-blue-900">Nenhum modelo encontrado</h3>
              <p className="mb-6 text-blue-600">
                Comece criando seu primeiro modelo de laudo veterinário
              </p>
              <Button onClick={handleCreateModel} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                Criar Primeiro Modelo
              </Button>
            </CardContent>
          </Card>
        ) : viewMode === 'cards' ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {models.map((model) => (
              <Card
                key={model.id}
                className="cursor-pointer border-blue-200 transition-shadow hover:border-blue-300 hover:shadow-lg"
                onClick={() => {
                  handleEditModel(model.id)
                }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-blue-900">{model.name}</CardTitle>
                      <CardDescription className="flex items-center text-blue-600">
                        <Calendar className="mr-1 h-4 w-4" />
                        {format(new Date(model.createdAt), "dd 'de' MMMM 'de' yyyy", {
                          locale: ptBR,
                        })}
                      </CardDescription>
                    </div>
                    <Button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        handleDeleteModel(model.id)
                      }}
                      size="icon"
                      variant="ghost"
                    >
                      <Trash size={22} className="text-red-500" />
                    </Button>
                    {/* <ActionMenu
                      onEdit={() => {
                        handleEditModel(model.id)
                      }}
                      onDelete={(e) => {
                        e.stopPropagation()
                        handleDeleteModel(model.id)
                      }}
                    /> */}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {model.fields.length} {model.fields.length === 1 ? 'campo' : 'campos'}
                      </Badge>
                    </div>
                    {model.fields.length > 0 && (
                      <div>
                        <p className="mb-2 text-sm text-blue-700">Campos:</p>
                        <div className="flex flex-wrap gap-1">
                          {model.fields.slice(0, 3).map((field) => (
                            <Badge
                              key={field.id}
                              variant="outline"
                              className="border-blue-300 text-xs text-blue-700"
                            >
                              {field.name}
                            </Badge>
                          ))}
                          {model.fields.length > 3 && (
                            <Badge
                              variant="outline"
                              className="border-blue-300 text-xs text-blue-700"
                            >
                              +{model.fields.length - 3} mais
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <ModelListView models={models} onEditModel={handleEditModel} />
        )}
      </div>

      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-full max-w-md rounded-md bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold text-blue-900">Confirmar exclusão</h2>
            <p className="mb-6 text-blue-700">
              Tem certeza que deseja excluir este modelo? Esta ação não pode ser desfeita.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={handleCancelDelete}>
                Cancelar
              </Button>
              <Button
                className="bg-red-600 text-white hover:bg-red-700"
                onClick={handleDeleteModelConfirm}
              >
                Deletar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
