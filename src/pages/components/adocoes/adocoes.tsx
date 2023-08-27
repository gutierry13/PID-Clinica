import { motion } from 'framer-motion'
import { CustomerContainer } from '../../../globalStyles'
import { AddButtonStyles } from '../styles'
import { AlertMessageBox } from '../alertMessageBox'
import { AdocaoModal } from './adocoesModal'
import { TabelaAdocoes } from './tabelaAdocoes'
import { AdocaoProvider } from './adocoesContext'
import { ModalContext } from './modalContext'
import { useContextSelector } from 'use-context-selector'

export default function Adocoes() {
  const OpenModal = useContextSelector(ModalContext, (context) => {
    return context.OpenModal
  })
  function handleOpenNewAdocaoModal() {
    OpenModal()
  }
  return (
    <AdocaoProvider>
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
          <AddButtonStyles onClick={handleOpenNewAdocaoModal}>
            Registrar Adoção
          </AddButtonStyles>
          <AdocaoModal />
          <AlertMessageBox />
          <TabelaAdocoes />
        </CustomerContainer>
      </motion.div>
    </AdocaoProvider>
  )
}
