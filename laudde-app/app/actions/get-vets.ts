export const getVetById = async (id: string) => {
    const response = await fetch(`/api/vets/${id}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    })
    
    if (!response.ok) {
        throw new Error('Erro ao buscar veterinário.')
    }
    
    return response.json()
}