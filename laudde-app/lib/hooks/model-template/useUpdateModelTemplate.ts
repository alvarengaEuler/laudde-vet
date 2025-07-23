import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TemplateInput } from '@/lib/validators/modelTemplateSchema'

export function useUpdateModelTemplate() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: TemplateInput & { id: string }) => {
      const response = await fetch('/api/model-templates', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData?.message || 'Erro ao atualizar modelo')
      }

      return response.json()
    },
    onSuccess: () => {
      // Invalida o cache da lista de modelos, se necessário
      queryClient.invalidateQueries({ queryKey: ['modelTemplates'] })
    },
  })
}
