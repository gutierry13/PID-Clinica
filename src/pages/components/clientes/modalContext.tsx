import React, { createContext, useState } from 'react'

interface ModalProviderProps {
  children: React.ReactNode
}
interface ModalContextType {
  OpenModal: () => void
  CloseModal: () => void
  isModalOpen: boolean
  clienteSelecionado: {}
  changeSelectedClient: (cliente: string) => void
}
export const ModalContext = createContext({} as ModalContextType)
export function ModalProvider({ children }: ModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [clienteSelecionado, setClienteSelecionado] = useState('')
  // const [clienteSelecionado, setClienteSelecionado] = useState(null)
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
        clienteSelecionado,
        changeSelectedClient,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
