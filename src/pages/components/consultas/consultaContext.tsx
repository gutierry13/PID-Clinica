import { createContext, useEffect, useState } from 'react'
import { api } from '../../../services/api'
interface Consulta {
  animalID: string
  clienteCPF: string
  funcionarioCPF: string
  dtConsulta: Date
  motivoConsulta: string
  diagnostico: string
  medicamento: string
  tratamento: string
  observacao: string
}
interface ConsultaContextProps {
  children: React.ReactNode
}
export const ConsultaContext = createContext<Consulta[]>([])
export function ConsultaProvider({ children }: ConsultaContextProps) {
  const [consultas, setConsultas] = useState<Consulta[]>([])
  useEffect(() => {
    api
      .get('consultas')
      .then((response) => setConsultas(response.data.consulta))
  }, [])
  return (
    <ConsultaContext.Provider value={consultas}>
      {children}
    </ConsultaContext.Provider>
  )
}
