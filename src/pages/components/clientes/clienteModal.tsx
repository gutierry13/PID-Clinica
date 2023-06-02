import { FormEvent, useState, useContext, useEffect, } from 'react'
import { InputTemplate, SelectSexoTemplate } from '../simpleInputTemplate'
import { ClienteContext } from './clienteContext'
import Modal from 'react-modal'
import { ContainerModalForm } from '../../../globalStyles'
import { AddButtonStyles, EditButtonStyles } from '../styles'
import { IoClose } from 'react-icons/io5'
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
interface ClienteModalProps {
  open: boolean
  close: () => void
  clienteFromClick?: string
  forceOpen?: () => void
}
export function ClienteModal({
  open,
  close,
  clienteFromClick,
}: ClienteModalProps) {
  const { createCliente, /*updateCliente,*/ clientes } = useContext(ClienteContext)
  const [cliente, setCliente] = useState<Cliente>({
    cpf: '',
    nome: '',
    dtNascimento: new Date(),
    email: '',
    telefone: '',
    ocupacao: '',
    sexo: 'Masculino',
    cep: '',
    estadoCivil: ''
  })
  const [validateFormAndAbleButton, setValidateFormAndAbleButton] = useState({
    cpf:false,
    numero:false,
    cep:false
  })
  const [openModalWithUpdateButton, setOpenModalWithUpdateButton] =
    useState(false)
    const regex = {
      cpf: /[0-9]{3}[.-]?[0-9]{3}[.-]?[0-9]{3}[.-]?[0-9]{2}/g,
      numero: /(\(\d{2}\)|\d{2}\s?)?(\d{5,9})-?(\d{4})?/g,
      cep: /(\d{5})(-??)(\d{3})/g,
    }
    useEffect(() => {
      if(!open){
        setValidateFormAndAbleButton({
          cpf:false,
          numero:false,
          cep:false
        })
      }
    },[open])
  useEffect(() => {
    if (
      open &&
      ((event?.target as HTMLElement).classList.contains('editar') as boolean)
    ) {
      setOpenModalWithUpdateButton(true)
      clientes.filter((item) => {
        if (item.cpf === clienteFromClick) {
          setCliente({
            cpf: item.cpf,
            nome: item.nome,
            dtNascimento: Intl.DateTimeFormat('en-CA').format(new Date(item.dtNascimento)),
            email: item.email,
            telefone: item.telefone,
            ocupacao: item.ocupacao,
            sexo: item.sexo,
            cep: item.cep,
            estadoCivil: item.estadoCivil
          })
        }
      })
    } else {
      setOpenModalWithUpdateButton(false)
      // close()
      setCliente({
        cpf: '',
        nome: '',
        dtNascimento: new Date(),
        email: '',
        telefone: '',
        ocupacao: '',
        sexo: 'Masculino',
        cep: '',
        estadoCivil: ''
      })
    }
  }, [open,clienteFromClick])
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
      estadoCivil: ''
    })
    setValidateFormAndAbleButton({
      cpf:false,
      numero:false,
      cep:false
    })
    close()
  }
  async function handleUpdateCliente(event: FormEvent) {
    event.preventDefault()
    // await updateCliente(cliente)
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
      <h1>{openModalWithUpdateButton ? 'Editar Cliente' : 'Cadastrar Cliente'}</h1>
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
            disabled={openModalWithUpdateButton}
            type="text"
            value={cliente.cpf}
            required
            change={(e) => {setCliente({ ...cliente, cpf: e.target.value })
            setValidateFormAndAbleButton({
              ...validateFormAndAbleButton,
              cpf: regex.cpf.test(e.target.value)
            })}}
            validated={regex.cpf.test(cliente.cpf)}
          />
          <InputTemplate
            id="email"
            name="Email"
            type="email"
            value={cliente.email}
            change={(e) => setCliente({ ...cliente, email: e.target.value })}
            
          />
          <InputTemplate
            id="dtNascimento"
            name="Data de Nascimento"
            type="date"
            value={cliente.dtNascimento.toString()}
            change={(e) => setCliente({ ...cliente, dtNascimento: e.target.value })}
          />
          <InputTemplate
            id="telefone"
            name="Telefone"
            type="tel"
            value={cliente.telefone}
            required
            change={(e) => {setCliente({ ...cliente, telefone: e.target.value })
            setValidateFormAndAbleButton({
              ...validateFormAndAbleButton,
              numero: regex.numero.test(e.target.value)
            })}}
            validated={regex.numero.test(cliente.telefone)}
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
            required
            change={(e) => {setCliente({ ...cliente, cep: e.target.value })
            setValidateFormAndAbleButton({
              ...validateFormAndAbleButton,
              cep: regex.cep.test(e.target.value)
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
                !validateFormAndAbleButton.cpf.valueOf() || !validateFormAndAbleButton.numero.valueOf() || !validateFormAndAbleButton.cep.valueOf()
 
              
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
