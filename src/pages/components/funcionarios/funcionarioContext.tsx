import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
  useContext,
} from 'react'
import { api } from '../../../services/api'
import { AlertBoxContext } from '../alertBoxContext'
interface Funcionario {
  cpf: string
  nome: string
  dataNascimento: Date | string
  funcao: string
  setor: string
  email: string
  telefone: string
  ocupacao: string
  estadoCivil: string
  cep: string
  dataContratacao: Date
  sexo: string
}
interface FuncionarioProviderProps {
  children: ReactNode
}
interface funcionarioContextData {
  funcionarios: Funcionario[]
  // createClient: (client: Funcionario) => Promise<void>
  // updateClient: (client: Funcionario) => Promise<void>
  // deleteClient: (clientCpf: String) => Promise<void>
  // searchClient: (clientCpf: String) => Promise<void>
}
export const FuncionarioContext = createContext<funcionarioContextData>(
  {} as funcionarioContextData,
)
export function FuncionarioProvider({ children }: FuncionarioProviderProps) {
  // const { setAlertMessageBoxInfo } = useContext(AlertBoxContext)
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([])
  function getFuncionarios() {
    api.get('/funcionarios').then((response) => setFuncionarios(response.data))
  }
  useEffect(() => {
    getFuncionarios()
  }, [])
  // const searchClient = useCallback(async (clientCpf: String) => {
  //   if (clientCpf && clientCpf !== '') {
  //     const response = await api.get(`/funcionarios/${clientCpf}`)
  //     setFuncionarios(response.data)
  //   } else {
  //     api
  //       .get('/funcionarios')
  //       .then((response) => setFuncionarios(response.data))
  //   }
  // }, [])
  // const createClient = useCallback(
  //   async (clientInput: Funcionario) => {
  //     try {
  //       const response = await api.post('/funcionarios', clientInput)
  //       const { data } = response.config
  //       setAlertMessageBoxInfo({
  //         visible: true,
  //         alertType: response.data.status ? 'success' : 'error',
  //         content: response.data.mensagem,
  //       })
  //       setFuncionarios([...funcionarios, JSON.parse(data)])
  //       getFuncionarios()
  //     } catch (error: any) {
  //       setAlertMessageBoxInfo({
  //         visible: true,
  //         alertType: error.response.data.status ? 'success' : 'error',
  //         content: String(error.response.data.mensagem).includes(
  //           'Duplicate entry',
  //         )
  //           ? 'CPF já cadastrado'
  //           : error.response.data.mensagem,
  //       })
  //     }
  //   },
  //   [funcionarios],
  // )
  // const updateClient = useCallback(
  //   async (clientInput: Funcionario) => {
  //     try {
  //       await api.put(`/funcionarios`, clientInput).then((response) => {
  //         console.log(response.data)
  //         setAlertMessageBoxInfo({
  //           visible: true,
  //           alertType: response.data.status ? 'success' : 'error',
  //           content: response.data.mensagem,
  //         })
  //       })

  //       funcionarios.forEach((funcionario) => {
  //         if (funcionario.cpf === clientInput.cpf) {
  //           funcionario.nome = clientInput.nome
  //           funcionario.dataNascimento = clientInput.dataNascimento
  //           funcionario.funcao = clientInput.funcao
  //           funcionario.setor = clientInput.setor
  //           funcionario.email = clientInput.email
  //           funcionario.telefone = clientInput.telefone
  //           funcionario.ocupacao = clientInput.ocupacao
  //           funcionario.estadoCivil = clientInput.estadoCivil
  //           funcionario.cep = clientInput.cep
  //           funcionario.dataContratacao = clientInput.dataContratacao
  //           funcionario.sexo = clientInput.sexo
  //         }
  //       })
  //     } catch (error: any) {
  //       setAlertMessageBoxInfo({
  //         visible: true,
  //         alertType: error.response.data.status ? 'success' : 'error',
  //         content: String(error.response.data.mensagem).includes(
  //           'Duplicate entry',
  //         )
  //           ? 'CPF já cadastrado'
  //           : error.response.data.mensagem,
  //       })
  //     }
  //   },
  //   [funcionarios],
  // )
  // const deleteClient = useCallback(
  //   async (clientCpf: String) => {
  //     try {
  //       await api
  //         .delete(`/funcionarios`, {
  //           data: {
  //             cpf: clientCpf,
  //           },
  //         })
  //         .then((response) => {
  //           setFuncionarios(
  //             funcionarios.filter(
  //               (funcionario) => funcionario.cpf !== clientCpf,
  //             ),
  //           )
  //           setAlertMessageBoxInfo({
  //             visible: true,
  //             alertType: response.data.status ? 'success' : 'error',
  //             content: response.data.mensagem,
  //           })
  //         })
  //     } catch (error: any) {
  //       setAlertMessageBoxInfo({
  //         visible: true,
  //         alertType: error.response.data.status ? 'success' : 'error',
  //         content: String(error.response.data.mensagem).includes(
  //           'Duplicate entry',
  //         )
  //           ? 'CPF já cadastrado'
  //           : error.response.data.mensagem,
  //       })
  //     }
  //   },
  //   [funcionarios],
  // )
  return (
    <FuncionarioContext.Provider
      value={{
        funcionarios,
        // createClient,
        // updateClient,
        // deleteClient,
        // searchClient,
      }}
    >
      {children}
    </FuncionarioContext.Provider>
  )
}

// export function FuncionarioProvider({ children }: FuncionarioProviderProps) {
//   const [funcionarios, setFuncionarios] = useState<Funcionario[]>([])
//   useEffect(() => {
//     api
//       .get('funcionarios')
//       .then((response) => setFuncionarios(response.data.funcionarios))
//   }, [])
//   return (
//     <FuncionarioContext.Provider value={funcionarios}>
//       {children}
//     </FuncionarioContext.Provider>
//   )
// }
