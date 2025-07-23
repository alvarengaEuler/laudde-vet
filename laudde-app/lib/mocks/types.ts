export type Model = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  fields: Field[]
  headerData?: HeaderData
  footerData?: FooterData
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

export type HeaderData = {
  clinic: {
    name: string
    cnpj: string
    phone: string
    email: string
  }
  patient: {
    enabled: boolean
    name: string
    species: string
    breed: string
    age: string
    sex: string
    weight: string
  }
  owner: {
    enabled: boolean
    name: string
    cpf: string
    phone: string
    email: string
  }
  exam: {
    enabled: boolean
    date: string
    type: string
    veterinarian: string
    requestingVet: string
  }
}

export type FooterData = {
  responsible: {
    name: string
    crmv: string
    specialization: string
    phone: string
  }
  address: {
    full: string
    city: string
    state: string
  }
  social: {
    instagram: string
    facebook: string
    website: string
    whatsapp: string
  }
}

export type ReportStatus = 'draft' | 'published'

export type Report = {
  id: string
  name: string
  modelId: string
  createdAt: Date
  updatedAt: Date
  status: ReportStatus
  accessCode?: string
  headerData: HeaderData
  footerData: FooterData
  fields: ReportField[]
  images: ReportImage[]
}

export type ReportField = {
  id: string
  name: string
  type: 'textarea' | 'number' | 'table'
  description?: string
  descriptionAlignment?: string
  content: string
  tableContent?: string
}

export type ReportImage = {
  id: string
  name: string
  url: string
  description?: string
}
