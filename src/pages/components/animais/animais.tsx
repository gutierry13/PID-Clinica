import { motion } from 'framer-motion'
import { CustomerContainer } from '../../../globalStyles'
import { TabelaAnimais } from './tabelaAnimais'
import { AnimalProvider } from './animalContext'
import { AddButtonStyles } from '../styles'
import { useContextSelector } from 'use-context-selector'
import { ModalContext } from './modalContext'
import { AnimalModal } from './animalModal'
import { AlertMessageBox } from '../alertMessageBox'

export function Animais() {
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
            <h1>Animais</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              dolore cumque quos voluptate animi, suscipit voluptatem nisi
              officia, consectetur fuga voluptates alias minus natus veritatis,
              cum ab inventore nemo voluptas?
            </p>
          </div>
          <AddButtonStyles onClick={handleOpenNewAnimalModal}>
            Cadastrar Animal
          </AddButtonStyles>
          <AnimalModal />
          <AlertMessageBox />
          <TabelaAnimais />
        </CustomerContainer>
      </motion.div>
    </AnimalProvider>
  )
}
