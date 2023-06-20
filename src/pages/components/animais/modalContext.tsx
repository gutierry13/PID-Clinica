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
  changeSelectedClient: (cliente: string) => void
}
export const ModalContext = createContext({} as ModalContextType)
export function AnimalModalProvider({ children }: ModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedClient, setClienteSelecionado] = useState('')
  function changeSelectedClient(client: string) {
    setClienteSelecionado(client)
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
        changeSelectedClient,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
