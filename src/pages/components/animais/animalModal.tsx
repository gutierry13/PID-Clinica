import { InputTemplate, SelectSexoTemplate } from '../simpleInputTemplate'
import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { useContextSelector } from 'use-context-selector'
import { ModalContext } from './modalContext'
import { ContainerModalForm } from '../../../globalStyles'
import { AddButtonStyles } from '../styles'
interface Animal {
  codigo: String
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
export function AnimalModal() {
  const { isModalOpen, CloseModal } = useContextSelector(
    ModalContext,
    (context) => {
      return {
        isModalOpen: context.isModalOpen,
        selectedClient: context.selectedClient,
        changeSelectedClient: context.changeSelectedClient,
        CloseModal: context.CloseModal,
      }
    },
  )
  const [animal, setAnimal] = useState<Animal>({
    codigo: '',
    nome: '',
    idade: '',
    raca: '',
    especie: '',
    sexo: 'macho',
    peso: '',
    cor: '',
    porte: 'pequeno',
    saude: '',
  })
  function handleSubmitRegisterNewAnimal(event: FormEvent) {
    event.preventDefault()
  }
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={CloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ContainerModalForm>
        {/* <div className="title">
          <h1>
            {openModalWithUpdateButton ? 'Editar Cliente' : 'Cadastrar Cliente'}
          </h1>
        </div> */}
        {/* <InputTemplate
          id="id"
          name="ID"
          type="text"
          value={animal.codigo.toString()}
          change={(e) => setAnimal({ ...animal, codigo: e.target.value })}
        /> */}
        <InputTemplate
          id="nome"
          name="Nome"
          type="text"
          value={animal.nome}
          change={(e) => setAnimal({ ...animal, nome: e.target.value })}
        />

        <InputTemplate
          id="raca"
          name="Raça"
          type="text"
          value={animal.raca}
          change={(e) => setAnimal({ ...animal, raca: e.target.value })}
        />
        <InputTemplate
          id="especie"
          name="Espécie"
          type="text"
          value={animal.especie}
          change={(e) => setAnimal({ ...animal, especie: e.target.value })}
        />
        <InputTemplate
          id="idade"
          name="Idade"
          type="number"
          value={animal.idade}
          change={(e) => setAnimal({ ...animal, idade: e.target.value })}
        />
        <SelectSexoTemplate
          value1="Macho"
          value2="Femea"
          value={animal.sexo}
          change={(e) => setAnimal({ ...animal, sexo: e.target.value })}
        />
        <InputTemplate
          id="peso"
          name="Peso"
          type="number"
          value={animal.peso}
          change={(e) => setAnimal({ ...animal, peso: e.target.value })}
        />
        <InputTemplate
          id="cor"
          name="Cor"
          type="text"
          value={animal.cor}
          change={(e) => setAnimal({ ...animal, cor: e.target.value })}
        />
        {/* <InputTemplate
          id="porte"
          name="Porte"
          type="text"
          value={animal.porte}
          change={(e) => setAnimal({ ...animal, porte: e.target.value })}
        /> */}
        <div>
          <label htmlFor="porte">Porte</label>
          <select
            name="porte"
            id="porte"
            value={animal.porte}
            onChange={(e) => setAnimal({ ...animal, porte: e.target.value })}
          >
            <option value="pequeno">Pequeno</option>
            <option value="medio">Médio</option>
            <option value="grande">Grande</option>
          </select>
        </div>
        <InputTemplate
          id="hSaude"
          name="Histórico de Saúde"
          type="text"
          value={animal.saude}
          change={(e) => setAnimal({ ...animal, saude: e.target.value })}
        />
        {/* <EditButtonStyles onClick={handleUpdateAnimal}>
          Alterar
        </EditButtonStyles>
        ) : ( */}
        <AddButtonStyles
          type="submit"
          onClick={handleSubmitRegisterNewAnimal}
          // disabled={
          //   !validateFormAndAbleButton.cpf.valueOf() ||
          //   !validateFormAndAbleButton.numero.valueOf() ||
          //   !validateFormAndAbleButton.cep.valueOf()
          // }
        >
          Cadastrar
        </AddButtonStyles>
      </ContainerModalForm>
    </Modal>
  )
}
