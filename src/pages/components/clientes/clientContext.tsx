import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../../../services/api'
interface ClientsTypes {
  cpf: string
  nome: string
  dtNascimento: Date | string
  email: string
  telefone: string
  ocupacao: string
  sexo: string
  estadoCivil: string
  cep: string
}
interface ClientProviderProps {
  children: ReactNode
}
interface ClientsContextData {
  clients: ClientsTypes[]
  createClient: (client: ClientsTypes) => Promise<void>
  updateClient: (client: ClientsTypes) => Promise<void>
  deleteClient: (clientCpf: String) => Promise<void>
  searchClient: (clientCpf: String) => Promise<void>
  setAlertMessageBoxInfo: (alertMessageBoxInfo: any) => void
  alertMessageBoxInfo: {
    visible: boolean
    alertType: string
    content: string
  }
}
export const ClientContext = createContext<ClientsContextData>(
  {} as ClientsContextData,
)
export function ClientProvider({ children }: ClientProviderProps) {
  const [alertMessageBoxInfo, setAlertMessageBoxInfo] = useState({
    visible: false,
    alertType: '',
    content: '',
  })
  const [clients, setClients] = useState<ClientsTypes[]>([])
  useEffect(() => {
    api.get('/clientes').then((response) => setClients(response.data))
  }, [])
  const searchClient = useCallback(async (clientCpf: String) => {
    if (clientCpf && clientCpf !== '') {
      const response = await api.get(`/clientes/${clientCpf}`)
      setClients(response.data)
    } else {
      api.get('/clientes').then((response) => setClients(response.data))
    }
  }, [])
  const createClient = useCallback(
    async (clientInput: ClientsTypes) => {
      try {
        const response = await api.post('/clientes', clientInput)
        const { data } = response.config
        setAlertMessageBoxInfo({
          visible: true,
          alertType: response.data.status ? 'success' : 'error',
          content: response.data.mensagem,
        })
        setClients([...clients, JSON.parse(data)])
      } catch (error: any) {
        setAlertMessageBoxInfo({
          visible: true,
          alertType: error.response.data.status ? 'success' : 'error',
          content: String(error.response.data.mensagem).includes(
            'Duplicate entry',
          )
            ? 'CPF já cadastrado'
            : error.response.data.mensagem,
        })
      }
    },
    [clients],
  )
  const updateClient = useCallback(
    async (clientInput: ClientsTypes) => {
      await api.put(`/clientes`, clientInput).then((response) => {
        console.log(response.data)
        setAlertMessageBoxInfo({
          visible: true,
          alertType: response.data.status ? 'success' : 'error',
          content: response.data.mensagem,
        })
      })

      clients.forEach((client) => {
        if (client.cpf === clientInput.cpf) {
          client.nome = clientInput.nome
          client.dtNascimento = clientInput.dtNascimento
          client.email = clientInput.email
          client.telefone = clientInput.telefone
          client.ocupacao = clientInput.ocupacao
          client.sexo = clientInput.sexo
          client.cep = clientInput.cep
          client.estadoCivil = clientInput.estadoCivil
        }
      })
    },
    [clients],
  )
  const deleteClient = useCallback(
    async (clientCpf: String) => {
      await api
        .delete(`/clientes`, {
          data: {
            cpf: clientCpf,
          },
        })
        .then((response) => {
          setClients(clients.filter((client) => client.cpf !== clientCpf))
          setAlertMessageBoxInfo({
            visible: true,
            alertType: response.data.status ? 'success' : 'error',
            content: response.data.mensagem,
          })
        })
    },
    [clients],
  )
  return (
    <ClientContext.Provider
      value={{
        clients,
        createClient,
        updateClient,
        deleteClient,
        searchClient,
        alertMessageBoxInfo,
        setAlertMessageBoxInfo,
      }}
    >
      {children}
    </ClientContext.Provider>
  )
}
