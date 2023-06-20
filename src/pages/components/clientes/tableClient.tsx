import { ContainerTable } from '../../../globalStyles'
import { ChangeEvent, MouseEvent, useContext, useState } from 'react'
// import { ClientModal } from './ClientModal'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

import { ModalContext } from './modalContext'
import { ClientContext } from './clientContext'
import { useContextSelector } from 'use-context-selector'

export function TabelaClients() {
  const OpenModal = useContextSelector(ModalContext, (context) => {
    return context.OpenModal
  })
  const changeSelectedClient = useContextSelector(ModalContext, (context) => {
    return context.changeSelectedClient
  })
  const [clientCpfInputSearch, setClientCpfInputSearch] = useState('')
  const { clients, deleteClient, searchClient } = useContext(ClientContext)

  function handlePreencherValores(event: MouseEvent) {
    const ClientSelecionadoCpf = (
      (event.currentTarget as HTMLElement).parentElement?.parentElement
        ?.children[0] as HTMLElement
    ).innerText
    changeSelectedClient(ClientSelecionadoCpf)
    OpenModal()
  }

  function handleDeleteClient(event: MouseEvent) {
    if (window.confirm('Deletar Client') === true) {
      const cpfElementValue = (
        (event.currentTarget as HTMLElement).parentElement?.parentElement
          ?.children[0] as HTMLElement
      ).innerText
      deleteClient(cpfElementValue)
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
        <input
          type="text"
          id="search"
          onChange={handleSearchClientForCPF}
          placeholder="Buscar Clients"
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
          {clients.map((Client) => {
            return (
              <tr key={Client.cpf}>
                <td id="cpf">{Client.cpf}</td>
                <td>{Client.nome}</td>
                <td>
                  {String(
                    Intl.DateTimeFormat('pt-BR').format(
                      new Date(Client.dtNascimento),
                    ),
                  )}
                </td>
                <td>{Client.email}</td>
                <td>{Client.telefone}</td>
                <td>{Client.ocupacao}</td>
                <td>{Client.sexo}</td>
                <td>{Client.cep}</td>
                <td>{Client.estadoCivil}</td>
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
                    onClick={handleDeleteClient}
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
