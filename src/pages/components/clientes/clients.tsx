import { motion } from 'framer-motion'
import { CustomerContainer } from '../../../globalStyles'
import { ClientModal } from './clientModal'
import { ClientProvider } from './clientContext'
// import { useContext } from 'react'
import { AddButtonStyles } from '../styles'
import { ModalContext } from './modalContext'
import { AlertMessageBox } from '../alertMessageBox'
import { TabelaClients } from './tableClient'
import { useContextSelector } from 'use-context-selector'
export function Clients() {
  const OpenModal = useContextSelector(ModalContext, (context) => {
    return context.OpenModal
  })
  function handleOpenNewClientModal() {
    OpenModal()
  }

  return (
    <ClientProvider>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ x: -50, opacity: 0 }}
      >
        <CustomerContainer>
          <div className="text">
            <h1>Clientes</h1>
            <p>Tela de gerenciamento e cadastro de Clientes</p>
          </div>

          {/* <AlertMessageBox alertType="error" content="Erro" visible={true} />
          <AlertMessageBox
            alertType="warning"
            content="Problema"
            visible={true}
          /> */}
          <AddButtonStyles onClick={handleOpenNewClientModal}>
            Cadastrar Cliente
          </AddButtonStyles>
          <ClientModal />
          <AlertMessageBox />
          <TabelaClients />
        </CustomerContainer>
      </motion.div>
    </ClientProvider>
  )
}
