import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../../../services/api'
import { AlertBoxContext } from '../alertBoxContext'

interface Adocao {
  codigo?: String
  cpfCliente: string
  codigoAnimal: string
  data: string
  status?: string
  termos: string
  documentos?: Blob | null
}
interface AdocaoProviderProps {
  children: ReactNode
}
interface AdocaoContextData {
  adocoes: Adocao[]
  createAdocao: (adocao: Adocao) => Promise<void>
  updateAdocao: (adocao: Adocao) => Promise<void>
  deleteAdocao: (adocaoCod: String) => Promise<void>
  searchAdocao: (adocaoCod: String) => Promise<void>
}
export const AdocaoContext = createContext<AdocaoContextData>(
  {} as AdocaoContextData,
)
export function AdocaoProvider({ children }: AdocaoProviderProps) {
  const { setAlertMessageBoxInfo } = useContext(AlertBoxContext)
  const [adocoes, setAdocoes] = useState<Adocao[]>([])
  const getAdocoes = useCallback(async () => {
    const response = await api.get('/adocoes')
    setAdocoes(response.data)
  }, [])

  useEffect(() => {
    getAdocoes()
  }, [getAdocoes])

  const searchAdocao = useCallback(async (adocaoCod: String) => {
    if (adocaoCod && adocaoCod !== '') {
      const response = await api.get(`/adocoes/${adocaoCod}`)
      setAdocoes(response.data)
    } else {
      api.get('/adocoes').then((response) => setAdocoes(response.data))
    }
  }, [])
  const createAdocao = useCallback(
    async (adocaoInput: Adocao) => {
      try {
        const response = await api.post('/adocoes', adocaoInput)
        const { data } = response.config
        setAlertMessageBoxInfo({
          visible: true,
          alertType: response.data.status ? 'success' : 'error',
          content: response.data.mensagem,
        })
        setAdocoes([...adocoes, JSON.parse(data)])
        getAdocoes()
      } catch (error: any) {
        setAlertMessageBoxInfo({
          visible: true,
          alertType: error.response.data.status ? 'success' : 'error',
          content: error.response.data.mensagem,
        })
      }
    },
    [adocoes, getAdocoes, setAlertMessageBoxInfo],
  )
  const updateAdocao = useCallback(
    async (adocaoInput: Adocao) => {
      try {
        await api.put(`/adocoes`, adocaoInput).then((response) => {
          setAlertMessageBoxInfo({
            visible: true,
            alertType: response.data.status ? 'success' : 'error',
            content: response.data.mensagem,
          })
        })

        adocoes.forEach((adocoes) => {
          if (adocoes.codigo === adocaoInput.codigo) {
            adocoes.cpfCliente = adocaoInput.cpfCliente
            adocoes.codigoAnimal = adocaoInput.codigoAnimal
            adocoes.data = adocaoInput.data
            adocoes.status = adocaoInput.status
            adocoes.termos = adocaoInput.termos
            adocoes.documentos = adocaoInput.documentos
          }
        })
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
    [adocoes, setAlertMessageBoxInfo],
  )
  const deleteAdocao = useCallback(
    async (adocaoCod: String) => {
      try {
        await api
          .delete(`/adocoes`, {
            data: {
              codigo: adocaoCod,
            },
          })
          .then((response) => {
            setAdocoes(adocoes.filter((adocao) => adocao.codigo !== adocaoCod))
            setAlertMessageBoxInfo({
              visible: true,
              alertType: response.data.status ? 'success' : 'error',
              content: response.data.mensagem,
            })
          })
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
    [adocoes, setAlertMessageBoxInfo],
  )
  return (
    <AdocaoContext.Provider
      value={{
        adocoes,
        createAdocao,
        updateAdocao,
        deleteAdocao,
        searchAdocao,
      }}
    >
      {children}
    </AdocaoContext.Provider>
  )
}
