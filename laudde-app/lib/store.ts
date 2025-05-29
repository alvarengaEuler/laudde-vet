'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { mockModels } from './mocks/mock-data'
import { Field, Model } from './mocks/types'

interface ModelStore {
  models: Model[]
  createModel: () => Model
  updateModel: (id: string, updates: Partial<Model>) => void
  deleteModel: (id: string) => void
  addField: (modelId: string) => void
  addFieldWithType: (modelId: string, type: 'textarea' | 'number' | 'table') => void
  updateField: (modelId: string, fieldId: string, updates: Partial<Field>) => void
  removeField: (modelId: string, fieldId: string) => void
  reorderFields: (modelId: string, fields: Field[]) => void
  setFieldsFromTemplate: (modelId: string, templateFields: Omit<Field, 'id'>[]) => void
}

export const useModelStore = create<ModelStore>()(
  persist(
    (set, get) => ({
      models: mockModels,

      createModel: () => {
        const newModel: Model = {
          id: uuidv4(),
          name: 'Novo Modelo',
          createdAt: new Date(),
          updatedAt: new Date(),
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
            model.id === id ? { ...model, ...updates, updatedAt: new Date() } : model
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
                  updatedAt: new Date(),
                }
              : model
          ),
        }))
      },

      addFieldWithType: (modelId, type) => {
        const fieldNames = {
          textarea: 'Campo de Texto',
          number: 'Campo Numérico',
          table: 'Tabela',
        }

        const newField: Field = {
          id: uuidv4(),
          name: fieldNames[type],
          type,
          required: false,
        }

        // Se for tabela, adicionar configuração padrão
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
                  updatedAt: new Date(),
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
                  updatedAt: new Date(),
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
                  updatedAt: new Date(),
                }
              : model
          ),
        }))
      },

      reorderFields: (modelId, fields) => {
        set((state) => ({
          models: state.models.map((model) =>
            model.id === modelId ? { ...model, fields, updatedAt: new Date() } : model
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
            model.id === modelId ? { ...model, fields: newFields, updatedAt: new Date() } : model
          ),
        }))
      },
    }),
    {
      name: 'veterinary-models-storage',
    }
  )
)
