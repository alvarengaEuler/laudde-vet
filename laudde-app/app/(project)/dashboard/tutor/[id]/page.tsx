import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { Pencil, ArrowLeft, Building2, Mail, Phone, Calendar, Dog } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { getTutorById } from '@/lib/actions/getTutorById'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'

async function TutorDetailsComponent({ id }: { id: string }) {
  const tutor = await getTutorById(id)

  if (!tutor) {
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
          <h1 className="text-xl font-bold sm:text-2xl">{tutor.name}</h1>
        </div>
        <Link
          href={{
            pathname: `/dashboard/clinicas/${id}/editar`,
            query: {
              name: tutor.name,
              address: tutor.address,
              city: tutor.city,
              state: tutor.state,
              email: tutor.email || '',
              phone: tutor.phone || '',
              // whatsapp: tutor. || '',
              // cpf: tutor.cpf || '',
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
            Informações do Tutor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-3">
              {/* <InfoItem
                icon={<MapPin />}
                label="Endereço"
                value={`${clinic.address}, ${clinic.city}/${clinic.state}`}
              /> */}
              <InfoItem icon={<Mail />} label="Email" value={tutor?.email || ' - '} />
              <InfoItem icon={<Phone />} label="Telefone" value={tutor.phone || ' - '} />
            </div>
            <div className="space-y-3">
              <InfoItem
                icon={<Dog />}
                label="Pets"
                value={tutor.patients.toString() || ' Nenhum Pet Cadastrado '}
              />
              {/* <InfoItem icon={<Building2 />} label="CNPJ" value={clinic.cnpj || ' - '} /> */}
              <InfoItem
                icon={<Calendar />}
                label="Data de Cadastro"
                value={tutor.createdAt.toLocaleDateString('pt-BR')}
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

function TutorDetailSkeleton() {
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

export default async function TutorDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <Suspense fallback={<TutorDetailSkeleton />}>
      <TutorDetailsComponent id={id} />
    </Suspense>
  )
}
