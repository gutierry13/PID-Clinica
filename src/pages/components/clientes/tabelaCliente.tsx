import { ContainerTable } from '../../../globalStyles'
import { ChangeEvent, MouseEvent, useContext, useState } from 'react'
import { ClienteContext } from './clienteContext'
// import { ClienteModal } from './clienteModal'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

import { ModalContext } from './modalContext'

export function TabelaClientes() {
  const { OpenModal, changeSelectedClient } = useContext(ModalContext)
  const [clientCpfInputSearch, setClientCpfInputSearch] = useState('')
  const { clientes, deleteCliente, searchClient } = useContext(ClienteContext)

  function handlePreencherValores(event: MouseEvent) {
    const clienteSelecionadoCpf = (
      (event.currentTarget as HTMLElement).parentElement?.parentElement
        ?.children[0] as HTMLElement
    ).innerText
    changeSelectedClient(clienteSelecionadoCpf)
    OpenModal()
  }

  function handleDeleteCliente(event: MouseEvent) {
    if (window.confirm('Deletar cliente') === true) {
      const cpfElementValue = (
        (event.currentTarget as HTMLElement).parentElement?.parentElement
          ?.children[0] as HTMLElement
      ).innerText
      deleteCliente(cpfElementValue)
    }
  }

  function handleSearchClientForCPF(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length >= 0) {
      setClientCpfInputSearch(event.target.value)
      searchClient(event.target.value)
    } else {
      setClientCpfInputSearch('')
    }
  }
  return (
    <ContainerTable>
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          onChange={handleSearchClientForCPF}
          value={clientCpfInputSearch}
        />
      </div>
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
              <tr key={cliente.cpf}>
                <td id="cpf">{cliente.cpf}</td>
                <td>{cliente.nome}</td>
                <td>
                  {String(
                    Intl.DateTimeFormat('pt-BR').format(
                      new Date(cliente.dtNascimento),
                    ),
                  )}
                </td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.ocupacao}</td>
                <td>{cliente.sexo}</td>
                <td>{cliente.cep}</td>
                <td>{cliente.estadoCivil}</td>
                <td>
                  <AiOutlineEdit
                    size={22}
                    className="editar"
                    style={{ color: '#808019' }}
                    onClick={handlePreencherValores}
                  ></AiOutlineEdit>
                </td>
                <td>
                  <AiOutlineDelete
                    className="excluir"
                    size={22}
                    style={{ color: '#902727' }}
                    onClick={handleDeleteCliente}
                  ></AiOutlineDelete>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </ContainerTable>
  )
}
