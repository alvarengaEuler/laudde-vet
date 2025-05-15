// Tipos
export type User = {
  id: string
  name: string
  email: string
  role: "admin" | "veterinarian"
}

export type Patient = {
  id: string
  name: string
  species: string
  breed: string
  sex: "male" | "female"
  age: number
  ageUnit: "years" | "months"
  ownerName: string
  ownerPhone: string
  createdAt: Date
}

export type Clinic = {
  id: string
  name: string
  cnpj: string
  address: string
  city: string
  state: string
  createdAt: Date
}

export type Measurement = {
  organ: string
  value: string
}

export type UltrasoundCategory = "abdominal" | "cardiac" | "reproductive" | "musculoskeletal" | "ocular" | "thyroid"

export type XRayCategory = "thoracic" | "abdominal" | "skeletal" | "dental"

export type ExamCategory = UltrasoundCategory | XRayCategory

export type Report = {
  id: string
  patientId: string
  clinicId: string
  type: "ultrasound" | "x-ray"
  category?: ExamCategory
  measurements: Measurement[]
  findings: string
  conclusion: string
  createdAt: Date
  status: "draft" | "completed"
  baseValue: number
  additionalValue: number
  code: string
  images?: string[]
}

export type TextTemplate = {
  id: string
  title: string
  category: ExamCategory | "other"
  content: string
  createdAt: Date
}

export type ConclusionTemplate = {
  id: string
  title: string
  category: ExamCategory | "general"
  content: string
  createdAt: Date
}

export type Payment = {
  id: string
  reportId: string
  amount: number
  method: "credit_card" | "bank_transfer" | "pix"
  source: "clinic" | "individual"
  sourceId: string // clinicId or patientId
  date: Date
  status: "paid" | "pending"
}

export type FinancialTransaction = {
  id: string
  type: "income" | "expense"
  category: string
  description: string
  amount: number
  date: Date
  relatedReportId?: string
  relatedClinicId?: string
  relatedPatientId?: string
  paymentMethod?: string
  status: "completed" | "pending"
}

// Tipos para administração de usuários
export type UserRole = "admin" | "veterinarian" | "assistant" | "clinic_manager"
export type SubscriptionStatus = "active" | "trial" | "expired" | "canceled" | "pending"
export type PlanType = "basic" | "standard" | "premium" | "enterprise"

export type UserPlan = {
  id: string
  name: string
  type: PlanType
  price: number
  billingCycle: "monthly" | "yearly"
  features: string[]
  maxReports: number
  maxPatients: number
  maxClinics: number
  includesSupport: boolean
}

export type AdminUser = {
  id: string
  name: string
  email: string
  role: UserRole
  status: "active" | "inactive" | "suspended"
  subscriptionStatus: SubscriptionStatus
  planId: string
  lastLogin: Date | null
  createdAt: Date
  phone?: string
  address?: string
  profileImage?: string
}

// Dados simulados
export const users: User[] = [
  {
    id: "1",
    name: "Dr. Ana Silva",
    email: "ana.silva@laudde.com",
    role: "admin",
  },
  {
    id: "2",
    name: "Dr. Carlos Mendes",
    email: "carlos.mendes@laudde.com",
    role: "veterinarian",
  },
]

export const patients: Patient[] = [
  {
    id: "1",
    name: "Rex",
    species: "Canino",
    breed: "Labrador",
    sex: "male",
    age: 5,
    ageUnit: "years",
    ownerName: "Maria Oliveira",
    ownerPhone: "(11) 98765-4321",
    createdAt: new Date("2023-10-15"),
  },
  {
    id: "2",
    name: "Luna",
    species: "Felino",
    breed: "Siamês",
    sex: "female",
    age: 3,
    ageUnit: "years",
    ownerName: "João Santos",
    ownerPhone: "(11) 91234-5678",
    createdAt: new Date("2023-11-20"),
  },
  {
    id: "3",
    name: "Bolinha",
    species: "Canino",
    breed: "Poodle",
    sex: "male",
    age: 8,
    ageUnit: "years",
    ownerName: "Carla Ferreira",
    ownerPhone: "(11) 99876-5432",
    createdAt: new Date("2023-12-05"),
  },
  {
    id: "4",
    name: "Mia",
    species: "Felino",
    breed: "Persa",
    sex: "female",
    age: 2,
    ageUnit: "years",
    ownerName: "Roberto Almeida",
    ownerPhone: "(11) 98765-1234",
    createdAt: new Date("2024-01-10"),
  },
  {
    id: "5",
    name: "Thor",
    species: "Canino",
    breed: "Golden Retriever",
    sex: "male",
    age: 4,
    ageUnit: "years",
    ownerName: "Fernanda Lima",
    ownerPhone: "(11) 91234-9876",
    createdAt: new Date("2024-02-15"),
  },
]

export const clinics: Clinic[] = [
  {
    id: "1",
    name: "Clínica Veterinária Patinhas",
    cnpj: "12.345.678/0001-90",
    address: "Rua das Flores, 123",
    city: "São Paulo",
    state: "SP",
    createdAt: new Date("2023-01-15"),
  },
  {
    id: "2",
    name: "Pet Care Centro Veterinário",
    cnpj: "98.765.432/0001-10",
    address: "Av. Paulista, 1000",
    city: "São Paulo",
    state: "SP",
    createdAt: new Date("2023-02-20"),
  },
  {
    id: "3",
    name: "Hospital Veterinário Amigo Fiel",
    cnpj: "45.678.901/0001-23",
    address: "Rua dos Animais, 456",
    city: "Campinas",
    state: "SP",
    createdAt: new Date("2023-03-10"),
  },
]

export const examPrices = {
  ultrasound: {
    abdominal: 250,
    cardiac: 300,
    reproductive: 220,
    musculoskeletal: 280,
    ocular: 200,
    thyroid: 180,
  },
  x_ray: {
    thoracic: 180,
    abdominal: 180,
    skeletal: 200,
    dental: 150,
  },
}

export const reports: Report[] = [
  {
    id: "1",
    patientId: "1",
    clinicId: "1",
    type: "ultrasound",
    category: "abdominal",
    measurements: [
      { organ: "Fígado", value: "8.5 cm" },
      { organ: "Baço", value: "5.2 cm" },
    ],
    findings:
      "Fígado com dimensões normais, contornos regulares e ecotextura homogênea. Baço com dimensões normais e ecotextura homogênea.",
    conclusion: "Exame ultrassonográfico abdominal dentro dos padrões de normalidade.",
    createdAt: new Date("2024-04-10"),
    status: "completed",
    baseValue: 250,
    additionalValue: 0,
    code: "ABCD1234",
    images: [],
  },
  {
    id: "2",
    patientId: "2",
    clinicId: "2",
    type: "x-ray",
    category: "thoracic",
    measurements: [{ organ: "Coração", value: "VHS 10.2" }],
    findings: "Silhueta cardíaca com dimensões aumentadas. Campos pulmonares com padrão bronquial difuso.",
    conclusion: "Cardiomegalia moderada. Padrão bronquial sugestivo de bronquite.",
    createdAt: new Date("2024-04-15"),
    status: "completed",
    baseValue: 180,
    additionalValue: 0,
    code: "EFGH5678",
    images: [],
  },
  {
    id: "3",
    patientId: "3",
    clinicId: "1",
    type: "ultrasound",
    category: "reproductive",
    measurements: [
      { organ: "Útero", value: "1.2 cm" },
      { organ: "Ovário Direito", value: "0.8 cm" },
      { organ: "Ovário Esquerdo", value: "0.7 cm" },
    ],
    findings:
      "Útero com dimensões normais, contornos regulares e ecotextura homogênea. Ovários com dimensões e ecotextura normais.",
    conclusion: "Exame ultrassonográfico do sistema reprodutivo dentro dos padrões de normalidade.",
    createdAt: new Date("2024-04-20"),
    status: "completed",
    baseValue: 220,
    additionalValue: 0,
    code: "IJKL9012",
    images: [],
  },
  {
    id: "4",
    patientId: "4",
    clinicId: "3",
    type: "x-ray",
    category: "skeletal",
    measurements: [],
    findings: "Estruturas ósseas com densidade e contornos preservados. Articulações com espaços articulares mantidos.",
    conclusion: "Radiografia de membros sem alterações significativas.",
    createdAt: new Date("2024-04-25"),
    status: "completed",
    baseValue: 200,
    additionalValue: 0,
    code: "MNOP3456",
    images: [],
  },
  {
    id: "5",
    patientId: "5",
    clinicId: "2",
    type: "ultrasound",
    category: "cardiac",
    measurements: [
      { organ: "Átrio Esquerdo", value: "1.8 cm" },
      { organ: "Ventrículo Esquerdo", value: "3.2 cm" },
      { organ: "Septo Interventricular", value: "0.6 cm" },
    ],
    findings:
      "Átrio esquerdo com dimensões levemente aumentadas. Ventrículo esquerdo com dimensões normais. Contratilidade preservada. Válvulas com morfologia e movimentação normais.",
    conclusion:
      "Discreta dilatação atrial esquerda, sugestiva de cardiopatia inicial. Recomenda-se acompanhamento cardiológico.",
    createdAt: new Date("2024-05-01"),
    status: "completed",
    baseValue: 300,
    additionalValue: 0,
    code: "QRST7890",
    images: [],
  },
  {
    id: "6",
    patientId: "1",
    clinicId: "1",
    type: "ultrasound",
    category: "abdominal",
    measurements: [
      { organ: "Fígado", value: "9.2 cm" },
      { organ: "Vesícula Biliar", value: "Moderadamente distendida" },
      { organ: "Baço", value: "5.5 cm" },
    ],
    findings:
      "Fígado com dimensões levemente aumentadas, contornos regulares e ecotextura heterogênea. Vesícula biliar moderadamente distendida com conteúdo anecogênico. Baço com dimensões e ecotextura normais.",
    conclusion: "Hepatomegalia leve com alteração de ecotextura sugestiva de hepatopatia.",
    createdAt: new Date("2024-05-05"),
    status: "completed",
    baseValue: 250,
    additionalValue: 30,
    code: "UVWX1234",
    images: [],
  },
  {
    id: "7",
    patientId: "3",
    clinicId: "2",
    type: "ultrasound",
    category: "ocular",
    measurements: [
      { organ: "Câmara Anterior", value: "0.3 cm" },
      { organ: "Cristalino", value: "0.4 cm" },
    ],
    findings:
      "Câmara anterior com profundidade normal. Cristalino com dimensões, posição e ecogenicidade normais. Corpo vítreo anecogênico.",
    conclusion: "Exame ultrassonográfico ocular dentro dos padrões de normalidade.",
    createdAt: new Date("2024-05-10"),
    status: "completed",
    baseValue: 200,
    additionalValue: 0,
    code: "YZAB5678",
    images: [],
  },
]

export const textTemplates: TextTemplate[] = [
  {
    id: "1",
    title: "Fígado Normal",
    category: "abdominal",
    content:
      "Fígado com dimensões normais, contornos regulares e ecotextura homogênea. Não há evidências de lesões focais ou difusas. Vias biliares intra-hepáticas não dilatadas.",
    createdAt: new Date("2023-05-10"),
  },
  {
    id: "2",
    title: "Rins Normais",
    category: "abdominal",
    content:
      "Rins com dimensões, contornos e ecotextura normais. Relação córtico-medular preservada. Não há evidências de litíase, dilatação do sistema coletor ou massas.",
    createdAt: new Date("2023-05-15"),
  },
  {
    id: "3",
    title: "Coração Normal",
    category: "cardiac",
    content:
      "Silhueta cardíaca com dimensões normais. Índice cardio-vertebral dentro dos valores de referência para a espécie. Não há evidências de aumento de câmaras cardíacas.",
    createdAt: new Date("2023-05-20"),
  },
  {
    id: "4",
    title: "Pulmões Normais",
    category: "thoracic",
    content:
      "Campos pulmonares com radiopacidade e padrão de distribuição normais. Não há evidências de padrões alveolares, bronquiais ou intersticiais patológicos.",
    createdAt: new Date("2023-05-25"),
  },
  {
    id: "5",
    title: "Bexiga Normal",
    category: "abdominal",
    content:
      "Bexiga moderadamente distendida com conteúdo anecogênico. Paredes regulares com espessura normal. Não há evidências de sedimento, cálculos ou massas.",
    createdAt: new Date("2023-06-01"),
  },
  {
    id: "6",
    title: "Útero Normal",
    category: "reproductive",
    content:
      "Útero com dimensões, contornos e ecotextura normais. Não há evidências de gestação, massas ou alterações patológicas.",
    createdAt: new Date("2023-06-05"),
  },
  {
    id: "7",
    title: "Ovários Normais",
    category: "reproductive",
    content:
      "Ovários com dimensões, contornos e ecotextura normais. Não há evidências de cistos, massas ou alterações patológicas.",
    createdAt: new Date("2023-06-10"),
  },
  {
    id: "8",
    title: "Olho Normal",
    category: "ocular",
    content:
      "Câmara anterior com profundidade normal. Cristalino com dimensões, posição e ecogenicidade normais. Corpo vítreo anecogênico. Retina aplicada.",
    createdAt: new Date("2023-06-15"),
  },
  {
    id: "9",
    title: "Tireoide Normal",
    category: "thyroid",
    content:
      "Glândula tireoide com dimensões, contornos e ecotextura normais. Não há evidências de nódulos, massas ou alterações patológicas.",
    createdAt: new Date("2023-06-20"),
  },
  {
    id: "10",
    title: "Articulação Normal",
    category: "musculoskeletal",
    content:
      "Articulação com espaço articular preservado. Superfícies ósseas regulares. Não há evidências de efusão, osteófitos ou alterações patológicas.",
    createdAt: new Date("2023-06-25"),
  },
]

export const conclusionTemplates: ConclusionTemplate[] = [
  {
    id: "1",
    title: "Fígado Normal",
    category: "abdominal",
    content: "Exame ultrassonográfico abdominal dentro dos padrões de normalidade, sem alterações hepáticas.",
    createdAt: new Date("2023-05-10"),
  },
  {
    id: "2",
    title: "Nefropatia Crônica",
    category: "abdominal",
    content:
      "Alterações ecográficas compatíveis com nefropatia crônica bilateral. Sugere-se avaliação da função renal.",
    createdAt: new Date("2023-05-15"),
  },
  {
    id: "3",
    title: "Cardiomegalia",
    category: "thoracic",
    content: "Cardiomegalia moderada. Padrão bronquial sugestivo de bronquite. Recomenda-se avaliação cardiológica.",
    createdAt: new Date("2023-05-20"),
  },
  {
    id: "4",
    title: "Tórax Normal",
    category: "thoracic",
    content:
      "Radiografia torácica sem alterações significativas. Campos pulmonares e silhueta cardíaca dentro dos padrões de normalidade.",
    createdAt: new Date("2023-05-25"),
  },
  {
    id: "5",
    title: "Hepatopatia",
    category: "abdominal",
    content:
      "Hepatomegalia leve com alteração de ecotextura sugestiva de hepatopatia. Recomenda-se avaliação laboratorial hepática.",
    createdAt: new Date("2023-06-01"),
  },
  {
    id: "6",
    title: "Litíase Vesical",
    category: "abdominal",
    content:
      "Presença de estruturas hiperecogênicas formadoras de sombra acústica posterior em vesícula urinária, compatíveis com cálculos vesicais. Recomenda-se avaliação urológica.",
    createdAt: new Date("2023-06-05"),
  },
  {
    id: "7",
    title: "Fratura Óssea",
    category: "skeletal",
    content:
      "Evidência radiográfica de fratura completa em terço médio de fêmur direito. Recomenda-se avaliação ortopédica para tratamento adequado.",
    createdAt: new Date("2023-06-10"),
  },
  {
    id: "8",
    title: "Sem Alterações",
    category: "general",
    content:
      "Exame de imagem sem alterações significativas. Todos os parâmetros avaliados encontram-se dentro dos limites da normalidade para a espécie.",
    createdAt: new Date("2023-06-15"),
  },
  {
    id: "9",
    title: "Gestação",
    category: "reproductive",
    content:
      "Presença de estruturas fetais intrauterinas com batimentos cardíacos presentes. Compatível com gestação de aproximadamente 30 dias.",
    createdAt: new Date("2023-06-20"),
  },
  {
    id: "10",
    title: "Cardiopatia",
    category: "cardiac",
    content:
      "Alterações ecocardiográficas compatíveis com cardiopatia valvar. Recomenda-se avaliação cardiológica completa.",
    createdAt: new Date("2023-06-25"),
  },
  {
    id: "11",
    title: "Catarata",
    category: "ocular",
    content:
      "Presença de opacidade cristaliniana bilateral, compatível com catarata. Recomenda-se avaliação oftalmológica.",
    createdAt: new Date("2023-06-30"),
  },
  {
    id: "12",
    title: "Hipertireoidismo",
    category: "thyroid",
    content:
      "Aumento bilateral da glândula tireoide com alteração de ecotextura, sugestivo de hipertireoidismo. Recomenda-se avaliação endocrinológica.",
    createdAt: new Date("2023-07-05"),
  },
]

export const payments: Payment[] = [
  {
    id: "1",
    reportId: "1",
    amount: 250.0,
    method: "credit_card",
    source: "clinic",
    sourceId: "1",
    date: new Date("2024-04-10"),
    status: "paid",
  },
  {
    id: "2",
    reportId: "2",
    amount: 180.0,
    method: "pix",
    source: "clinic",
    sourceId: "2",
    date: new Date("2024-04-15"),
    status: "paid",
  },
  {
    id: "3",
    reportId: "3",
    amount: 220.0,
    method: "bank_transfer",
    source: "clinic",
    sourceId: "1",
    date: new Date("2024-04-20"),
    status: "paid",
  },
  {
    id: "4",
    reportId: "4",
    amount: 200.0,
    method: "credit_card",
    source: "clinic",
    sourceId: "3",
    date: new Date("2024-04-25"),
    status: "paid",
  },
  {
    id: "5",
    reportId: "5",
    amount: 300.0,
    method: "pix",
    source: "individual",
    sourceId: "5",
    date: new Date("2024-05-01"),
    status: "paid",
  },
  {
    id: "6",
    reportId: "6",
    amount: 280.0,
    method: "credit_card",
    source: "clinic",
    sourceId: "1",
    date: new Date("2024-05-05"),
    status: "paid",
  },
  {
    id: "7",
    reportId: "7",
    amount: 200.0,
    method: "pix",
    source: "clinic",
    sourceId: "2",
    date: new Date("2024-05-10"),
    status: "paid",
  },
]

export const financialTransactions: FinancialTransaction[] = [
  {
    id: "1",
    type: "income",
    category: "Laudo",
    description: "Pagamento de laudo - Clínica Patinhas",
    amount: 250.0,
    date: new Date("2024-04-10"),
    relatedReportId: "1",
    relatedClinicId: "1",
    paymentMethod: "credit_card",
    status: "completed",
  },
  {
    id: "2",
    type: "income",
    category: "Laudo",
    description: "Pagamento de laudo - Pet Care",
    amount: 180.0,
    date: new Date("2024-04-15"),
    relatedReportId: "2",
    relatedClinicId: "2",
    paymentMethod: "pix",
    status: "completed",
  },
  {
    id: "3",
    type: "expense",
    category: "Transporte",
    description: "Uber para Clínica Patinhas",
    amount: 25.0,
    date: new Date("2024-04-10"),
    relatedClinicId: "1",
    status: "completed",
  },
  {
    id: "4",
    type: "expense",
    category: "Material",
    description: "Compra de gel para ultrassom",
    amount: 50.0,
    date: new Date("2024-04-05"),
    status: "completed",
  },
  {
    id: "5",
    type: "income",
    category: "Laudo",
    description: "Pagamento de laudo - Clínica Patinhas",
    amount: 220.0,
    date: new Date("2024-04-20"),
    relatedReportId: "3",
    relatedClinicId: "1",
    paymentMethod: "bank_transfer",
    status: "completed",
  },
  {
    id: "6",
    type: "expense",
    category: "Transporte",
    description: "Combustível",
    amount: 100.0,
    date: new Date("2024-04-18"),
    status: "completed",
  },
  {
    id: "7",
    type: "income",
    category: "Laudo",
    description: "Pagamento de laudo - Hospital Amigo Fiel",
    amount: 200.0,
    date: new Date("2024-04-25"),
    relatedReportId: "4",
    relatedClinicId: "3",
    paymentMethod: "credit_card",
    status: "completed",
  },
  {
    id: "8",
    type: "income",
    category: "Laudo",
    description: "Pagamento de laudo - Cliente particular",
    amount: 300.0,
    date: new Date("2024-05-01"),
    relatedReportId: "5",
    relatedPatientId: "5",
    paymentMethod: "pix",
    status: "completed",
  },
  {
    id: "9",
    type: "expense",
    category: "Software",
    description: "Assinatura mensal do software de laudos",
    amount: 89.9,
    date: new Date("2024-05-01"),
    status: "completed",
  },
  {
    id: "10",
    type: "expense",
    category: "Transporte",
    description: "Uber para Pet Care",
    amount: 30.0,
    date: new Date("2024-04-15"),
    relatedClinicId: "2",
    status: "completed",
  },
]

// Dados simulados para planos
export const userPlans: UserPlan[] = [
  {
    id: "plan-1",
    name: "Básico",
    type: "basic",
    price: 99.9,
    billingCycle: "monthly",
    features: ["Laudos ilimitados", "5 modelos personalizados", "Exportação PDF"],
    maxReports: 100,
    maxPatients: 200,
    maxClinics: 1,
    includesSupport: false,
  },
  {
    id: "plan-2",
    name: "Padrão",
    type: "standard",
    price: 199.9,
    billingCycle: "monthly",
    features: ["Laudos ilimitados", "15 modelos personalizados", "Exportação PDF", "Compartilhamento por WhatsApp"],
    maxReports: 500,
    maxPatients: 1000,
    maxClinics: 3,
    includesSupport: true,
  },
  {
    id: "plan-3",
    name: "Premium",
    type: "premium",
    price: 299.9,
    billingCycle: "monthly",
    features: [
      "Laudos ilimitados",
      "Modelos ilimitados",
      "Exportação PDF",
      "Compartilhamento por WhatsApp",
      "Assinatura digital",
      "Suporte prioritário",
    ],
    maxReports: -1, // ilimitado
    maxPatients: -1, // ilimitado
    maxClinics: 10,
    includesSupport: true,
  },
  {
    id: "plan-4",
    name: "Empresarial",
    type: "enterprise",
    price: 599.9,
    billingCycle: "monthly",
    features: [
      "Laudos ilimitados",
      "Modelos ilimitados",
      "Exportação PDF",
      "Compartilhamento por WhatsApp",
      "Assinatura digital",
      "Suporte prioritário",
      "API de integração",
      "Múltiplos usuários",
    ],
    maxReports: -1, // ilimitado
    maxPatients: -1, // ilimitado
    maxClinics: -1, // ilimitado
    includesSupport: true,
  },
]

// Dados simulados para usuários administrativos
export const adminUsers: AdminUser[] = [
  {
    id: "user-1",
    name: "Dr. Ana Silva",
    email: "ana.silva@laudde.com",
    role: "admin",
    status: "active",
    subscriptionStatus: "active",
    planId: "plan-4",
    lastLogin: new Date("2024-05-14T10:30:00"),
    createdAt: new Date("2023-01-15"),
    phone: "(11) 98765-4321",
    profileImage: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "user-2",
    name: "Dr. Carlos Mendes",
    email: "carlos.mendes@laudde.com",
    role: "veterinarian",
    status: "active",
    subscriptionStatus: "active",
    planId: "plan-3",
    lastLogin: new Date("2024-05-13T14:45:00"),
    createdAt: new Date("2023-02-20"),
    phone: "(11) 97654-3210",
  },
  {
    id: "user-3",
    name: "Fernanda Oliveira",
    email: "fernanda.oliveira@clinicapet.com",
    role: "clinic_manager",
    status: "active",
    subscriptionStatus: "trial",
    planId: "plan-2",
    lastLogin: new Date("2024-05-10T09:15:00"),
    createdAt: new Date("2024-04-25"),
    phone: "(11) 91234-5678",
  },
  {
    id: "user-4",
    name: "Roberto Almeida",
    email: "roberto.almeida@vetcare.com",
    role: "veterinarian",
    status: "inactive",
    subscriptionStatus: "expired",
    planId: "plan-1",
    lastLogin: new Date("2024-03-20T16:30:00"),
    createdAt: new Date("2023-06-10"),
  },
  {
    id: "user-5",
    name: "Juliana Santos",
    email: "juliana.santos@petclinic.com",
    role: "assistant",
    status: "active",
    subscriptionStatus: "active",
    planId: "plan-2",
    lastLogin: new Date("2024-05-14T08:20:00"),
    createdAt: new Date("2023-09-05"),
  },
  {
    id: "user-6",
    name: "Marcelo Costa",
    email: "marcelo.costa@vetplus.com",
    role: "veterinarian",
    status: "suspended",
    subscriptionStatus: "canceled",
    planId: "plan-3",
    lastLogin: new Date("2024-04-01T11:45:00"),
    createdAt: new Date("2023-05-15"),
    phone: "(11) 98888-7777",
  },
  {
    id: "user-7",
    name: "Patrícia Lima",
    email: "patricia.lima@animalscare.com",
    role: "veterinarian",
    status: "active",
    subscriptionStatus: "active",
    planId: "plan-3",
    lastLogin: new Date("2024-05-12T13:10:00"),
    createdAt: new Date("2023-07-22"),
  },
  {
    id: "user-8",
    name: "Lucas Ferreira",
    email: "lucas.ferreira@vetclinic.com",
    role: "veterinarian",
    status: "active",
    subscriptionStatus: "pending",
    planId: "plan-1",
    lastLogin: null,
    createdAt: new Date("2024-05-01"),
  },
]

// Função auxiliar para obter plano por ID
export const getPlanById = (id: string): UserPlan | undefined => {
  return userPlans.find((plan) => plan.id === id)
}

// Função auxiliar para obter usuário por ID
export const getAdminUserById = (id: string): AdminUser | undefined => {
  return adminUsers.find((user) => user.id === id)
}

// Funções auxiliares
export const getPatientById = (id: string): Patient | undefined => {
  return patients.find((patient) => patient.id === id)
}

export const getClinicById = (id: string): Clinic | undefined => {
  return clinics.find((clinic) => clinic.id === id)
}

export const getReportById = (id: string): Report | undefined => {
  return reports.find((report) => report.id === id)
}

export const getRecentPatients = (
  limit = 5,
): Array<{
  patient: Patient
  clinic: Clinic
}> => {
  const recentReports = [...reports].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, limit)

  return recentReports.map((report) => {
    const patient = getPatientById(report.patientId)!
    const clinic = getClinicById(report.clinicId)!
    return { patient, clinic }
  })
}

export const getMonthlyReportCount = (): number => {
  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

  return reports.filter((report) => report.createdAt >= startOfMonth && report.status === "completed").length
}

export const getMonthlyRevenue = (): number => {
  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

  return payments
    .filter((payment) => payment.date >= startOfMonth && payment.status === "paid")
    .reduce((total, payment) => total + payment.amount, 0)
}

export const getMonthlyExpenses = (): number => {
  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

  return financialTransactions
    .filter(
      (transaction) =>
        transaction.date >= startOfMonth && transaction.type === "expense" && transaction.status === "completed",
    )
    .reduce((total, transaction) => total + transaction.amount, 0)
}

export const getMonthlyProfit = (): number => {
  return getMonthlyRevenue() - getMonthlyExpenses()
}

export const getMonthlyRevenueBySource = (): {
  clinic: number
  individual: number
} => {
  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

  const monthlyPayments = payments.filter((payment) => payment.date >= startOfMonth && payment.status === "paid")

  return {
    clinic: monthlyPayments
      .filter((payment) => payment.source === "clinic")
      .reduce((total, payment) => total + payment.amount, 0),
    individual: monthlyPayments
      .filter((payment) => payment.source === "individual")
      .reduce((total, payment) => total + payment.amount, 0),
  }
}

export const generateReportCode = (): string => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let result = ""
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export const getExamPrice = (type: "ultrasound" | "x-ray", category?: ExamCategory): number => {
  if (!category) return 0

  if (type === "ultrasound") {
    return examPrices.ultrasound[category as UltrasoundCategory] || 0
  } else {
    return examPrices.x_ray[category as XRayCategory] || 0
  }
}
