export async function fetchPatients() {
  const res = await fetch('/api/patient')

  if (!res.ok) throw new Error('Erro ao buscar pacientes')
  return res.json()
}
