import React, { useState } from 'react'
import { createContext } from 'use-context-selector'
interface ModalProviderProps {
  children: React.ReactNode
}
interface ModalContextType {
  OpenModal: () => void
  CloseModal: () => void
  isModalOpen: boolean
  selectedAdocao: {}
  changeSelectedAdocao: (adocao: string) => void
}
export const ModalContext = createContext({} as ModalContextType)
export function AdocaoModalProvider({ children }: ModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedAdocao, setSelectedAdocao] = useState('')
  function changeSelectedAdocao(adocao: string) {
    setSelectedAdocao(adocao)
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
        selectedAdocao,
        changeSelectedAdocao,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
