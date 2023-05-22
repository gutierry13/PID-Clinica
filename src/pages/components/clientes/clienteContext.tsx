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
  updateCliente: (cliente: ClientesTypes) => Promise<void>
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
  async function updateCliente(clienteInput: ClientesTypes) {
    await api.patch(`/clientes/${clienteInput.cpf}`, clienteInput)

    clientes.forEach((cliente) => {
      if (cliente.cpf === clienteInput.cpf) {
        cliente.nome = clienteInput.nome
        cliente.dtNasc = clienteInput.dtNasc
        cliente.email = clienteInput.email
        cliente.telefone = clienteInput.telefone
        cliente.ocupacao = clienteInput.ocupacao
        cliente.sexo = clienteInput.sexo
        cliente.cep = clienteInput.cep
        cliente.estadoCivil = clienteInput.estadoCivil
      }
    })
  }
  return (
    <ClienteContext.Provider value={{ clientes, createCliente, updateCliente }}>
      {children}
    </ClienteContext.Provider>
  )
}
