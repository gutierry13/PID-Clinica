import { ContainerTable } from "../../../globalStyles";
import { useEffect, useState } from "react"
import { api } from "../../../services/api"
interface Funcionario{
  cpf: string
  nome: string
  dtNasc: Date
  funcao: string
  setor: string
  email: string
  telefone: string
  ocupacao: string
  estadoCivil: string
  cep: string
  dtContratacao: Date
  sexo: string
}
export function TabelaFuncionarios(){
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([])
  useEffect(()=>{
    api.get('funcionarios').then(response => setFuncionarios(response.data.funcionarios))
  },[])
  return (
    <ContainerTable>
       <table>
        <thead>
          <tr>
            <th>CPF</th>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>Função</th>
            <th>Setor</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ocupação</th>
            <th>Estado Civil</th>
            <th>Cep</th>
            <th>Data de Contratação</th>
            <th>Sexo</th>
          </tr>
        </thead>
        <tbody>
            {funcionarios.map(funcionario=>{
              return(
                <tr>
                  <td>{funcionario.cpf}</td>
                  <td>{funcionario.nome}</td>
              <td>{Intl.DateTimeFormat('pt-BR').format(new Date(funcionario.dtNasc))}</td>
                  <td>{funcionario.funcao}</td>
                  <td>{funcionario.setor}</td>
                  <td>{funcionario.email}</td>
                  <td>{funcionario.telefone}</td>
                  <td>{funcionario.ocupacao}</td>
                  <td>{funcionario.estadoCivil}</td>
                  <td>{funcionario.cep}</td>
              <td>{Intl.DateTimeFormat('pt-BR').format(new Date(funcionario.dtContratacao))}</td>
                  <td>{funcionario.sexo}</td>
                </tr>
              )
            })}
        </tbody>
    </table>
    </ContainerTable>
  )
}