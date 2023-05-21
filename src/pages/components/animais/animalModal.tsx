import { InputTemplate, SelectSexoTemplate } from '../simpleInputTemplate'
import { FormEvent, useState } from 'react'
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

export function AnimalModal() {
  const [animalID, setAnimalID] = useState('')
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)
  const [raca, setRaca] = useState('')
  const [especie, setEspecie] = useState('')
  const [genero, setGenero] = useState('')
  const [peso, setPeso] = useState(0)
  const [cor, setCor] = useState('')
  const [porte, setPorte] = useState('')
  const [historicoSaude, setHistoricoSaude] = useState('')
  function handleSubmitAnimal(event: FormEvent) {
    event.preventDefault()
  }
  return (
    <div>
      <div className="title">
        <h1>Cadastrar Animais</h1>
      </div>
      <form action="">
        <InputTemplate
          id="id"
          name="ID"
          type="text"
          value={animalID}
          change={(e) => setAnimalID(e.target.value)}
        />
        <InputTemplate
          id="nome"
          name="Nome"
          type="text"
          value={nome}
          change={(e) => setNome(e.target.value)}
        />
        <InputTemplate
          id="idade"
          name="Idade"
          type="number"
          value={idade}
          change={(e) => setIdade(Number(e.target.value))}
        />
        <InputTemplate
          id="raca"
          name="Raça"
          type="text"
          value={raca}
          change={(e) => setRaca(e.target.value)}
        />
        <InputTemplate
          id="especie"
          name="Espécie"
          type="text"
          value={especie}
          change={(e) => setEspecie(e.target.value)}
        />
        <SelectSexoTemplate
          value1="Macho"
          value2="Femea"
          value={genero}
          change={(e) => setGenero(e.target.value)}
        />
        <InputTemplate
          id="peso"
          name="Peso"
          type="number"
          value={peso}
          change={(e) => setPeso(Number(e.target.value))}
        />
        <InputTemplate
          id="cor"
          name="Cor"
          type="text"
          value={cor}
          change={(e) => setCor(e.target.value)}
        />
        <InputTemplate
          id="porte"
          name="Porte"
          type="text"
          value={porte}
          change={(e) => setPorte(e.target.value)}
        />
        <InputTemplate
          id="hSaude"
          name="Histórico de Saúde"
          type="text"
          value={historicoSaude}
          change={(e) => setHistoricoSaude(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSubmitAnimal}
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}
