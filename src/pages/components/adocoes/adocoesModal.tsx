import { InputTemplate } from '../simpleInputTemplate'
import { FormEvent, useState, useContext, useEffect } from 'react'
import Modal from 'react-modal'
import { useContextSelector } from 'use-context-selector'
import { ModalContext } from './modalContext'
import { ContainerModalForm } from '../../../globalStyles'
import { AddButtonStyles, EditButtonStyles } from '../styles'
import { AdocaoContext } from './adocoesContext'
import { api } from '../../../services/api'
interface Adocao {
  codigo?: String
  cpfCliente: string
  codigoAnimal: string
  data: string
  status?: string | 'aprovado' | 'recusado'
  termos: string | 'Sem termos'
  documentos?: string | null
}
interface Animal {
  codigo?: string
  nome: string
  idade: string
  raca: string
  especie: string
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
export function AdocaoModal() {
  const { isModalOpen, CloseModal, selectedAdocao, changeSelectedAdocao } =
    useContextSelector(ModalContext, (context) => {
      return {
        isModalOpen: context.isModalOpen,
        selectedAdocao: context.selectedAdocao,
        changeSelectedAdocao: context.changeSelectedAdocao,
        CloseModal: context.CloseModal,
      }
    })
  const { adocoes, createAdocao, updateAdocao } = useContext(AdocaoContext)
  const [openModalWithUpdateButton, setOpenModalWithUpdateButton] =
    useState(false)
  const [adocao, setAdocao] = useState<Adocao>({
    codigo: '',
    cpfCliente: '',
    codigoAnimal: '',
    data: '',
    status: '',
    termos: '',
    documentos: null,
  })
  const [clientes, setClientes] = useState([] as ClientsTypes[])
  const [animais, setAnimais] = useState([] as Animal[])
  useEffect(() => {
    api.get('/clientes').then((response) => setClientes(response.data))
    api.get('/animais').then((response) => setAnimais(response.data))
  }, [])
  useEffect(() => {
    if (isModalOpen && selectedAdocao) {
      setOpenModalWithUpdateButton(true)
      adocoes.filter((item) => {
        if (item.codigo === selectedAdocao) {
          setAdocao({
            codigo: item.codigo,
            cpfCliente: item.cpfCliente,
            codigoAnimal: item.codigoAnimal,
            status: item.status,
            data: item.data,
            termos: item.termos,
            documentos: item.documentos,
          })
        }
      })
    } else {
      changeSelectedAdocao('')

      setOpenModalWithUpdateButton(false)
      setAdocao({
        codigo: '',
        cpfCliente: '',
        codigoAnimal: '',
        data: '',
        status: '',
        termos: '',
        documentos: undefined,
      })
    }
  }, [isModalOpen, selectedAdocao, adocoes, changeSelectedAdocao])
  async function handleSubmitRegisterNewAdocao(event: FormEvent) {
    event.preventDefault()
    await createAdocao(adocao)
    setAdocao({
      codigo: '',
      cpfCliente: '',
      codigoAnimal: '',
      data: '',
      status: '',
      termos: '',
      documentos: null,
    })
    CloseModal()
  }

  async function handleUpdateAdocao(event: FormEvent) {
    event.preventDefault()
    await updateAdocao({
      ...adocao,
      codigo: String(selectedAdocao),
    })
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
            {openModalWithUpdateButton ? 'Editar Adocao' : 'Cadastrar Adocao'}
          </h1>
        </div>
        <form>
          <InputTemplate
            id="cpfCliente"
            name="cpfCliente"
            list="datalist-clientes"
            type="text"
            value={adocao.cpfCliente}
            change={(e) => setAdocao({ ...adocao, cpfCliente: e.target.value })}
          />
          <datalist id="datalist-clientes">
            {clientes.map((cliente) => (
              <option key={cliente.cpf} value={cliente.cpf}>
                {cliente.nome}
              </option>
            ))}
          </datalist>
          <InputTemplate
            id="codigoAnimal"
            name="codigoAnimal"
            list="datalist-animais"
            type="text"
            value={adocao.codigoAnimal}
            change={(e) =>
              setAdocao({ ...adocao, codigoAnimal: e.target.value })
            }
          />
          <datalist id="datalist-animais">
            {animais.map((animal) => (
              <option key={animal.codigo} value={animal.codigo}>
                {animal.nome}
              </option>
            ))}
          </datalist>
          <InputTemplate
            id="data"
            name="data"
            type="date"
            value={adocao.data}
            change={(e) => setAdocao({ ...adocao, data: e.target.value })}
          />
          <InputTemplate
            id="status"
            name="status"
            type="text"
            value={adocao.status || 'Sem termos'}
            change={(e) => setAdocao({ ...adocao, status: e.target.value })}
          />
          <InputTemplate
            id="termos"
            name="termos"
            type="text"
            value={adocao.termos}
            change={(e) => setAdocao({ ...adocao, termos: e.target.value })}
          />
          {/* <InputTemplate
            id="documentos"
            name="documentos"
            type="file"
            value={adocao.documentos || 'Sem documentos'}
            change={(e) => setAdocao({ ...adocao, documentos: e.target.value })}
          /> */}
        </form>
        {openModalWithUpdateButton ? (
          <EditButtonStyles onClick={handleUpdateAdocao}>
            Alterar
          </EditButtonStyles>
        ) : (
          <AddButtonStyles
            type="submit"
            onClick={handleSubmitRegisterNewAdocao}
            disabled={
              !(
                clientes.find((item) => item.cpf === adocao.cpfCliente) &&
                animais.find((item) => item.codigo === adocao.codigoAnimal)
              )
            }
          >
            Cadastrar
          </AddButtonStyles>
        )}
      </ContainerModalForm>
    </Modal>
  )
}
