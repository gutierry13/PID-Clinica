import { FormEvent, useState, useContext, useEffect } from 'react'
import { InputTemplate, SelectSexoTemplate } from '../simpleInputTemplate'
import { ClientContext } from './clientContext'
import Modal from 'react-modal'
import { ContainerModalForm } from '../../../globalStyles'
import { AddButtonStyles, EditButtonStyles } from '../styles'
import { IoClose } from 'react-icons/io5'
import { ModalContext } from './modalContext'
import { useContextSelector } from 'use-context-selector'

interface Client {
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

export function ClientModal() {
  // const { , , ,  } =
  //   useContextSelector(ModalContext, (context) => {
  //     return {
  //       isModalOpen: context.isModalOpen,
  //       selectedClient: context.selectedClient,
  //       changeSelectedClient: context.changeSelectedClient,
  //       CloseModal: context.CloseModal,
  //     }
  //   })
  const isModalOpen = useContextSelector(ModalContext, (context) => {
    return context.isModalOpen
  })
  const CloseModal = useContextSelector(ModalContext, (context) => {
    return context.CloseModal
  })
  const selectedClient = useContextSelector(ModalContext, (context) => {
    return context.selectedClient
  })
  const changeSelectedClient = useContextSelector(ModalContext, (context) => {
    return context.changeSelectedClient
  })

  const { createClient, updateClient, clients } = useContext(ClientContext)
  const [Client, setClient] = useState<Client>({
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
    if (isModalOpen && selectedClient) {
      setOpenModalWithUpdateButton(true)
      clients.filter((item) => {
        if (item.cpf === selectedClient) {
          setClient({
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
      setClient({
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
  }, [isModalOpen, selectedClient, clients, changeSelectedClient])
  async function handleSubmitCadastrarClient(event: FormEvent) {
    event.preventDefault()
    await createClient(Client)
    setClient({
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
  async function handleUpdateClient(event: FormEvent) {
    event.preventDefault()
    await updateClient(Client)
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
            value={Client.nome}
            change={(e) => setClient({ ...Client, nome: e.target.value })}
            required
            title={Client.nome}
          />
          <InputTemplate
            id="cpf"
            name="CPF"
            disabled={openModalWithUpdateButton}
            title={Client.cpf}
            type="text"
            value={Client.cpf}
            required
            change={(e) => {
              setClient({ ...Client, cpf: e.target.value })
              setValidateFormAndAbleButton({
                ...validateFormAndAbleButton,
                cpf: regex.cpf.test(e.target.value),
              })
            }}
            validated={regex.cpf.test(Client.cpf)}
          />
          <InputTemplate
            id="email"
            name="Email"
            type="email"
            value={Client.email}
            required
            change={(e) => setClient({ ...Client, email: e.target.value })}
            title={Client.email}
          />
          <InputTemplate
            id="dtNascimento"
            name="Data de Nascimento"
            type="date"
            value={Client.dtNascimento.toString()}
            required
            change={(e) =>
              setClient({ ...Client, dtNascimento: e.target.value })
            }
          />
          <InputTemplate
            id="telefone"
            name="Telefone"
            type="tel"
            value={Client.telefone}
            title={Client.telefone}
            required
            change={(e) => {
              setClient({ ...Client, telefone: e.target.value })
              setValidateFormAndAbleButton({
                ...validateFormAndAbleButton,
                numero: regex.numero.test(e.target.value),
              })
            }}
            validated={regex.numero.test(Client.telefone)}
          />
          <InputTemplate
            id="ocupacao"
            name="Ocupação"
            type="text"
            value={Client.ocupacao}
            change={(e) => setClient({ ...Client, ocupacao: e.target.value })}
            title={Client.ocupacao}
            required
          />
          <SelectSexoTemplate
            value1="Masculino"
            value2="Feminino"
            value={Client.sexo}
            change={(e) => setClient({ ...Client, sexo: e.target.value })}
          />
          <InputTemplate
            id="cep"
            name="CEP"
            type="text"
            value={Client.cep}
            required
            title={Client.cep}
            change={(e) => {
              setClient({ ...Client, cep: e.target.value })
              setValidateFormAndAbleButton({
                ...validateFormAndAbleButton,
                cep: regex.cep.test(e.target.value),
              })
            }}
            validated={regex.cep.test(Client.cep)}
          />
          <InputTemplate
            id="estdCivil"
            name="Estado Civil"
            required
            type="text"
            value={Client.estadoCivil}
            change={(e) =>
              setClient({ ...Client, estadoCivil: e.target.value })
            }
          />
        </form>
        <div className="buttons">
          {openModalWithUpdateButton ? (
            <EditButtonStyles onClick={handleUpdateClient}>
              Alterar
            </EditButtonStyles>
          ) : (
            <AddButtonStyles
              type="submit"
              onClick={handleSubmitCadastrarClient}
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
