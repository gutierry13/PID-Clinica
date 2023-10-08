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
interface ConsultasTypes {
  codigo?: string
  animalID: string
  clienteCPF: string | {}
  funcionarioCPF:
    | string
    | [
        {
          cpf: string
        },
      ]
  data: string | Date
  motivo: string
  diagnostico: string
  medicamento: string
  tratamento: string
  observacao: string
}
interface ConsultaProviderProps {
  children: ReactNode
}
interface ConsultasContextData {
  consultas: ConsultasTypes[]
  createConsulta: (consulta: ConsultasTypes) => Promise<void>
  updateConsulta: (consulta: ConsultasTypes) => Promise<void>
  deleteConsulta: (consultaCpf: String) => Promise<void>
  searchConsulta: (consultaCpf: String) => Promise<void>
}
export const ConsultaContext = createContext<ConsultasContextData>(
  {} as ConsultasContextData,
)
export function ConsultaProvider({ children }: ConsultaProviderProps) {
  const { setAlertMessageBoxInfo } = useContext(AlertBoxContext)
  const [consultas, setConsultas] = useState<ConsultasTypes[]>([])
  const [funcionarios, setFuncionarios] = useState<[]>([])
  function getConsultas() {
    api.get('/consultas').then((response) => setConsultas(response.data))
    api.get('/funcionarios').then((response) => setFuncionarios(response.data))
  }
  useEffect(() => {
    getConsultas()
  }, [])
  const searchConsulta = useCallback(async (consultaCodigo: String) => {
    if (consultaCodigo && consultaCodigo !== '') {
      const response = await api.get(`/consultas/${consultaCodigo}`)
      setConsultas(response.data)
    } else {
      api.get('/consultas').then((response) => setConsultas(response.data))
    }
  }, [])
  const createConsulta = useCallback(
    async (consultaInput: ConsultasTypes) => {
      const cliente = await api.get(`/clientes/${consultaInput.clienteCPF}`)
      const funcionario = await api.get(
        `/funcionarios/${consultaInput.funcionarioCPF}`,
      )
      console.log(consultaInput)
      console.log(cliente.data[0])
      console.log(funcionario.data)
      try {
        const response = await api.post('/consultas', {
          animalID: consultaInput.animalID,
          clienteCPF: cliente.data[0],
          funcionarioCPF: funcionario.data,
          data: consultaInput.data,
          motivo: consultaInput.motivo,
          diagnostico: consultaInput.diagnostico,
          medicamento: consultaInput.medicamento,
          tratamento: consultaInput.tratamento,
          observacao: consultaInput.observacao,
        })
        console.log(response.data)
        const { data } = response.config
        setAlertMessageBoxInfo({
          visible: true,
          alertType: response.data.status ? 'success' : 'error',
          content: response.data.mensagem,
        })
        setConsultas([...consultas, JSON.parse(data)])
        getConsultas()
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
    [consultas],
  )
  const updateConsulta = useCallback(
    async (consultaInput: ConsultasTypes) => {
      try {
        await api.put(`/consultas`, consultaInput).then((response) => {
          // console.log(response.data)
          setAlertMessageBoxInfo({
            visible: true,
            alertType: response.data.status ? 'success' : 'error',
            content: response.data.mensagem,
          })
        })

        consultas.forEach((consulta) => {
          if (consulta.cpf === consultaInput.cpf) {
            consulta.nome = consultaInput.nome
            consulta.dtNascimento = consultaInput.dtNascimento
            consulta.email = consultaInput.email
            consulta.telefone = consultaInput.telefone
            consulta.ocupacao = consultaInput.ocupacao
            consulta.sexo = consultaInput.sexo
            consulta.cep = consultaInput.cep
            consulta.estadoCivil = consultaInput.estadoCivil
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
    [consultas],
  )
  const deleteConsulta = useCallback(
    async (consultaCpf: String) => {
      try {
        await api
          .delete(`/consultas`, {
            data: {
              cpf: consultaCpf,
            },
          })
          .then((response) => {
            setConsultas(
              consultas.filter((consulta) => consulta.cpf !== consultaCpf),
            )
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
    [consultas],
  )
  return (
    <ConsultaContext.Provider
      value={{
        consultas,
        createConsulta,
        updateConsulta,
        deleteConsulta,
        searchConsulta,
      }}
    >
      {children}
    </ConsultaContext.Provider>
  )
}
