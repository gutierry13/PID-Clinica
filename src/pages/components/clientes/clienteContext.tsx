import { createContext, useEffect, useState } from 'react'
import { api } from '../../../services/api'
interface ClientesTypes {
  cpf: string
  nome: string
  dtNasc: Date | string
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
interface ClientesContextData {
  clientes: ClientesTypes[]
  createCliente: (cliente: ClientesTypes) => Promise<void>
}
export const ClienteContext = createContext<ClientesContextData>(
  {} as ClientesContextData
)
export function ClienteProvider({ children }: ClienteProviderProps) {
  const [clientes, setClientes] = useState<ClientesTypes[]>([])
  useEffect(() => {
    api.get('clientes').then((response) => setClientes(response.data.clientes))
  }, [])
  async function createCliente(clienteInput: ClientesTypes) {
    const response = await api.post('/clientes', clienteInput)
    const { cliente } = response.data
    setClientes([...clientes, cliente])
  }
  return (
    <ClienteContext.Provider value={{ clientes, createCliente }}>
      {children}
    </ClienteContext.Provider>
  )
}
