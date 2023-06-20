import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../../../services/api'

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
interface AnimalProviderProps {
  children: ReactNode
}
interface AnimalContextData {
  animals: Animal[]
  createAnimal: (animal: Animal) => Promise<void>
}
export const AnimalContext = createContext<AnimalContextData>(
  {} as AnimalContextData,
)
export function AnimalProvider({ children }: AnimalProviderProps) {
  const [animals, setAnimals] = useState<Animal[]>([])
  const getAnimals = useCallback(async () => {
    await api.get('animais').then((response) => setAnimals(response.data))
  }, [])
  useEffect(() => {
    getAnimals()
  }, [getAnimals])
  const createAnimal = useCallback(
    async (animalInput: Animal) => {
      try {
        const response = await api.post('/animais', animalInput)
        const { data } = response.config
        // setAlertMessageBoxInfo({
        //   visible: true,
        //   alertType: response.data.status ? 'success' : 'error',
        //   content: response.data.mensagem,
        // })
        setAnimals([...animals, JSON.parse(data)])
        getAnimals()
      } catch (error: any) {
        // setAlertMessageBoxInfo({
        //   visible: true,
        //   alertType: error.response.data.status ? 'success' : 'error',
        //   content: String(error.response.data.mensagem).includes(
        //     'Duplicate entry',
        //   )
        //     ? 'CPF já cadastrado'
        //     : error.response.data.mensagem,
        // })
      }
    },
    [animals, getAnimals],
  )
  return (
    <AnimalContext.Provider
      value={{
        animals,
        createAnimal,
      }}
    >
      {children}
    </AnimalContext.Provider>
  )
}
