import { FormEvent, useState, useContext } from 'react'
import { InputTemplate, SelectSexoTemplate } from '../simpleInputTemplate'
import { ClienteContext } from './clienteContext'
import Modal from 'react-modal'

interface Cliente {
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
interface ClienteModalProps {
  open: boolean
  close: () => void
  forceOpen?: () => void
}
export function ClienteModal({ open, close, forceOpen }: ClienteModalProps) {
  const { createCliente, updateCliente } = useContext(ClienteContext)
  // console.log(data)
  const [cliente, setCliente] = useState<Cliente>({
    cpf: '',
    nome: '',
    dtNasc: new Date(),
    email: '',
    telefone: '',
    ocupacao: '',
    sexo: 'Masculino',
    cep: '',
    estadoCivil: ''
  })
  async function handleSubmitCadastrarCliente(event: FormEvent) {
    event.preventDefault()
    await createCliente(cliente)
    setCliente({
      cpf: '',
      nome: '',
      dtNasc: new Date(),
      email: '',
      telefone: '',
      ocupacao: '',
      sexo: 'Masculino',
      cep: '',
      estadoCivil: ''
    })
    close()
  }
  async function handleUpdateCliente(event: FormEvent) {
    event.preventDefault()
    await updateCliente(cliente)
    close()
  }
  // function openModalForEditCustomer() {
  //   forceOpen()
  // }
  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
    >
      <div className="title">
        <h1>Cadastrar Cliente</h1>
      </div>
      <form action="">
        <InputTemplate
          id="nome"
          name="Nome"
          type="text"
          value={cliente.nome}
          change={(e) => setCliente({ ...cliente, nome: e.target.value })}
        />
        <InputTemplate
          id="cpf"
          name="CPF"
          type="text"
          value={cliente.cpf}
          change={(e) => setCliente({ ...cliente, cpf: e.target.value })}
        />
        <InputTemplate
          id="email"
          name="Email"
          type="email"
          value={cliente.email}
          change={(e) => setCliente({ ...cliente, email: e.target.value })}
        />
        <InputTemplate
          id="dtNasc"
          name="Data de Nascimento"
          type="date"
          value={cliente.dtNasc.toString()}
          change={(e) => setCliente({ ...cliente, dtNasc: e.target.value })}
        />
        <InputTemplate
          id="telefone"
          name="Telefone"
          type="tel"
          value={cliente.telefone}
          change={(e) => setCliente({ ...cliente, telefone: e.target.value })}
        />
        <InputTemplate
          id="ocupacao"
          name="Ocupação"
          type="text"
          value={cliente.ocupacao}
          change={(e) => setCliente({ ...cliente, ocupacao: e.target.value })}
        />
        <SelectSexoTemplate
          value1="Masculino"
          value2="Feminino"
          value={cliente.sexo}
          change={(e) => setCliente({ ...cliente, sexo: e.target.value })}
        />
        <InputTemplate
          id="cep"
          name="CEP"
          type="text"
          value={cliente.cep}
          change={(e) => setCliente({ ...cliente, cep: e.target.value })}
        />
        <InputTemplate
          id="estdCivil"
          name="Estado Civil"
          type="text"
          value={cliente.estadoCivil}
          change={(e) =>
            setCliente({ ...cliente, estadoCivil: e.target.value })
          }
        />
        <button
          type="submit"
          onClick={handleSubmitCadastrarCliente}
        >
          Cadastrar
        </button>
        <button onClick={handleUpdateCliente}>Alterar</button>
      </form>
    </Modal>
  )
}
