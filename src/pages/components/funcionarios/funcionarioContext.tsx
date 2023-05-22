import { createContext, useEffect, useState } from 'react'
import { api } from '../../../services/api'
interface Funcionario {
  cpf: string
  nome: string
  dtNasc: Date
  funcao: string
  setor: string
  email: string
  telefone: string
  ocupacao: string
  estadoCivil: string
  cep: string
  dtContratacao: Date
  sexo: string
}
interface FuncionarioProviderProps {
  children: React.ReactNode
}
export const FuncionarioContext = createContext<Funcionario[]>([])
export function FuncionarioProvider({ children }: FuncionarioProviderProps) {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([])
  useEffect(() => {
    api
      .get('funcionarios')
      .then((response) => setFuncionarios(response.data.funcionarios))
  }, [])
  return (
    <FuncionarioContext.Provider value={funcionarios}>
      {children}
    </FuncionarioContext.Provider>
  )
}
