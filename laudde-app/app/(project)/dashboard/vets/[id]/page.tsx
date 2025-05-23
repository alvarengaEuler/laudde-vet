
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { Pencil, ArrowLeft, Building2, Mail, Phone, MessageSquare, Calendar, BriefcaseMedical, FileBadge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { getVetById } from "@/lib/actions/getVetById"



async function VetDetails({ id }: { id: string }) {
  const vets = await getVetById(id)

  if (!vets) {
    notFound()
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <Link href="/dashboard/vets">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold">{vets.name}</h1>
        </div>
        <Link
  href={{
    pathname: `/dashboard/vets/${id}/editar`,
    query: {
      name: vets.name,
      email: vets.email || '',
      phone: vets.phone || '',
      whatsapp: vets.whatsapp || '',
      crmNumber: vets.crmNumber || '', 
    }
  }}
>
  <Button variant="brand">
    <Pencil className="h-4 w-4 mr-2" />
    Editar Veterinário
  </Button>
</Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Informações do Veterinário
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <InfoItem icon={<BriefcaseMedical />} label="Nome" value={vets?.name || ' - '} />
              <InfoItem icon={<Mail />} label="Email" value={vets?.email || ' - '} />
              <InfoItem icon={<Phone />} label="Telefone" value={vets.phone || ' - '} />
              <InfoItem icon={<MessageSquare />} label="WhatsApp" value={vets.whatsapp || "Não informado"} />
              <InfoItem icon={<FileBadge />} label="CRM" value={vets.crmNumber || ' - '} />
            </div>
            <div className="space-y-3">
              
              
              <InfoItem icon={<Calendar />} label="Data de Cadastro" value={vets.createdAt.toLocaleDateString("pt-BR")} />
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
      <div className="text-gray-500 mt-0.5">{icon}</div>
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-gray-600 dark:text-gray-400">{value}</p>
      </div>
    </div>
  )
}

function VetsSkeleton() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-24" />
      </div>
      <Card>
        <CardHeader>
          <Skeleton className="h-7 w-40 mb-2" />
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

export default async function VetDetailsPage({ params }: { params: Promise<{ id: string }>}) {
 const { id } = await params;
  return (
    <Suspense fallback={<VetsSkeleton />}>
     
      <VetDetails id={id} />
    </Suspense>
  )
}
