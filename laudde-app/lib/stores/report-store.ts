'use client'

import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import type { Model, Field } from '@/lib/mocks/types'
import { mockModels } from '@/lib/mocks/mock-data'

interface ModelStore {
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
}

export const useModelStore = create<ModelStore>()((set) => ({
  models: mockModels,

  createModel: (model) => {
    const newModel: Model = {
      id: model.id || uuidv4(),
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
    console.log('Adding field with type:', type)
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
    console.log('addFieldsFromVeterinaryTemplate ')
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
}))
