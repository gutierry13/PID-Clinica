import { FormEvent, useState, useContext, useEffect } from 'react'
import { InputTemplate, SelectSexoTemplate } from '../simpleInputTemplate'
import { ClienteContext } from './clienteContext'
import Modal from 'react-modal'
import { ContainerModalForm } from '../../../globalStyles'
import { AddButtonStyles, EditButtonStyles } from '../styles'
import { IoClose } from 'react-icons/io5'
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
  clienteSelecionado?: () => string
  clienteFromClick: string
}
export function ClienteModal({
  open,
  close,
  clienteFromClick
}: ClienteModalProps) {
  const { createCliente, updateCliente, clientes } = useContext(ClienteContext)
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
  useEffect(() => {
    if (open) {
      if (event.target.classList.contains('editar')) {
        clientes.filter((item) => {
          if (item.cpf === clienteFromClick) {
            setCliente({
              cpf: item.cpf,
              nome: item.nome,
              dtNasc: item.dtNasc,
              email: item.email,
              telefone: item.telefone,
              ocupacao: item.ocupacao,
              sexo: item.sexo,
              cep: item.cep,
              estadoCivil: item.estadoCivil
            })
          }
        })
      }
    }
  }, [open])

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

  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ContainerModalForm>
        <div className="title">
          <h1>Cadastrar Cliente</h1>
        </div>
        <IoClose
          size={30}
          onClick={close}
          style={{ cursor: 'pointer' }}
        />
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
        </form>
        <div className="buttons">
          <AddButtonStyles
            type="submit"
            onClick={handleSubmitCadastrarCliente}
          >
            Cadastrar
          </AddButtonStyles>
          <EditButtonStyles onClick={handleUpdateCliente}>
            Alterar
          </EditButtonStyles>
        </div>
      </ContainerModalForm>
    </Modal>
  )
}
