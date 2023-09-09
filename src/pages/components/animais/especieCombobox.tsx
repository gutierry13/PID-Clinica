import { useEffect, useState } from 'react'
import Combobox from 'react-widgets/Combobox'
import { api } from '../../../services/api'
interface Especie {
  codigo: string
  nome: string
}
export default function EspecieCombobox() {
  const [especie, setEspecie] = useState([] as Especie[])
  useEffect(() => {
    api.get('/especie').then((response) => setEspecie(response.data))
  }, [])
  return (
    <Combobox defaultValue="Cachorro" data={especie.map((item) => item.nome)} />
  )
}
