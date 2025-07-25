import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import {
  Pencil,
  ArrowLeft,
  Building2,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { getClinicById } from '@/lib/clinic'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'

async function ClinicaDetalhes({ id }: { id: string }) {
  const clinic = await getClinicById(id)

  if (!clinic) {
    notFound()
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Link href="/dashboard/clinicas">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold sm:text-2xl">{clinic.name}</h1>
        </div>
        <Link
          href={{
            pathname: `/dashboard/clinicas/${id}/editar`,
            query: {
              name: clinic.name,
              address: clinic.address,
              city: clinic.city,
              state: clinic.state,
              email: clinic.email || '',
              phone: clinic.phone || '',
              whatsapp: clinic.whatsapp || '',
              cnpj: clinic.cnpj || '',
            },
          }}
        >
          <Button>
            <Pencil className="mr-2 h-4 w-4" />
            Editar Clínica
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Informações da Clínica
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <InfoItem
                icon={<MapPin />}
                label="Endereço"
                value={`${clinic.address}, ${clinic.city}/${clinic.state}`}
              />
              <InfoItem icon={<Mail />} label="Email" value={clinic?.email || ' - '} />
              <InfoItem icon={<Phone />} label="Telefone" value={clinic.phone || ' - '} />
            </div>
            <div className="space-y-3">
              <InfoItem
                icon={<MessageSquare />}
                label="WhatsApp"
                value={clinic.whatsapp || 'Não informado'}
              />
              <InfoItem icon={<Building2 />} label="CNPJ" value={clinic.cnpj || ' - '} />
              <InfoItem
                icon={<Calendar />}
                label="Data de Cadastro"
                value={clinic.createdAt.toLocaleDateString('pt-BR')}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="mt-0.5 text-gray-500">{icon}</div>
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-gray-600 dark:text-gray-400">{value}</p>
      </div>
    </div>
  )
}

function ClinicaDetalhesSkeleton() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-24" />
      </div>
      <Card>
        <CardHeader>
          <Skeleton className="mb-2 h-7 w-40" />
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

export default async function ClinicaDetalhesPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <Suspense fallback={<ClinicaDetalhesSkeleton />}>
      <ClinicaDetalhes id={id} />
    </Suspense>
  )
}
