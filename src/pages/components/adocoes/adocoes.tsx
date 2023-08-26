import { motion } from 'framer-motion'
import { CustomerContainer } from '../../../globalStyles'
// import { TabelaAnimais } from './tabelaAnimais'
// import { AnimalProvider } from './animalContext'
import { AddButtonStyles } from '../styles'
import { useContextSelector } from 'use-context-selector'
// import { ModalContext } from './modalContext'
// import { AnimalModal } from './animalModal'
import { AlertMessageBox } from '../alertMessageBox'
import { AnimalProvider } from '../animais/animalContext'
import { AnimalModal } from '../animais/animalModal'
import { ModalContext } from '../animais/modalContext'
import { TabelaAnimais } from '../animais/tabelaAnimais'
export default function Adocoes() {
  const OpenModal = useContextSelector(ModalContext, (context) => {
    return context.OpenModal
  })
  function handleOpenNewAnimalModal() {
    OpenModal()
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
            <h1>Adoções</h1>
            <p>Tela de gerenciamento de adoçoes</p>
          </div>
          <AddButtonStyles onClick={handleOpenNewAnimalModal}>
            Registrar Adoção
          </AddButtonStyles>
          <AnimalModal />
          <AlertMessageBox />
          <TabelaAnimais />
        </CustomerContainer>
      </motion.div>
    </AnimalProvider>
  )
}
