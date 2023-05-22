import { ContainerTable } from '../../../globalStyles'
import { FormEvent, useContext, useState } from 'react'
import { ClienteContext } from './clienteContext'
import { ClienteModal } from './clienteModal'
interface ClienteModalProps {
  open: boolean
  close: () => void
  abrirModalEdicao?: () => void
}
export function TabelaClientes({
  open,
  close,
  abrirModalEdicao
}: ClienteModalProps) {
  const { clientes } = useContext(ClienteContext)

  function handlePreencherValores(e: FormEvent) {
    forceOpen()
    e.preventDefault()
    console.log(
      clientes.forEach((cliente) => {
        if (
          e.target.parentElement.parentElement.children[0].innerText ===
          cliente.cpf
        ) {
          console.log('Existe')
        }
      })
    )
  }

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
            // console.log()
            return (
              <tr>
                <td id="cpf">{cliente.cpf}</td>
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
                <td>
                  <button onClick={handlePreencherValores}>More Actions</button>
                </td>
              </tr>
            )
          })}
        </tbody>
        <ClienteModal
          open={open}
          close={close}
        />
      </table>
    </ContainerTable>
  )
}
