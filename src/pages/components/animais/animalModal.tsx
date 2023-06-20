import { InputTemplate, SelectSexoTemplate } from '../simpleInputTemplate'
import { FormEvent, useState, useContext } from 'react'
import Modal from 'react-modal'
import { AnimalContext } from './animalContext'
interface Animal {
  animalID: String
  nome: string
  idade: number
  raca: string
  especie: string
  genero: string
  peso: number
  cor: string
  porte: string
  historicoSaude: string
}
interface ClienteModalProps {
  open: boolean
  close: () => void
}
export function AnimalModal({ open, close }: ClienteModalProps) {
  const [animal, setAnimal] = useState<Animal>({
    animalID: '',
    nome: '',
    idade: 0,
    raca: '',
    especie: '',
    genero: 'Macho',
    peso: 0,
    cor: '',
    porte: '',
    historicoSaude: '',
  })
  function handleSubmitAnimal(event: FormEvent) {
    event.preventDefault()
    // createAnimal(animal)
  }
  return (
    <Modal isOpen={open} onRequestClose={close}>
      <div className="title">
        <h1>Cadastrar Animais</h1>
      </div>
      <form action="">
        <InputTemplate
          id="id"
          name="ID"
          type="text"
          value={animal.animalID.toString()}
          change={(e) => setAnimal({ ...animal, animalID: e.target.value })}
        />
        <InputTemplate
          id="nome"
          name="Nome"
          type="text"
          value={animal.nome}
          change={(e) => setAnimal({ ...animal, nome: e.target.value })}
        />
        <InputTemplate
          id="idade"
          name="Idade"
          type="number"
          value={animal.idade}
          change={(e) =>
            setAnimal({ ...animal, idade: Number(e.target.value) })
          }
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
        <SelectSexoTemplate
          value1="Macho"
          value2="Femea"
          value={animal.genero}
          change={(e) => setAnimal({ ...animal, genero: e.target.value })}
        />
        <InputTemplate
          id="peso"
          name="Peso"
          type="number"
          value={animal.peso}
          change={(e) => setAnimal({ ...animal, peso: Number(e.target.value) })}
        />
        <InputTemplate
          id="cor"
          name="Cor"
          type="text"
          value={animal.cor}
          change={(e) => setAnimal({ ...animal, cor: e.target.value })}
        />
        <InputTemplate
          id="porte"
          name="Porte"
          type="text"
          value={animal.porte}
          change={(e) => setAnimal({ ...animal, porte: e.target.value })}
        />
        <InputTemplate
          id="hSaude"
          name="Histórico de Saúde"
          type="text"
          value={animal.historicoSaude}
          change={(e) =>
            setAnimal({ ...animal, historicoSaude: e.target.value })
          }
        />
        <button type="submit" onClick={handleSubmitAnimal}>
          Cadastrar
        </button>
      </form>
    </Modal>
  )
}
