export async function fetchTutors() {
  const res = await fetch('/api/tutor')
  if (!res.ok) throw new Error('Erro ao buscar tutores')
  return res.json()
}
