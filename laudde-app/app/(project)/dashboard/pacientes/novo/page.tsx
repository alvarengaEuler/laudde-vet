// app/dashboard/pacientes/novo/page.tsx
import { Suspense } from 'react'
import NovoPacienteClientComponent from '../components/new-pacient'
import NewPacientSkeleton from '../components/new-pacient-skeleton'

export default function NovoPacientePage() {
  return (
    <Suspense fallback={<NewPacientSkeleton />}>
      <NovoPacienteClientComponent />
    </Suspense>
  )
}
