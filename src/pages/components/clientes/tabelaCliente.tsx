import { ContainerTable } from '../../../globalStyles'
import { FormEvent, useContext, useState } from 'react'
import { ClienteContext } from './clienteContext'
import { ClienteModal } from './clienteModal'
import { EditButtonStyles } from '../styles'
interface ClienteModalProps {
  open: boolean
  close: () => void
  forceOpen?: () => void
  abrirEdicaoModal?: () => void
}
export function TabelaClientes({
  open,
  close,
  abrirEdicaoModal,
  forceOpen
}: ClienteModalProps) {
  const { clientes } = useContext(ClienteContext)
  let [clienteSelecionado, setClienteSelecionado] = useState('')

  function handlePreencherValores(event: FormEvent) {
    forceOpen()
    setClienteSelecionado(
      event.target.parentElement.parentElement.children[0].innerText
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
                  <EditButtonStyles
                    className="editar"
                    onClick={handlePreencherValores}
                  >
                    Editar
                  </EditButtonStyles>
                </td>
              </tr>
            )
          })}
        </tbody>
        <ClienteModal
          open={open}
          close={close}
          clienteFromClick={clienteSelecionado}
        />
      </table>
    </ContainerTable>
  )
}
