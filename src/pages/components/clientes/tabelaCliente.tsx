import { ContainerTable } from '../../../globalStyles'
import {  MouseEvent, useContext, useState } from 'react'
import { ClienteContext } from './clienteContext'
import { ClienteModal } from './clienteModal'
import { AiOutlineEdit } from 'react-icons/ai'
import { AiOutlineDelete } from 'react-icons/ai'
interface ClienteModalProps {
  open: boolean
  close: () => void
  forceOpen?: () => void

}
export function TabelaClientes({ open, close, forceOpen, }: ClienteModalProps) {
  const { clientes,deleteCliente } = useContext(ClienteContext)
  const [clienteSelecionado, setClienteSelecionado] = useState('')
   
    function handlePreencherValores(event: MouseEvent<HTMLOrSVGImageElement>) {
      if(forceOpen !== undefined){
        const clienteSelecionadoCpf = ((event.currentTarget as HTMLElement).parentElement?.parentElement?.children[0] as HTMLElement).innerText  
        setClienteSelecionado(
         clienteSelecionadoCpf
         )
         // setNewClienteModalOpen(true)
         forceOpen() 
      }
  }

  function handleDeleteCliente(event: MouseEvent<HTMLOrSVGImageElement>){
    const cpfElementValue = ((event.currentTarget as HTMLElement).parentElement?.parentElement?.children[0] as HTMLElement).innerText  
     deleteCliente(cpfElementValue)
    
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
              <tr key={cliente.cpf}>
                <td id="cpf">{cliente.cpf}</td>
                <td>{cliente.nome}</td>
                <td>
                  {String(Intl.DateTimeFormat('pt-BR').format(new Date(cliente.dtNascimento)))}
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
                    style={{ color: '#808019' , }}
                    onClick={handlePreencherValores}
                  ></AiOutlineEdit>
                </td>
                <td>
                  <AiOutlineDelete
                    className="excluir"
                    size={22}
                    style={{ color: '#902727' }}
                    onClick={handleDeleteCliente}
                    // onClick={handleDeletarCliente}
                  ></AiOutlineDelete>
                </td>
              </tr>
            )
          })}
        </tbody>
      <ClienteModal
      clienteFromClick={clienteSelecionado}
      open={open}
      close={close}
      />
      </table>
    </ContainerTable>
  )
}
// {String(Intl.DateTimeFormat('pt-BR').format(
//   new Date(cliente.dtNascimento)
// ))}