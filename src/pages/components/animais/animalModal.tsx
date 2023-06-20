import { InputTemplate, SelectSexoTemplate } from '../simpleInputTemplate'
import { FormEvent, useState, useContext, useEffect } from 'react'
import Modal from 'react-modal'
import { useContextSelector } from 'use-context-selector'
import { ModalContext } from './modalContext'
import { ContainerModalForm } from '../../../globalStyles'
import { AddButtonStyles, EditButtonStyles } from '../styles'
import { AnimalContext } from './animalContext'
interface Animal {
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
  const { isModalOpen, CloseModal, selectedAnimal, changeSelectedAnimal } =
    useContextSelector(ModalContext, (context) => {
      return {
        isModalOpen: context.isModalOpen,
        selectedAnimal: context.selectedAnimal,
        changeSelectedAnimal: context.changeSelectedAnimal,
        CloseModal: context.CloseModal,
      }
    })
  const { animals, createAnimal, updateAnimal } = useContext(AnimalContext)
  const [openModalWithUpdateButton, setOpenModalWithUpdateButton] =
    useState(false)
  const [animal, setAnimal] = useState<Animal>({
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
  useEffect(() => {
    if (isModalOpen && selectedAnimal) {
      setOpenModalWithUpdateButton(true)
      animals.filter((item) => {
        if (item.codigo === selectedAnimal) {
          setAnimal({
            nome: item.nome,
            idade: item.idade,
            raca: item.raca,
            especie: item.especie,
            sexo: item.sexo,
            peso: item.peso,
            cor: item.cor,
            porte: item.porte,
            saude: item.saude,
          })
        }
      })
    } else {
      changeSelectedAnimal('')
      setOpenModalWithUpdateButton(false)
      CloseModal()
      setAnimal({
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
    }
  }, [isModalOpen, selectedAnimal, animals, changeSelectedAnimal])
  async function handleSubmitRegisterNewAnimal(event: FormEvent) {
    event.preventDefault()
    await createAnimal(animal)
    setAnimal({
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
    CloseModal()
  }
  async function handleUpdateAnimal(event: FormEvent) {
    event.preventDefault()
    await updateAnimal({
      ...animal,
      codigo: String(selectedAnimal),
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
            {openModalWithUpdateButton ? 'Editar Animal' : 'Cadastrar Animal'}
          </h1>
        </div>
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
          type="text"
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
          type="text"
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
        {openModalWithUpdateButton ? (
          <EditButtonStyles onClick={handleUpdateAnimal}>
            Alterar
          </EditButtonStyles>
        ) : (
          <AddButtonStyles
            type="submit"
            onClick={handleSubmitRegisterNewAnimal}
          >
            Cadastrar
          </AddButtonStyles>
        )}
      </ContainerModalForm>
    </Modal>
  )
}
