import { ContainerTable } from '../../../globalStyles'
import { useContext } from 'react'
import { ClienteContext } from './clienteContext'

export function TabelaClientes() {
  const clientes = useContext(ClienteContext)
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
          {clientes.map((cliente) => {
            console.log()
            return (
              <tr>
                <td>{cliente.cpf}</td>
                <td>{cliente.nome}</td>
                <td>
                  {Intl.DateTimeFormat('pt-BR').format(
                    new Date(cliente.dtNasc)
                  )}
                </td>
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
