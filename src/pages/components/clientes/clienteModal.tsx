import { FormEvent, useState, useContext, useEffect } from 'react'
import { InputTemplate, SelectSexoTemplate } from '../simpleInputTemplate'
import { ClienteContext } from './clienteContext'
import Modal from 'react-modal'
import { ContainerModalForm } from '../../../globalStyles'
import { AddButtonStyles, EditButtonStyles } from '../styles'
import { IoClose } from 'react-icons/io5'
import { ModalContext } from './modalContext'

interface Cliente {
  cpf: string
  nome: string
  dtNascimento: Date | string
  email: string
  telefone: string
  ocupacao: string
  sexo: string
  cep: string
  estadoCivil: string
}

export function ClienteModal() {
  const { isModalOpen, CloseModal, clienteSelecionado, changeSelectedClient } =
    useContext(ModalContext)

  const { createCliente, updateCliente, clientes } = useContext(ClienteContext)
  const [cliente, setCliente] = useState<Cliente>({
    cpf: '',
    nome: '',
    dtNascimento: new Date(),
    email: '',
    telefone: '',
    ocupacao: '',
    sexo: 'Masculino',
    cep: '',
    estadoCivil: '',
  })
  const [validateFormAndAbleButton, setValidateFormAndAbleButton] = useState({
    cpf: false,
    numero: false,
    cep: false,
  })
  const [openModalWithUpdateButton, setOpenModalWithUpdateButton] =
    useState(false)
  const regex = {
    cpf: /[0-9]{3}[.-]?[0-9]{3}[.-]?[0-9]{3}[.-]?[0-9]{2}/g,
    numero: /(\(\d{2}\)|\d{2}\s?)?(\d{5,9})-?(\d{4})?/g,
    cep: /(\d{5})(-??)(\d{3})/g,
  }
  useEffect(() => {
    if (!isModalOpen) {
      setValidateFormAndAbleButton({
        cpf: false,
        numero: false,
        cep: false,
      })
    }
  }, [isModalOpen])
  //      isModalOpen &&
  // ((event?.target as HTMLElement).classList.contains('editar') as boolean)
  useEffect(() => {
    if (isModalOpen && clienteSelecionado) {
      setOpenModalWithUpdateButton(true)
      clientes.filter((item) => {
        if (item.cpf === clienteSelecionado) {
          setCliente({
            cpf: item.cpf,
            nome: item.nome,
            dtNascimento: Intl.DateTimeFormat('en-CA').format(
              new Date(item.dtNascimento),
            ),
            email: item.email,
            telefone: item.telefone,
            ocupacao: item.ocupacao,
            sexo: item.sexo,
            cep: item.cep,
            estadoCivil: item.estadoCivil,
          })
        }
      })
    } else {
      changeSelectedClient('')
      setOpenModalWithUpdateButton(false)
      // CloseModal()
      setCliente({
        cpf: '',
        nome: '',
        dtNascimento: new Date(),
        email: '',
        telefone: '',
        ocupacao: '',
        sexo: 'Masculino',
        cep: '',
        estadoCivil: '',
      })
    }
  }, [isModalOpen, clienteSelecionado, clientes, changeSelectedClient])
  async function handleSubmitCadastrarCliente(event: FormEvent) {
    event.preventDefault()
    await createCliente(cliente)
    setCliente({
      cpf: '',
      nome: '',
      dtNascimento: new Date(),
      email: '',
      telefone: '',
      ocupacao: '',
      sexo: 'Masculino',
      cep: '',
      estadoCivil: '',
    })
    setValidateFormAndAbleButton({
      cpf: false,
      numero: false,
      cep: false,
    })

    CloseModal()
  }
  async function handleUpdateCliente(event: FormEvent) {
    event.preventDefault()
    await updateCliente(cliente)
    CloseModal()
  }
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={CloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ContainerModalForm>
        <div className="title">
          <h1>
            {openModalWithUpdateButton ? 'Editar Cliente' : 'Cadastrar Cliente'}
          </h1>
        </div>
        <IoClose size={30} onClick={CloseModal} style={{ cursor: 'pointer' }} />
        <form action="">
          <InputTemplate
            id="nome"
            name="Nome"
            type="text"
            value={cliente.nome}
            change={(e) => setCliente({ ...cliente, nome: e.target.value })}
            title={cliente.nome}
          />
          <InputTemplate
            id="cpf"
            name="CPF"
            disabled={openModalWithUpdateButton}
            title={cliente.cpf}
            type="text"
            value={cliente.cpf}
            required
            change={(e) => {
              setCliente({ ...cliente, cpf: e.target.value })
              setValidateFormAndAbleButton({
                ...validateFormAndAbleButton,
                cpf: regex.cpf.test(e.target.value),
              })
            }}
            validated={regex.cpf.test(cliente.cpf)}
          />
          <InputTemplate
            id="email"
            name="Email"
            type="email"
            value={cliente.email}
            change={(e) => setCliente({ ...cliente, email: e.target.value })}
            title={cliente.email}
          />
          <InputTemplate
            id="dtNascimento"
            name="Data de Nascimento"
            type="date"
            value={cliente.dtNascimento.toString()}
            change={(e) =>
              setCliente({ ...cliente, dtNascimento: e.target.value })
            }
          />
          <InputTemplate
            id="telefone"
            name="Telefone"
            type="tel"
            value={cliente.telefone}
            title={cliente.telefone}
            required
            change={(e) => {
              setCliente({ ...cliente, telefone: e.target.value })
              setValidateFormAndAbleButton({
                ...validateFormAndAbleButton,
                numero: regex.numero.test(e.target.value),
              })
            }}
            validated={regex.numero.test(cliente.telefone)}
          />
          <InputTemplate
            id="ocupacao"
            name="Ocupação"
            type="text"
            value={cliente.ocupacao}
            change={(e) => setCliente({ ...cliente, ocupacao: e.target.value })}
            title={cliente.ocupacao}
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
            required
            title={cliente.cep}
            change={(e) => {
              setCliente({ ...cliente, cep: e.target.value })
              setValidateFormAndAbleButton({
                ...validateFormAndAbleButton,
                cep: regex.cep.test(e.target.value),
              })
            }}
            validated={regex.cep.test(cliente.cep)}
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
          {openModalWithUpdateButton ? (
            <EditButtonStyles onClick={handleUpdateCliente}>
              Alterar
            </EditButtonStyles>
          ) : (
            <AddButtonStyles
              type="submit"
              onClick={handleSubmitCadastrarCliente}
              disabled={
                !validateFormAndAbleButton.cpf.valueOf() ||
                !validateFormAndAbleButton.numero.valueOf() ||
                !validateFormAndAbleButton.cep.valueOf()
              }
            >
              Cadastrar
            </AddButtonStyles>
          )}
        </div>
      </ContainerModalForm>
    </Modal>
  )
}
