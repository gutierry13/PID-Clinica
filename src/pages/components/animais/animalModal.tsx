import { InputTemplate, SelectSexoTemplate } from '../simpleInputTemplate'
import { FormEvent, useState, useContext, useEffect } from 'react'
import Modal from 'react-modal'
import DropdownList from 'react-widgets/DropdownList'
import { useContextSelector } from 'use-context-selector'
import { ModalContext } from './modalContext'
import { ContainerModalForm } from '../../../globalStyles'
import { AddButtonStyles, EditButtonStyles } from '../styles'
import { AnimalContext } from './animalContext'
import { api } from '../../../services/api'
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
interface Especie {
  codigo: string
  nome: string
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
    especie: {
      nome: '',
    },
    sexo: 'macho',
    peso: '',
    cor: '',
    porte: 'pequeno',
    saude: 'Nenhum',
  })
  const [especie, setEspecie] = useState([] as Especie[])
  function getAllSpecies() {
    api.get('/especie').then((response) => setEspecie(response.data))
  }
  useEffect(() => {
    getAllSpecies()
  }, [animal.especie])
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
      setAnimal({
        nome: '',
        idade: '',
        raca: '',
        especie: {
          codigo: '',
          nome: '',
        },
        sexo: 'macho',
        peso: '',
        cor: '',
        porte: 'pequeno',
        saude: 'Nenhum',
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
      especie: {
        codigo: '',
        nome: '',
      },
      sexo: 'macho',
      peso: '',
      cor: '',
      porte: 'pequeno',
      saude: 'Nenhum',
    })
    CloseModal()
  }

  function handleAddNewSpecie() {
    const newSpecie = window.prompt('Adicione uma nova espécie')
    if (newSpecie) {
      api
        .post('/especie', {
          nome: newSpecie,
        })
        .then((response) => {
          console.log(response)
          getAllSpecies()
        })
    }
  }
  function handleDeleteSpecie() {
    const askForDelete = window.confirm(
      'Tem certeza que deseja excluir a especie selecionada?',
    )
    if (askForDelete) {
      api
        .delete(`/especie`, { data: { codigo: animal.especie.codigo } })
        .then((response) => {
          console.log(response)
          getAllSpecies()
        })
      setAnimal({
        ...animal,
        especie: {
          codigo: '',
          nome: '',
        },
      })
    }
  }
  async function handleUpdateAnimal(event: FormEvent) {
    event.preventDefault()
    await updateAnimal({
      ...animal,
      codigo: String(selectedAnimal),
    })
    CloseModal()
  }
  console.log(animal)
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
        <form>
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
          <div>
            <label htmlFor="especie">Espécie</label>
            <span
              onClick={handleAddNewSpecie}
              style={{ cursor: 'pointer', color: 'green' }}
            >
              {' '}
              +{' '}
            </span>
            <span
              onClick={handleDeleteSpecie}
              style={{ cursor: 'pointer', color: 'red' }}
            >
              {' '}
              -{' '}
            </span>
            <DropdownList
              id="especie"
              name="especie"
              value={animal.especie.nome}
              defaultValue=""
              onSelect={(value) =>
                setAnimal({
                  ...animal,
                  especie: {
                    nome: value,
                    codigo: especie.filter((item) => item.nome === value)[0]
                      .codigo,
                  },
                })
              }
              data={especie.map((item) => item.nome)}
            />
            {/* <select
              name="especie"
              id="especie"
              value={animal.especie.nome}
              onChange={(e) => setAnimal({ ...animal, especie: e.target.value })}
            >
              <option value="cachorro">Cachorro</option>
              <option value="gato">Gato</option>
            </select> */}
          </div>
          <InputTemplate
            id="idade"
            name="Idade (meses)"
            type="number"
            value={animal.idade}
            change={(e) => setAnimal({ ...animal, idade: e.target.value })}
          />
          <SelectSexoTemplate
            value1="Macho"
            value2="Femea"
            value={animal.sexo}
            change={(e) =>
              setAnimal({
                ...animal,
                sexo: e.target.value as 'macho' | 'femea',
              })
            }
          />
          <InputTemplate
            id="peso"
            name="Peso (K/g)"
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

          <div>
            <label htmlFor="porte">Porte</label>
            <select
              name="porte"
              id="porte"
              value={animal.porte}
              onChange={(e) =>
                setAnimal({
                  ...animal,
                  porte: e.target.value as 'pequeno' | 'medio' | 'grande',
                })
              }
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
        </form>
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
