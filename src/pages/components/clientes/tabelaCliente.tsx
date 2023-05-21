import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import {} from 'react-modal'
import { ContainerTable } from "../../../globalStyles";
interface ClientesTypes{
  cpf: string
  nome: string
  dtNasc: Date
  email: string
  telefone: string
  ocupacao: string
  sexo: string
  cep: string
  estadoCivil: string
}
export function TabelaClientes(){
  const [clientes, setClientes] = useState<ClientesTypes[]>([])
  useEffect (()=>{
  api.get('clientes').then(response => setClientes(response.data.clientes))
  },[])

  return (
    <ContainerTable>
    <table>
        <thead>
          <tr>
            <th>CPF</th>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ocupação</th>
            <th>Sexo</th>
            <th>Cep</th>
            <th>Estado Civil</th>
          </tr>
        </thead>
        <tbody>
            {clientes.map(cliente=>{
              console.log()
              return (
            <tr >
              <td>{cliente.cpf}</td>
              <td>{cliente.nome}</td>
     <td>{Intl.DateTimeFormat('pt-BR').format(new Date(cliente.dtNasc))}</td>
              <td>{cliente.email}</td>
              <td>{cliente.telefone}</td>
              <td>{cliente.ocupacao}</td>
              <td>{cliente.sexo}</td>
              <td>{cliente.cep}</td>
              <td>{cliente.estadoCivil}</td>
            </tr>
              )
            })}
        </tbody>
    </table>
    </ContainerTable>
  )
}