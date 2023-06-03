import { motion } from 'framer-motion'
import { TabelaClientes } from './tabelaCliente'
import { CustomerContainer } from '../../../globalStyles'
import { ClienteModal } from './clienteModal'
import { ClienteProvider } from './clienteContext'
import { useContext } from 'react'
import { AddButtonStyles } from '../styles'
import { ModalContext } from './modalContext'

export function Clientes() {
  const { OpenModal } = useContext(ModalContext)
  function handleOpenNewClienteModal() {
    OpenModal()
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
          <AddButtonStyles onClick={handleOpenNewClienteModal}>
            Cadastrar Cliente
          </AddButtonStyles>
          <ClienteModal />
          <TabelaClientes />
        </CustomerContainer>
      </motion.div>
    </ClienteProvider>
  )
}
