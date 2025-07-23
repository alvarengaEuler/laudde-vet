// lib/store/templateVariables.ts
import { create } from 'zustand'

type VariableMap = Record<string, string>

interface TemplateVariableState {
  variables: VariableMap
  setVariable: (key: string, value: string) => void
  setManyVariables: (vars: VariableMap) => void
  clearVariables: () => void
}

export const useTemplateVariables = create<TemplateVariableState>((set) => ({
  variables: {},
  setVariable: (key, value) =>
    set((state) => ({
      variables: {
        ...state.variables,
        [key]: value,
      },
    })),
  setManyVariables: (vars) => set(() => ({ variables: vars })),
  clearVariables: () => set({ variables: {} }),
}))
