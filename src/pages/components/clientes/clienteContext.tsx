import { createContext, useEffect, useState } from 'react'
import { api } from '../../../services/api'
interface ClientesTypes {
  cpf: string
  nome: string
  dtNasc: Date
  email: string
  telefone: string
  ocupacao: string
  sexo: string
  cep: string
  estadoCivil: string
}
interface ClienteProviderProps {
  children: React.ReactNode
}

export const ClienteContext = createContext<ClientesTypes[]>([])
export function ClienteProvider({ children }: ClienteProviderProps) {
  const [clientes, setClientes] = useState<ClientesTypes[]>([])
  useEffect(() => {
    api.get('clientes').then((response) => setClientes(response.data.clientes))
  }, [])
  return (
    <ClienteContext.Provider value={clientes}>
      {children}
    </ClienteContext.Provider>
  )
}
