import type { Model } from './types'

export const mockModels: Model[] = [
  {
    id: '1',
    name: 'Exame Gestacional Bovino',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
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
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-12'),
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
