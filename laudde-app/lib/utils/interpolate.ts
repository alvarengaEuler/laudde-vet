import { useTemplateVariables } from '../stores/template-variables-store'

/**
 * Retorna o texto com variáveis no formato {{ nome }} substituídas pelo valor atual da store.
 */
export function interpolate(text: string): string {
  console.log('interpolate', text)
  const { variables } = useTemplateVariables.getState()

  return text.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) => {
    return variables[key] ?? `{{${key}}}` // deixa a variável visível se não tiver valor
  })
}
