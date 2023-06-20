import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../../../services/api'

interface Animal {
  codigo?: String
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
  updateAnimal: (animal: Animal) => Promise<void>
  deleteAnimal: (animalCod: String) => Promise<void>
  searchAnimal: (animalCod: String) => Promise<void>
  setAlertMessageBoxInfo: (alertMessageBoxInfo: any) => void
  alertMessageBoxInfo: {
    visible: boolean
    alertType: string
    content: string
  }
}
export const AnimalContext = createContext<AnimalContextData>(
  {} as AnimalContextData,
)
export function AnimalProvider({ children }: AnimalProviderProps) {
  const [animals, setAnimals] = useState<Animal[]>([])
  const [alertMessageBoxInfo, setAlertMessageBoxInfo] = useState({
    visible: false,
    alertType: '',
    content: '',
  })
  const getAnimals = useCallback(async () => {
    await api.get('animais').then((response) => setAnimals(response.data))
  }, [])
  useEffect(() => {
    getAnimals()
  }, [getAnimals])
  const searchAnimal = useCallback(async (animalCod: String) => {
    if (animalCod && animalCod !== '') {
      const response = await api.get(`/animais/${animalCod}`)
      setAnimals(response.data)
    } else {
      api.get('/animais').then((response) => setAnimals(response.data))
    }
  }, [])
  const createAnimal = useCallback(
    async (animalInput: Animal) => {
      try {
        const response = await api.post('/animais', animalInput)
        const { data } = response.config
        setAlertMessageBoxInfo({
          visible: true,
          alertType: response.data.status ? 'success' : 'error',
          content: response.data.mensagem,
        })
        setAnimals([...animals, JSON.parse(data)])
        getAnimals()
      } catch (error: any) {
        setAlertMessageBoxInfo({
          visible: true,
          alertType: error.response.data.status ? 'success' : 'error',
          content: error.response.data.mensagem,
        })
      }
    },
    [animals, getAnimals],
  )
  const updateAnimal = useCallback(
    async (animalInput: Animal) => {
      try {
        await api.put(`/animais`, animalInput).then((response) => {
          setAlertMessageBoxInfo({
            visible: true,
            alertType: response.data.status ? 'success' : 'error',
            content: response.data.mensagem,
          })
        })

        animals.forEach((animals) => {
          if (animals.codigo === animalInput.codigo) {
            animals.nome = animalInput.nome
            animals.raca = animalInput.raca
            animals.especie = animalInput.especie
            animals.sexo = animalInput.sexo
            animals.peso = animalInput.peso
            animals.sexo = animalInput.sexo
            animals.idade = animalInput.idade
            animals.cor = animalInput.cor
            animals.porte = animalInput.porte
            animals.saude = animalInput.saude
          }
        })
      } catch (error: any) {
        setAlertMessageBoxInfo({
          visible: true,
          alertType: error.response.data.status ? 'success' : 'error',
          content: String(error.response.data.mensagem).includes(
            'Duplicate entry',
          )
            ? 'CPF já cadastrado'
            : error.response.data.mensagem,
        })
      }
    },
    [animals],
  )
  const deleteAnimal = useCallback(
    async (animalCod: String) => {
      try {
        await api
          .delete(`/animais`, {
            data: {
              codigo: animalCod,
            },
          })
          .then((response) => {
            setAnimals(animals.filter((animal) => animal.codigo !== animalCod))
            setAlertMessageBoxInfo({
              visible: true,
              alertType: response.data.status ? 'success' : 'error',
              content: response.data.mensagem,
            })
          })
      } catch (error: any) {
        setAlertMessageBoxInfo({
          visible: true,
          alertType: error.response.data.status ? 'success' : 'error',
          content: String(error.response.data.mensagem).includes(
            'Duplicate entry',
          )
            ? 'CPF já cadastrado'
            : error.response.data.mensagem,
        })
      }
    },
    [animals],
  )
  return (
    <AnimalContext.Provider
      value={{
        animals,
        createAnimal,
        updateAnimal,
        deleteAnimal,
        searchAnimal,
        setAlertMessageBoxInfo,
        alertMessageBoxInfo,
      }}
    >
      {children}
    </AnimalContext.Provider>
  )
}
