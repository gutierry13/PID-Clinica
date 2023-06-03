import { motion } from 'framer-motion'
import { CustomerContainer } from '../../../globalStyles'
import { TabelaAnimais } from './tabelaAnimais'
import { AnimalModal } from './animalModal'
import { AnimalProvider } from './animalContext'
import { useState } from 'react'
import { AddButtonStyles } from '../styles'

export function Animais() {
  const [newClienteModalOpen, setNewClienteModalOpen] = useState(false)
  function handleOpenNewClienteModal() {
    setNewClienteModalOpen(true)
  }
  function handleCloseNewClienteModal() {
    setNewClienteModalOpen(false)
  }
  return (
    <AnimalProvider>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ x: -50, opacity: 0 }}
      >
        <CustomerContainer>
          <div className="text">
            <h1>Animais</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              dolore cumque quos voluptate animi, suscipit voluptatem nisi
              officia, consectetur fuga voluptates alias minus natus veritatis,
              cum ab inventore nemo voluptas?
            </p>
          </div>
          <AddButtonStyles onClick={handleOpenNewClienteModal}>
            Abrir modal
          </AddButtonStyles>
          <AnimalModal
            open={newClienteModalOpen}
            close={handleCloseNewClienteModal}
          />
          <TabelaAnimais />
        </CustomerContainer>
      </motion.div>
    </AnimalProvider>
  )
}
