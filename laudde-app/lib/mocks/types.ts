export type Model = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  fields: Field[]
}

export type Field = {
  id: string
  name: string
  type: 'textarea' | 'number' | 'table'
  defaultDescription?: string
  descriptionAlignment?: string
  required: boolean
  templateContent?: string
  tableContent?: string
}
