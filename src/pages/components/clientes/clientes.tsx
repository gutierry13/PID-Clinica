import { motion } from 'framer-motion'
import { TabelaClientes } from './tabelaCliente'
import { CustomerContainer } from '../../../globalStyles'
import { ClienteModal } from './clienteModal'
import { ClienteProvider } from './clienteContext'
import { FormEvent, useState } from 'react'
import { AddButtonStyles } from '../styles'

export function Clientes() {
  const [newClienteModalOpen, setNewClienteModalOpen] = useState(false)
  // const [clienteSelecionado, setClienteSelecionado] = useState(null)
  function handleOpenNewClienteModal() {
    setNewClienteModalOpen(true)
  }
  function handleCloseNewClienteModal() {
    setNewClienteModalOpen(false)
    setCliente({
      cpf: '',
      nome: '',
      dtNasc: new Date(),
      email: '',
      telefone: '',
      ocupacao: '',
      sexo: 'Masculino',
      cep: '',
      estadoCivil: ''
    })
  }
  function receberValores(valores) {
    console.log(valores)
    return valores
  }
  function handlePreencherValores(e: FormEvent, clientes) {
    handleOpenNewClienteModal()
    receberValores(clientes)

    clientes.filter((cliente) => {
      if (
        e.target.parentElement.parentElement.children[0].innerText ===
        cliente.cpf
      ) {
        console.log(cliente)
      }
    })
  }

  return (
    <ClienteProvider>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ x: -50, opacity: 0 }}
      >
        <CustomerContainer>
          <div className="text">
            <h1>Clientes</h1>
            <p>Tela de gerenciamento e cadastro de clientes</p>
          </div>
          {/* <div
          onClick={handleOpenNewClienteModal}
          className="btn"
        >
          <AddButton customer="Clientes" />
        </div> */}
          <AddButtonStyles onClick={handleOpenNewClienteModal}>
            Cadastrar Cliente
          </AddButtonStyles>
          <ClienteModal
            open={newClienteModalOpen}
            close={handleCloseNewClienteModal}
            forceOpen={handleOpenNewClienteModal}
            clienteSelecionado={receberValores}
          />
          <TabelaClientes
            open={newClienteModalOpen}
            close={handleCloseNewClienteModal}
            forceOpen={handleOpenNewClienteModal}
            abrirEdicaoModal={handlePreencherValores}
          />
        </CustomerContainer>
      </motion.div>
    </ClienteProvider>
  )
}
