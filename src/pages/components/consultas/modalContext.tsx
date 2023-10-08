import React, { useState } from 'react'
import { createContext } from 'use-context-selector'
interface ModalProviderProps {
  children: React.ReactNode
}
interface ModalContextType {
  OpenModal: () => void
  CloseModal: () => void
  isModalOpen: boolean
  selectedClient: {}
  changeSelectedConsulta: (cliente: string) => void
}
export const ModalContext = createContext({} as ModalContextType)
export function ConsultaModalProvider({ children }: ModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedClient, setClienteSelecionado] = useState('')
  function changeSelectedConsulta(consulta: string) {
    setClienteSelecionado(consulta)
  }
  function OpenModal() {
    setIsModalOpen(true)
  }
  function CloseModal() {
    setIsModalOpen(false)
  }
  return (
    <ModalContext.Provider
      value={{
        OpenModal,
        CloseModal,
        isModalOpen,
        selectedClient,
        changeSelectedConsulta,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
