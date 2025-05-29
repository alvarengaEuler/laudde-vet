import type { Field } from './types'

export const examTemplates: Record<string, { name: string; fields: Omit<Field, 'id'>[] }> = {
  gestacional: {
    name: 'Exame Gestacional',
    fields: [
      {
        name: 'Útero',
        type: 'textarea',
        defaultDescription: 'Avaliação do útero gestante',
        required: true,
        templateContent: 'Útero gravídico com feto viável',
      },
      {
        name: 'Feto',
        type: 'textarea',
        defaultDescription: 'Condições do feto',
        required: true,
        templateContent: 'Feto em posição normal, batimentos cardíacos presentes',
      },
      {
        name: 'Idade Gestacional',
        type: 'number',
        defaultDescription: 'Idade gestacional em dias',
        required: true,
        templateContent: '180',
      },
      {
        name: 'Líquido Amniótico',
        type: 'textarea',
        defaultDescription: 'Avaliação do líquido amniótico',
        required: false,
        templateContent: 'Líquido amniótico em quantidade normal',
      },
      {
        name: 'Placenta',
        type: 'textarea',
        defaultDescription: 'Condições da placenta',
        required: false,
        templateContent: 'Placenta com aspecto normal',
      },
    ],
  },
  oftalmologico: {
    name: 'Exame Oftalmológico',
    fields: [
      {
        name: 'Córnea',
        type: 'textarea',
        defaultDescription: 'Avaliação da córnea',
        required: true,
        templateContent: 'Córnea transparente, sem lesões',
      },
      {
        name: 'Cristalino',
        type: 'textarea',
        defaultDescription: 'Avaliação do cristalino',
        required: true,
        templateContent: 'Cristalino transparente',
      },
      {
        name: 'Retina',
        type: 'textarea',
        defaultDescription: 'Avaliação da retina',
        required: true,
        templateContent: 'Retina com aspecto normal',
      },
      {
        name: 'Pressão Intraocular',
        type: 'table',
        defaultDescription: 'Medições da pressão intraocular',
        required: false,
        tableContent:
          '{"headers": ["Olho", "Pressão (mmHg)", "Observações"], "rows": [["Direito", "15", "Normal"], ["Esquerdo", "16", "Normal"]]}',
      },
    ],
  },
  femea: {
    name: 'Exame Reprodutivo Fêmea',
    fields: [
      {
        name: 'Ovários',
        type: 'textarea',
        defaultDescription: 'Avaliação dos ovários',
        required: true,
        templateContent: 'Ovários com tamanho e aspecto normais',
      },
      {
        name: 'Útero',
        type: 'textarea',
        defaultDescription: 'Avaliação do útero',
        required: true,
        templateContent: 'Útero com aspecto normal',
      },
      {
        name: 'Cérvix',
        type: 'textarea',
        defaultDescription: 'Avaliação do cérvix',
        required: false,
        templateContent: 'Cérvix fechado, aspecto normal',
      },
      {
        name: 'Vagina',
        type: 'textarea',
        defaultDescription: 'Avaliação da vagina',
        required: false,
        templateContent: 'Vagina com mucosa normal',
      },
    ],
  },
  macho: {
    name: 'Exame Reprodutivo Macho',
    fields: [
      {
        name: 'Testículos',
        type: 'textarea',
        defaultDescription: 'Avaliação dos testículos',
        required: true,
        templateContent: 'Testículos com tamanho e consistência normais',
      },
      {
        name: 'Epidídimos',
        type: 'textarea',
        defaultDescription: 'Avaliação dos epidídimos',
        required: true,
        templateContent: 'Epidídimos com aspecto normal',
      },
      {
        name: 'Próstata',
        type: 'textarea',
        defaultDescription: 'Avaliação da próstata',
        required: false,
        templateContent: 'Próstata com tamanho e aspecto normais',
      },
      {
        name: 'Pênis',
        type: 'textarea',
        defaultDescription: 'Avaliação do pênis',
        required: false,
        templateContent: 'Pênis com aspecto normal',
      },
    ],
  },
  cervical: {
    name: 'Exame Cervical',
    fields: [
      {
        name: 'Cérvix',
        type: 'textarea',
        defaultDescription: 'Avaliação do cérvix',
        required: true,
        templateContent: 'Cérvix com aspecto normal',
      },
      {
        name: 'Citologia',
        type: 'textarea',
        defaultDescription: 'Resultado da citologia',
        required: true,
        templateContent: 'Citologia dentro dos padrões normais',
      },
      {
        name: 'Colposcopia',
        type: 'textarea',
        defaultDescription: 'Achados da colposcopia',
        required: false,
        templateContent: 'Colposcopia sem alterações',
      },
    ],
  },
}
