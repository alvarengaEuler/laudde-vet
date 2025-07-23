'use client'

import { create } from 'zustand'
// import { persist } from 'zustand/middleware'
import type {
  Model,
  Field,
  Report,
  ReportField,
  ReportImage,
  HeaderData,
  FooterData,
} from './mocks/types'
import { mockModels } from './mocks/mock-data'
import { mockReports } from './mocks/mock-reports'
import { v4 as uuidv4 } from 'uuid'

interface ModelStore {
  // Models
  models: Model[]
  createModel: (model: Model) => Model
  updateModel: (id: string, updates: Partial<Model>) => void
  deleteModel: (id: string) => void
  addField: (modelId: string) => void
  addFieldWithType: (modelId: string, type: 'textarea' | 'number' | 'table') => void
  addFieldsFromVeterinaryTemplate: (modelId: string, templateFields: Omit<Field, 'id'>[]) => void
  updateField: (modelId: string, fieldId: string, updates: Partial<Field>) => void
  removeField: (modelId: string, fieldId: string) => void
  reorderFields: (modelId: string, fields: Field[]) => void
  setFieldsFromTemplate: (modelId: string, templateFields: Omit<Field, 'id'>[]) => void

  // Reports
  reports: Report[]
  createReport: (modelId: string) => Report
  createReportFromModel: (modelId: string) => Report
  updateReport: (id: string, updates: Partial<Report>) => void
  deleteReport: (id: string) => void
  updateReportField: (reportId: string, fieldId: string, updates: Partial<ReportField>) => void
  addReportImage: (reportId: string, image: Omit<ReportImage, 'id'>) => void
  removeReportImage: (reportId: string, imageId: string) => void
  publishReport: (reportId: string) => void
  getReportByAccessCode: (accessCode: string) => Report | undefined
}

export const useModelStore = create<ModelStore>()(
  (set, get) => ({
    models: mockModels,
    reports: mockReports,

    // Model methods
    createModel: (model) => {
      const newModel: Model = {
        id: uuidv4(),
        name: model.name || 'Novo Modelo',
        createdAt: model.createdAt,
        updatedAt: model.updatedAt,

        fields: [],
      }

      set((state) => ({
        models: [...state.models, newModel],
      }))

      return newModel
    },

    updateModel: (id, updates) => {
      set((state) => ({
        models: state.models.map((model) =>
          model.id === id ? { ...model, ...updates, updatedAt: new Date().toDateString() } : model
        ),
      }))
    },

    deleteModel: (id) => {
      set((state) => ({
        models: state.models.filter((model) => model.id !== id),
      }))
    },

    addField: (modelId) => {
      const newField: Field = {
        id: uuidv4(),
        name: 'Novo Campo',
        type: 'textarea',
        required: false,
      }

      set((state) => ({
        models: state.models.map((model) =>
          model.id === modelId
            ? {
                ...model,
                fields: [...model.fields, newField],
                updatedAt: new Date().toDateString(),
              }
            : model
        ),
      }))
    },

    addFieldWithType: (modelId, type) => {
      const fieldNames = {
        textarea: 'Campo Descrição da Estrutura',
        number: 'Campo Numérico',
        table: 'Campo de Tabela',
      }

      const newField: Field = {
        id: uuidv4(),
        name: fieldNames[type],
        type,
        required: false,
      }

      if (type === 'table') {
        newField.tableContent = JSON.stringify({
          headers: ['Coluna 1', 'Coluna 2'],
          rows: [['Valor 1', 'Valor 2']],
        })
      }

      set((state) => ({
        models: state.models.map((model) =>
          model.id === modelId
            ? {
                ...model,
                fields: [...model.fields, newField],
                updatedAt: new Date().toDateString(),
              }
            : model
        ),
      }))
    },

    addFieldsFromVeterinaryTemplate: (modelId, templateFields) => {
      const newFields: Field[] = templateFields.map((field) => ({
        ...field,
        id: uuidv4(),
      }))

      set((state) => ({
        models: state.models.map((model) =>
          model.id === modelId
            ? {
                ...model,
                fields: [...model.fields, ...newFields],
                updatedAt: new Date().toDateString(),
              }
            : model
        ),
      }))
    },

    updateField: (modelId, fieldId, updates) => {
      set((state) => ({
        models: state.models.map((model) =>
          model.id === modelId
            ? {
                ...model,
                fields: model.fields.map((field) =>
                  field.id === fieldId ? { ...field, ...updates } : field
                ),
                updatedAt: new Date().toDateString(),
              }
            : model
        ),
      }))
    },

    removeField: (modelId, fieldId) => {
      set((state) => ({
        models: state.models.map((model) =>
          model.id === modelId
            ? {
                ...model,
                fields: model.fields.filter((field) => field.id !== fieldId),
                updatedAt: new Date().toDateString(),
              }
            : model
        ),
      }))
    },

    reorderFields: (modelId, fields) => {
      set((state) => ({
        models: state.models.map((model) =>
          model.id === modelId ? { ...model, fields, updatedAt: new Date().toDateString() } : model
        ),
      }))
    },

    setFieldsFromTemplate: (modelId, templateFields) => {
      const newFields: Field[] = templateFields.map((field) => ({
        ...field,
        id: uuidv4(),
      }))

      set((state) => ({
        models: state.models.map((model) =>
          model.id === modelId
            ? { ...model, fields: newFields, updatedAt: new Date().toDateString() }
            : model
        ),
      }))
    },

    // Report methods
    createReport: (modelId) => {
      const model = get().models.find((m) => m.id === modelId)

      if (!model) {
        throw new Error('Modelo não encontrado')
      }

      const newReport: Report = {
        id: uuidv4(),
        name: `Laudo - ${model.name}`,
        modelId,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'draft',
        accessCode: generateAccessCode(),
        headerData: model.headerData || getDefaultHeaderData(),
        footerData: model.footerData || getDefaultFooterData(),
        fields: [],
        images: [],
      }

      set((state) => ({
        reports: [...state.reports, newReport],
      }))

      return newReport
    },

    createReportFromModel: (modelId) => {
      const model = get().models.find((m) => m.id === modelId)

      if (!model) {
        throw new Error('Modelo não encontrado')
      }

      // Converter campos do modelo para campos do laudo
      const reportFields: ReportField[] = model.fields.map((field) => ({
        id: uuidv4(),
        name: field.name,
        type: field.type,
        description: field.defaultDescription,
        descriptionAlignment: field.descriptionAlignment,
        content: field.templateContent || '',
        tableContent: field.tableContent,
      }))

      const newReport: Report = {
        id: uuidv4(),
        name: `Laudo - ${model.name}`,
        modelId,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'draft',
        accessCode: generateAccessCode(),
        headerData: model.headerData || getDefaultHeaderData(),
        footerData: model.footerData || getDefaultFooterData(),
        fields: reportFields,
        images: [],
      }

      set((state) => ({
        reports: [...state.reports, newReport],
      }))

      return newReport
    },

    updateReport: (id, updates) => {
      set((state) => ({
        reports: state.reports.map((report) =>
          report.id === id ? { ...report, ...updates, updatedAt: new Date() } : report
        ),
      }))
    },

    deleteReport: (id) => {
      set((state) => ({
        reports: state.reports.filter((report) => report.id !== id),
      }))
    },

    updateReportField: (reportId, fieldId, updates) => {
      set((state) => ({
        reports: state.reports.map((report) =>
          report.id === reportId
            ? {
                ...report,
                fields: report.fields.map((field) =>
                  field.id === fieldId ? { ...field, ...updates } : field
                ),
                updatedAt: new Date(),
              }
            : report
        ),
      }))
    },

    addReportImage: (reportId, image) => {
      const newImage: ReportImage = {
        ...image,
        id: uuidv4(),
      }

      set((state) => ({
        reports: state.reports.map((report) =>
          report.id === reportId
            ? {
                ...report,
                images: [...report.images, newImage],
                updatedAt: new Date(),
              }
            : report
        ),
      }))
    },

    removeReportImage: (reportId, imageId) => {
      set((state) => ({
        reports: state.reports.map((report) =>
          report.id === reportId
            ? {
                ...report,
                images: report.images.filter((image) => image.id !== imageId),
                updatedAt: new Date(),
              }
            : report
        ),
      }))
    },

    publishReport: (reportId) => {
      set((state) => ({
        reports: state.reports.map((report) =>
          report.id === reportId
            ? {
                ...report,
                status: 'published',
                updatedAt: new Date(),
              }
            : report
        ),
      }))
    },

    getReportByAccessCode: (accessCode) => {
      return get().reports.find(
        (report) => report.accessCode === accessCode && report.status === 'published'
      )
    },
  })
  // {
  //   name: 'veterinary-models-storage',
  //   // Add this hydration function to convert date strings back to Date objects
  //   deserialize: (str) => {
  //     const parsed = JSON.parse(str)

  //     // Convert date strings back to Date objects for models
  //     if (parsed.state && parsed.state.models) {
  //       parsed.state.models = parsed.state.models.map((model) => ({
  //         ...model,
  //         createdAt: model.createdAt,
  //         updatedAt: model.updatedAt,
  //       }))
  //     }

  //     // Convert date strings back to Date objects for reports
  //     if (parsed.state && parsed.state.reports) {
  //       parsed.state.reports = parsed.state.reports.map((report) => ({
  //         ...report,
  //         createdAt: report.createdAt,
  //         updatedAt: report.updatedAt,
  //       }))
  //     }

  //     return parsed
  //   },
  // }
)

function generateAccessCode(): string {
  // Gera um código de acesso de 8 caracteres alfanuméricos
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let code = ''
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

function getDefaultHeaderData(): HeaderData {
  return {
    clinic: {
      name: '',
      cnpj: '',
      phone: '',
      email: '',
    },
    patient: {
      enabled: true,
      name: '',
      species: '',
      breed: '',
      age: '',
      sex: '',
      weight: '',
    },
    owner: {
      enabled: true,
      name: '',
      cpf: '',
      phone: '',
      email: '',
    },
    exam: {
      enabled: true,
      date: '',
      type: '',
      veterinarian: '',
      requestingVet: '',
    },
  }
}

function getDefaultFooterData(): FooterData {
  return {
    responsible: {
      name: '',
      crmv: '',
      specialization: '',
      phone: '',
    },
    address: {
      full: '',
      city: '',
      state: '',
    },
    social: {
      instagram: '',
      facebook: '',
      website: '',
      whatsapp: '',
    },
  }
}
