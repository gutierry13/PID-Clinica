import { motion } from 'framer-motion'
import { CustomerContainer } from '../../../globalStyles'
import { TabelaFuncionarios } from './tabelaFuncionarios'
import { FuncionarioModal } from './funcionarioModal'
import { FuncionarioProvider } from './funcionarioContext'
import { useState } from 'react'
import { AddButtonStyles } from '../styles'
export function Funcionarios() {
  const [newClienteModalOpen, setNewClienteModalOpen] = useState(false)
  function handleOpenNewClienteModal() {
    setNewClienteModalOpen(true)
  }
  function handleCloseNewClienteModal() {
    setNewClienteModalOpen(false)
  }
  return (
    <FuncionarioProvider>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ x: -50, opacity: 0 }}
      >
        <CustomerContainer>
          <div className="text">
            <h1>Funcionarios</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea
              praesentium magni. Et omnis accusamus modi labore alias!
              Accusantium debitis vel fugit veritatis provident doloribus
              corrupti, dicta eligendi odit libero.
            </p>
          </div>
          <AddButtonStyles onClick={handleOpenNewClienteModal}>
            Abrir modal
          </AddButtonStyles>
          <FuncionarioModal
            open={newClienteModalOpen}
            close={handleCloseNewClienteModal}
          />

          <TabelaFuncionarios />
        </CustomerContainer>
      </motion.div>
    </FuncionarioProvider>
  )
}
