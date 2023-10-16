import React, { useState } from 'react'
import { createContext } from 'use-context-selector'
interface ModalProviderProps {
  children: React.ReactNode
}
type selectedClient = {
  codigo: string
  animalID: {
    codigo: string
    nome: string
    raca: string
    especie: {
      codigo: string
      nome: string
    }
    sexo: string
    peso: string
    idade: string
    cor: string
    porte: string
    saude: string
  }
  clienteCPF: {
    cpf: string
    nome: string
    dtNascimento: string
    email: string
    telefone: string
    ocupacao: string
    sexo: string
    estadoCivil: string
    cep: string
  }
  funcionarioCPF: [
    {
      cpf: string
      nome: string
      dataNascimento: string
      funcao: string
      setor: string
      email: string
      telefone: string
      ocupacao: string
      estadoCivil: string
      cep: string
      dataContratacao: string
      sexo: string
    },
  ]
  data: string
  motivo: string
  diagnostico: string
  medicamento: string
  tratamento: string
  observacao: string
}
interface ModalContextType {
  OpenModal: () => void
  CloseModal: () => void
  OpenCardModal: (consulta: {}) => void
  CloseCardModal: () => void
  isCardOpen: boolean
  isModalOpen: boolean
  selectedClient: selectedClient
  changeSelectedConsulta: (cliente: string) => void
}
export const ModalContext = createContext({} as ModalContextType)
export function ConsultaModalProvider({ children }: ModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCardOpen, setIsCardOpen] = useState(false)
  const [selectedClient, setClienteSelecionado] = useState({} as selectedClient)
  function changeSelectedConsulta(consulta) {
    setClienteSelecionado(consulta)
  }
  function OpenModal() {
    setIsModalOpen(true)
  }
  function OpenCardModal(consulta: {}) {
    setIsCardOpen(true)
    setClienteSelecionado(consulta)
  }
  function CloseCardModal() {
    setIsCardOpen(false)
  }
  function CloseModal() {
    setIsModalOpen(false)
  }
  return (
    <ModalContext.Provider
      value={{
        OpenModal,
        CloseModal,
        OpenCardModal,
        isCardOpen,
        CloseCardModal,
        isModalOpen,
        selectedClient,
        changeSelectedConsulta,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
