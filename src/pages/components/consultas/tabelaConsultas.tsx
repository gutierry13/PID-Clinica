import { useEffect, useState } from 'react'
import { ContainerTable } from '../../../globalStyles'
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
export function TabelaConsultas() {
  const [consultas, setConsultas] = useState<Consulta[]>([])
  useEffect(() => {
    api.get('consultas').then(response => setConsultas(response.data.consulta))
  },[])
  return (
    <ContainerTable>
      <table>
        <thead>
          <tr>
            <th>Animal ID</th>
            <th>Cliente CPF</th>
            <th>Funcionário CPF</th>
            <th>Data da Consulta</th>
            <th>Motivo da Consulta</th>
            <th>Diagnóstico</th>
            <th>Medicamento</th>
            <th>Tratamento</th>
            <th>Observação</th>
          </tr>
        </thead>
        <tbody>
          {consultas.map(consulta => {
            return(
              <tr>
                <td>{consulta.animalID}</td>
                <td>{consulta.clienteCPF}</td>
                <td>{consulta.funcionarioCPF}</td>
                <td>{Intl.DateTimeFormat('pt-BR').format(new Date(consulta.dtConsulta))}</td>
                <td>{consulta.motivoConsulta}</td>
                <td>{consulta.diagnostico}</td>
                <td>{consulta.medicamento}</td>
                <td>{consulta.tratamento}</td>
                <td>{consulta.observacao}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </ContainerTable>
  )
}
