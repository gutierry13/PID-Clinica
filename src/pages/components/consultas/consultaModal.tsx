// @ts-nocheck
import { InputTemplate } from '../simpleInputTemplate'
import { FormEvent, useEffect, useState, useContext } from 'react'
import Modal from 'react-modal'
import { DropdownList, Multiselect } from 'react-widgets/cjs'
import { api } from '../../../services/api'
import { useContextSelector } from 'use-context-selector'
import { ConsultaContext } from './consultaContext'
import { ModalContext } from './modalContext'
import { ConsultaModalStyle } from '../../../globalStyles'
import { AddButtonStyles } from '../styles'

interface Consulta {
  codigo?: string
  animalID: string
  clienteCPF: string | { cpf: string }
  funcionarioCPF: string | []
  data: string | Date
  motivo: string
  diagnostico: string
  medicamento: string
  tratamento: string
  observacao: string
}
interface Animal {
  codigo?: String
  nome: string
  idade: string
  raca: string
  especie: {
    nome: string
    codigo?: string
  }
  sexo: 'macho' | 'femea'
  peso: string
  cor: string
  porte: 'pequeno' | 'medio' | 'grande'
  saude: string
}
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
interface Funcionario {
  cpf: string
  nome: string
  dtNasc: Date | string
  funcao: string
  setor: string
  email: string
  telefone: number
  ocupacao: string
  estadoCivil: string
  cep: number
  dtContratacao: Date | string
  sexo: string
}

export function ConsultaModal() {
  const { isModalOpen, CloseModal } = useContextSelector(
    ModalContext,
    (context) => {
      return {
        isModalOpen: context.isModalOpen,
        CloseModal: context.CloseModal,
      }
    },
  )
  const { createConsulta } = useContext(ConsultaContext)
  const [consulta, setConsulta] = useState<Consulta>({
    animalID: '',
    clienteCPF: '',
    funcionarioCPF: [],
    data: new Date(),
    motivo: '',
    diagnostico: '',
    medicamento: '',
    tratamento: '',
    observacao: '',
  })
  console.log(consulta)
  const [animal, setAnimal] = useState([{} as Animal])
  const [cliente, setCliente] = useState([{} as ClientsTypes])
  const [funcionario, setFuncionario] = useState([{} as Funcionario])

  async function handleSubmitConsulta(event: FormEvent) {
    event.preventDefault()
    await createConsulta(consulta)
    setConsulta({
      animalID: '',
      clienteCPF: '',
      funcionarioCPF: [],
      data: new Date(),
      motivo: '',
      diagnostico: '',
      medicamento: '',
      tratamento: '',
      observacao: '',
    })
    CloseModal()
  }

  function getAll() {
    api.get('/animais').then((response) => setAnimal(response.data))
    api.get('/clientes').then((response) => setCliente(response.data))
    api.get('/funcionarios').then((response) => setFuncionario(response.data))
  }

  useEffect(() => {
    getAll()
  }, [])
  // console.log(animal)
  // console.log(consulta)
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={CloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ConsultaModalStyle>
        <form id="formConsulta" action="">
          {/* <InputTemplate
          id="id"
          name="ID do Animal"
          type="text"
          value={consulta.animalID}
          change={(e) => setConsulta({ ...consulta, animalID: e.target.value })}
        /> */}
          <label htmlFor="animalID">Id do Animal</label>
          <DropdownList
            id="animalID"
            name="animalID"
            value={consulta.animalID}
            defaultValue=""
            onSelect={(value) =>
              setConsulta({
                ...consulta,
                animalID: value.split('|')[0].trim(),
              })
            }
            data={animal.map((item) => `${item.codigo} | ${item.nome}`)}
          />
          <label htmlFor="clienteCPF">CPF do Cliente</label>

          <DropdownList
            id="clienteCPF"
            name="clienteCPF"
            value={consulta.clienteCPF}
            defaultValue=""
            onSelect={(value) =>
              setConsulta({
                ...consulta,
                clienteCPF: value.split('|')[0].trim(),
              })
            }
            data={cliente.map((item) => `${item.cpf} | ${item.nome}`)}
          />
          <label htmlFor="funcionarioCPF">CPF do Funcionário</label>

          <Multiselect
            id="funcionarioCPF"
            name="funcionarioCPF"
            value={consulta.funcionarioCPF}
            onChange={(value) =>
              setConsulta({
                ...consulta,
                funcionarioCPF: value,
                //
              })
            }
            data={funcionario.map((item) => `${item.cpf} | ${item.nome}`)}
          />
          {/* <InputTemplate
          id="clienteCpf"
          name="CPF do Cliente "
          type="text"
          value={consulta.clienteCPF}
          change={(e) =>
            setConsulta({ ...consulta, clienteCPF: e.target.value })
          }
        /> */}
          {/* <InputTemplate
          id="funcionarioCpf"
          name="CPF do Funcionario "
          type="text"
          value={consulta.funcionarioCPF}
          change={(e) =>
            setConsulta({ ...consulta, funcionarioCPF: e.target.value })
          }
        /> */}
          <InputTemplate
            id="dataConsulta"
            name="Data da Consulta"
            type="date"
            value={consulta.data.toString()}
            change={(e) => setConsulta({ ...consulta, data: e.target.value })}
          />
          <InputTemplate
            id="motivoConsulta"
            name="Motivo da Consulta"
            type="text"
            value={consulta.motivo}
            change={(e) => setConsulta({ ...consulta, motivo: e.target.value })}
          />
          <InputTemplate
            id="diagnostico"
            name="Diagnostico"
            type="text"
            value={consulta.diagnostico}
            change={(e) =>
              setConsulta({ ...consulta, diagnostico: e.target.value })
            }
          />
          <InputTemplate
            id="medicamento"
            name="Medicamento"
            type="text"
            value={consulta.medicamento}
            change={(e) =>
              setConsulta({ ...consulta, medicamento: e.target.value })
            }
          />
          <InputTemplate
            id="tratamento"
            name="Tratamento"
            type="text"
            value={consulta.tratamento}
            change={(e) =>
              setConsulta({ ...consulta, tratamento: e.target.value })
            }
          />
          <InputTemplate
            id="observacao"
            name="Observação"
            type="text"
            value={consulta.observacao}
            change={(e) =>
              setConsulta({ ...consulta, observacao: e.target.value })
            }
          />
        </form>
        <AddButtonStyles
          type="submit"
          form="formConsulta"
          onClick={handleSubmitConsulta}
        >
          Cadastrar
        </AddButtonStyles>
      </ConsultaModalStyle>
    </Modal>
  )
}
