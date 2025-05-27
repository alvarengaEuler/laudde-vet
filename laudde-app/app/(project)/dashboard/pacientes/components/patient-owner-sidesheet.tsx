'use client'

import { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'

export type Tutor = {
  id: string
  name: string
  cpf: string
  phone: string
  email?: string
  address?: string
  city?: string
  state?: string
}

interface Props {
  isLoading?: boolean
  open: boolean
  onOpenChange: (open: boolean) => void
  patientOwners: Tutor[]
  error: string | null
  onSelectTutor: (tutor: { id: string; name: string }) => void
}

export function PatientOwnerSidesheet({
  open,
  onOpenChange,
  patientOwners,
  isLoading,
  error,
  onSelectTutor,
}: Props) {
  const [search, setSearch] = useState('')

  const filteredOwners = patientOwners.filter(
    (owner) => owner.name.toLowerCase().includes(search.toLowerCase()) || owner.cpf.includes(search)
  )

  const handleSelectOwner = (owner: Tutor) => {
    onSelectTutor({ id: owner.id, name: owner.name })
    onOpenChange(false)
  }

  const openTutorSideSheet = () => {
    // fechar a side sheet atual e abrir a de cadastro
    onOpenChange(false)
    // Aqui você pode implementar a lógica para abrir a side sheet de cadastro de tutor
    // usar url para abrir a página de cadastro de tutor, colocando um parametro de abertura. Acrescentando &openTutorSideSheet=true' sem redirecionar
    const url = new URL(window.location.href)
    url.searchParams.set('openTutorSideSheet', 'true')
    window.history.replaceState({}, '', `${url.pathname}?${url.searchParams.toString()}`)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] overflow-y-auto px-4 sm:w-[500px]">
        <SheetHeader>
          <SheetTitle>Selecionar Tutor</SheetTitle>
        </SheetHeader>

        <div className="mt-4 space-y-4">
          <Input
            placeholder="Buscar por nome ou CPF"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {isLoading ? (
            <p className="text-muted-foreground text-sm">Carregando tutores...</p>
          ) : (
            <p className="text-muted-foreground text-sm">
              {filteredOwners.length} tutor(es) encontrado(s)
            </p>
          )}

          {filteredOwners.length > 0 ? (
            <div className="space-y-2">
              {filteredOwners.map((owner) => (
                <button
                  key={owner.id}
                  onClick={() => handleSelectOwner(owner)}
                  className="hover:bg-muted w-full rounded-md border p-3 text-left shadow-sm transition"
                >
                  <p className="font-medium">{owner.name}</p>
                  <p className="text-muted-foreground text-sm">{owner.cpf}</p>
                  <p className="text-muted-foreground text-sm">{owner.phone}</p>
                </button>
              ))}
            </div>
          ) : (
            !isLoading && (
              <p className="text-muted-foreground text-sm">
                {search ? 'Nenhum tutor encontrado para esta busca' : 'Nenhum tutor cadastrado'}
              </p>
            )
          )}
        </div>

        {error && (
          <div className="mt-4 text-red-600">
            <p>{error}</p>
          </div>
        )}

        <button onClick={openTutorSideSheet}>Cadastrar Tutor Rapidamente</button>
      </SheetContent>
    </Sheet>
  )
}
