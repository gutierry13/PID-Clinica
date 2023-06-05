import { motion } from 'framer-motion'
import { TabelaClientes } from './tabelaCliente'
import { CustomerContainer } from '../../../globalStyles'
import { ClienteModal } from './clienteModal'
import { ClienteProvider } from './clienteContext'
import { useContext } from 'react'
import { AddButtonStyles } from '../styles'
import { ModalContext } from './modalContext'
import { AlertMessageBox } from '../alertMessageBox'

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

          {/* <AlertMessageBox alertType="error" content="Erro" visible={true} />
          <AlertMessageBox
            alertType="warning"
            content="Problema"
            visible={true}
          /> */}
          <AddButtonStyles onClick={handleOpenNewClienteModal}>
            Cadastrar Cliente
          </AddButtonStyles>
          <ClienteModal />
          <AlertMessageBox />
          <TabelaClientes />
        </CustomerContainer>
      </motion.div>
    </ClienteProvider>
  )
}
