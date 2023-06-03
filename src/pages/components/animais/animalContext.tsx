import { createContext, useEffect, useState } from 'react'
import { api } from '../../../services/api'

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
interface AnimalProviderProps {
  children: React.ReactNode
}
interface AnimalContextData {
  animais: Animal[]
  createAnimal: (animal: Animal) => void
}
export const AnimalContext = createContext<AnimalContextData>(
  {} as AnimalContextData,
)
export function AnimalProvider({ children }: AnimalProviderProps) {
  const [animais, setAnimais] = useState<Animal[]>([])
  useEffect(() => {
    api.get('animals').then((response) => setAnimais(response.data.animals))
  }, [])
  function createAnimal(animal: Animal) {
    api.post('/animals', animal).then(() => {
      alert('Animal cadastrado com sucesso!')
    })
  }
  return (
    <AnimalContext.Provider
      value={{
        animais,
        createAnimal,
      }}
    >
      {children}
    </AnimalContext.Provider>
  )
}
