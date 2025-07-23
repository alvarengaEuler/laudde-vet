export interface Field {
  id: string
  name: string
  type: 'textarea' | 'number' | 'table'
  required: boolean
  defaultDescription?: string
  templateContent?: string
  tableContent?: string
  descriptionAlignment?: 'left' | 'center' | 'right'
}

export interface EditorFieldTypes {
  type: 'textarea' | 'image' | 'table' | 'header' | 'footer'
}

export interface ModelTemplate {
  id: string
  title: string
  content?: Field[] // ou Json
  category?: string
  createdAt: string
  updatedAt: string
}
export interface Model {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  fields: Field[]
  headerData?: Record<string, any>
  footerData?: Record<string, any>
}

export interface User {
  id: string
  name: string
  email: string
}
export interface Accesses {
  id: string
  timestamp: Date
  ip: string
}

export interface Veterinarian {
  id: string
  name: string
  crmv: string
  specialization: string
  phone: string
}

export interface Payment {
  id: string
  amount: number
  status: 'pending' | 'completed' | 'failed'
  method: 'credit_card' | 'bank_transfer' | 'pix'
  createdAt: Date
}
export interface FinancialTransaction {
  id: string
  amount: number
  type: 'credit' | 'debit' | 'refund' | 'pix'
  status: 'pending' | 'completed' | 'failed'
}

export interface Report {
  id: string
  patientId: string
  clinicId: string
  type: 'exam' | 'consultation' | 'surgery' | 'other'
  status: 'draft' | 'published'
  images: string[] // Lista de URLs ou paths
  content: Record<string, any> // Pode ser um JSON ou outro tipo de estrutura
  patient: {
    id: string
    name: string
    species: string
    breed: string
    age: string
  }
  clinic: {
    id: string
    name: string
    address: string
    phone: string
  }
  createdAt: Date
  updatedAt: Date
  label?: string
  passwordHash?: string
  publicHash?: string
  expiresAt?: Date
  maxAttempts?: number
  attemptCount?: number
  isBlocked?: boolean
  userId: string
  user?: User
  accesses?: []
  veterinarian?: Veterinarian
  payment?: Payment
  financialTransaction?: FinancialTransaction
}
