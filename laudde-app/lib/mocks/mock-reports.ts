import type { Report } from './types'

export const mockReports: Report[] = [
  {
    id: 'r1',
    name: 'Laudo - Exame Gestacional Bovino',
    modelId: '1',
    createdAt: new Date('2024-05-15'),
    updatedAt: new Date('2024-05-15'),
    status: 'published',
    accessCode: 'ABC12345',
    headerData: {
      clinic: {
        name: 'Clínica Veterinária PetSaúde',
        cnpj: '12.345.678/0001-90',
        phone: '(11) 3456-7890',
        email: 'contato@petsaude.com',
      },
      patient: {
        enabled: true,
        name: 'Mimosa',
        species: 'Bovino',
        breed: 'Nelore',
        age: '4 anos',
        sex: 'Fêmea',
        weight: '450kg',
      },
      owner: {
        enabled: true,
        name: 'João da Silva',
        cpf: '123.456.789-00',
        phone: '(11) 98765-4321',
        email: 'joao@fazenda.com',
      },
      exam: {
        enabled: true,
        date: '2024-05-15',
        type: 'Ultrassonografia Gestacional',
        veterinarian: 'Dra. Ana Souza - CRMV-SP 12345',
        requestingVet: 'Dr. Carlos Mendes - CRMV-SP 54321',
      },
    },
    footerData: {
      responsible: {
        name: 'Dra. Ana Souza',
        crmv: 'CRMV-SP 12345',
        specialization: 'Especialista em Reprodução Animal',
        phone: '(11) 98888-7777',
      },
      address: {
        full: 'Av. dos Animais, 1234 - Centro, São Paulo - SP, 01234-567',
        city: 'São Paulo',
        state: 'SP',
      },
      social: {
        instagram: '@clinicapetsaude',
        facebook: 'facebook.com/clinicapetsaude',
        website: 'www.petsaude.com.br',
        whatsapp: '(11) 98888-7777',
      },
    },
    fields: [
      {
        id: 'rf1-1',
        name: 'Útero',
        type: 'textarea',
        description: 'Avaliação do útero gestante',
        content:
          'Útero gravídico com feto viável. Paredes uterinas com espessura normal e boa vascularização.',
      },
      {
        id: 'rf1-2',
        name: 'Feto',
        type: 'textarea',
        description: 'Condições do feto',
        content:
          'Feto em posição normal, batimentos cardíacos presentes e regulares (150 bpm). Movimentação fetal ativa.',
      },
      {
        id: 'rf1-3',
        name: 'Idade Gestacional',
        type: 'number',
        description: 'Idade gestacional em dias',
        content: '180',
      },
      {
        id: 'rf1-4',
        name: 'Placenta',
        type: 'textarea',
        description: 'Avaliação da placenta',
        content: 'Placenta com inserção normal, espessura adequada e vascularização preservada.',
      },
    ],
    images: [
      {
        id: 'img1-1',
        name: 'Ultrassom Fetal',
        url: '/placeholder.svg?height=300&width=400',
        description: 'Imagem do feto com 180 dias de gestação',
      },
      {
        id: 'img1-2',
        name: 'Batimentos Cardíacos',
        url: '/placeholder.svg?height=300&width=400',
        description: 'Registro dos batimentos cardíacos fetais',
      },
    ],
  },
  {
    id: 'r2',
    name: 'Laudo - Exame Oftalmológico',
    modelId: '2',
    createdAt: new Date('2024-05-10'),
    updatedAt: new Date('2024-05-10'),
    status: 'draft',
    accessCode: 'XYZ98765',
    headerData: {
      clinic: {
        name: 'Clínica Veterinária PetSaúde',
        cnpj: '12.345.678/0001-90',
        phone: '(11) 3456-7890',
        email: 'contato@petsaude.com',
      },
      patient: {
        enabled: true,
        name: 'Rex',
        species: 'Canino',
        breed: 'Golden Retriever',
        age: '6 anos',
        sex: 'Macho',
        weight: '32kg',
      },
      owner: {
        enabled: true,
        name: 'Maria Oliveira',
        cpf: '987.654.321-00',
        phone: '(11) 91234-5678',
        email: 'maria@email.com',
      },
      exam: {
        enabled: true,
        date: '2024-05-10',
        type: 'Exame Oftalmológico',
        veterinarian: 'Dr. Pedro Santos - CRMV-SP 67890',
        requestingVet: 'Dra. Lucia Ferreira - CRMV-SP 09876',
      },
    },
    footerData: {
      responsible: {
        name: 'Dr. Pedro Santos',
        crmv: 'CRMV-SP 67890',
        specialization: 'Oftalmologia Veterinária',
        phone: '(11) 97777-6666',
      },
      address: {
        full: 'Av. dos Animais, 1234 - Centro, São Paulo - SP, 01234-567',
        city: 'São Paulo',
        state: 'SP',
      },
      social: {
        instagram: '@clinicapetsaude',
        facebook: 'facebook.com/clinicapetsaude',
        website: 'www.petsaude.com.br',
        whatsapp: '(11) 97777-6666',
      },
    },
    fields: [
      {
        id: 'rf2-1',
        name: 'Córnea',
        type: 'textarea',
        description: 'Avaliação da córnea',
        content:
          'Córnea transparente, sem lesões em ambos os olhos. Teste de fluoresceína negativo.',
      },
      {
        id: 'rf2-2',
        name: 'Cristalino',
        type: 'textarea',
        description: 'Avaliação do cristalino',
        content:
          'Cristalino transparente em OD. Presença de opacidade inicial em OS, compatível com catarata incipiente.',
      },
      {
        id: 'rf2-3',
        name: 'Pressão Intraocular',
        type: 'table',
        description: 'Medições da pressão intraocular',
        tableContent:
          '{"headers": ["Olho", "Pressão (mmHg)", "Observações"], "rows": [["Direito", "18", "Normal"], ["Esquerdo", "19", "Normal"]]}',
      },
    ],
    images: [
      {
        id: 'img2-1',
        name: 'Olho Direito',
        url: '/placeholder.svg?height=300&width=400',
        description: 'Imagem do olho direito',
      },
    ],
  },
]
