import type { Model } from './types'

export const mockModels: Model[] = [
  {
    id: '1',
    name: 'Exame Gestacional Bovino',
    createdAt: new Date('2024-01-15').toISOString(),
    updatedAt: new Date('2024-01-15').toISOString(),
    fields: [
      {
        id: '1-1',
        name: 'Útero',
        type: 'textarea',
        defaultDescription: 'Avaliação do útero gestante',
        required: true,
        templateContent: 'Útero gravídico com feto viável',
      },
      {
        id: '1-2',
        name: 'Feto',
        type: 'textarea',
        defaultDescription: 'Condições do feto',
        required: true,
        templateContent: 'Feto em posição normal, batimentos cardíacos presentes',
      },
      {
        id: '1-3',
        name: 'Idade Gestacional',
        type: 'number',
        defaultDescription: 'Idade gestacional em dias',
        required: true,
        templateContent: '180',
      },
    ],
  },
  {
    id: '2',
    name: 'Exame Oftalmológico',
    createdAt: new Date('2024-01-10').toISOString(),
    updatedAt: new Date('2024-01-12').toISOString(),
    fields: [
      {
        id: '2-1',
        name: 'Córnea',
        type: 'textarea',
        defaultDescription: 'Avaliação da córnea',
        required: true,
        templateContent: 'Córnea transparente, sem lesões',
      },
      {
        id: '2-2',
        name: 'Cristalino',
        type: 'textarea',
        defaultDescription: 'Avaliação do cristalino',
        required: true,
        templateContent: 'Cristalino transparente',
      },
      {
        id: '2-3',
        name: 'Pressão Intraocular',
        type: 'table',
        defaultDescription: 'Medições da pressão intraocular',
        required: false,
        tableContent:
          '{"headers": ["Olho", "Pressão (mmHg)", "Observações"], "rows": [["Direito", "15", "Normal"], ["Esquerdo", "16", "Normal"]]}',
      },
    ],
  },
]

// Additional mock data can be added here for more models and fields as needed.

export enum ReportStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
}

export interface Patient {
  id: string
  name: string
  species: string
  breed?: string
  age?: number
  sex: 'Macho' | 'Fêmea'
  owner: string
  clinicalSuspicion?: string
}

export interface Clinic {
  id: string
  name: string
  address: string
}

export interface User {
  id: string
  name: string
  email: string
  role: string
}

export interface Veterinarian {
  id: string
  name: string
  crmv: string
  specialty?: string
}

export interface Report {
  id: string
  patientId?: string
  clinicId?: string
  userId: string
  status: ReportStatus
  label?: string
  fields?: Record<string, any>
  accessCode: string
  documentoPublicHash: string
  expiresAt?: Date
  maxAttempts: number
  attemptCount: number
  isBlocked: boolean
  createdAt: Date
  updatedAt: Date

  // Relations
  patient?: Patient
  clinic?: Clinic
  user: User
  veterinarians: Veterinarian[]
}

export interface ReportFormData {
  label: string
  patientId: string
  clinicId: string
  veterinarianIds: string[]
  examType: string
  findings: string
  diagnosis: string
  recommendations: string
  accessCode: string
  expiresAt?: Date
  billing?: BillingInfo
  // Patient specific fields
  reportDate: string
  species: string
  breed: string
  age: number
  sex: 'Macho' | 'Fêmea'
  owner: string
  clinicalSuspicion: string
  veterinarianName: string
}

export type BillingMode = 'predefined' | 'custom'

export interface BillingItem {
  id: string
  name: string
  description: string
  price: number
  category: string
}

export interface BillingInfo {
  mode: BillingMode
  totalAmount: number
  predefinedItemId?: string
  customAmount?: number
  customDescription?: string
}

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'Mimosa',
    species: 'Equino',
    breed: 'Mangalarga',
    age: 8,
    owner: 'João Silva',
    sex: 'Macho',
  },
  {
    id: '2',
    name: 'Rex',
    species: 'Canino',
    breed: 'Pastor Alemão',
    age: 5,
    owner: 'Maria Santos',
    sex: 'Macho',
  },
  {
    id: '3',
    name: 'Luna',
    species: 'Felino',
    breed: 'Persa',
    age: 3,
    owner: 'Pedro Costa',
    sex: 'Fêmea',
  },
]

export const mockClinics: Clinic[] = [
  {
    id: '1',
    name: 'Clínica Veterinária Central',
    address: 'Rua das Flores, 123 - Centro',
  },
  {
    id: '2',
    name: 'Hospital Veterinário São Francisco',
    address: 'Av. Principal, 456 - Jardim',
  },
]

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Dr. Carlos Mendes',
    email: 'carlos@clinica.com',
    role: 'Veterinário',
  },
]

export const mockVeterinarians: Veterinarian[] = [
  {
    id: '1',
    name: 'Dr. Carlos Mendes',
    crmv: 'CRMV-SP 12345',
    specialty: 'Clínica Geral',
  },
  {
    id: '2',
    name: 'Dra. Ana Paula',
    crmv: 'CRMV-SP 67890',
    specialty: 'Oftalmologia',
  },
]

export const mockReports: Report[] = [
  {
    id: '1',
    patientId: '1',
    clinicId: '1',
    userId: '1',
    status: ReportStatus.PUBLISHED,
    label: 'Laudo - Exame Gestacional Equino',
    fields: {
      examType: 'Ultrassom Gestacional',
      findings: 'Feto viável com desenvolvimento normal',
      diagnosis: 'Gestação normal - 6 meses',
      recommendations: 'Acompanhamento mensal',
    },
    accessCode: 'ABC12345',
    documentoPublicHash: 'hash1',
    maxAttempts: 5,
    attemptCount: 0,
    isBlocked: false,
    createdAt: new Date('2024-05-14'),
    updatedAt: new Date('2024-05-14'),
    patient: mockPatients[0],
    clinic: mockClinics[0],
    user: mockUsers[0],
    veterinarians: [mockVeterinarians[0]],
  },
  {
    id: '2',
    patientId: '2',
    clinicId: '1',
    userId: '1',
    status: ReportStatus.DRAFT,
    label: 'Laudo - Exame Oftalmológico',
    fields: {
      examType: 'Exame Oftalmológico Completo',
      findings: 'Opacidade leve no cristalino',
      diagnosis: 'Catarata inicial',
      recommendations: 'Acompanhamento semestral',
    },
    accessCode: 'DEF67890',
    documentoPublicHash: 'hash2',
    maxAttempts: 5,
    attemptCount: 0,
    isBlocked: false,
    createdAt: new Date('2024-05-09'),
    updatedAt: new Date('2024-05-09'),
    patient: mockPatients[1],
    clinic: mockClinics[0],
    user: mockUsers[0],
    veterinarians: [mockVeterinarians[1]],
  },
]

// Helper function to generate access codes
export function generateAccessCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

// Helper function to generate public hash
export function generatePublicHash(): string {
  return Math.random().toString(36).substring(2, 15)
}

export const mockBillingItems: BillingItem[] = [
  {
    id: '1',
    name: 'Exame Radiológico Simples',
    description: 'Radiografia de uma região',
    price: 120.0,
    category: 'Radiologia',
  },
  {
    id: '2',
    name: 'Ultrassom Abdominal',
    description: 'Ultrassonografia abdominal completa',
    price: 180.0,
    category: 'Ultrassom',
  },
  {
    id: '3',
    name: 'Exame Oftalmológico',
    description: 'Exame oftalmológico completo',
    price: 150.0,
    category: 'Oftalmologia',
  },
  {
    id: '4',
    name: 'Consulta Clínica',
    description: 'Consulta clínica geral',
    price: 80.0,
    category: 'Consulta',
  },
  {
    id: '5',
    name: 'Exame Cardiológico',
    description: 'Ecocardiograma e eletrocardiograma',
    price: 250.0,
    category: 'Cardiologia',
  },
]
