import { motion } from 'framer-motion'
import { CustomerContainer } from '../../../globalStyles'
import { TabelaConsultas } from './tabelaConsultas'
import { ConsultaModal } from './consultaModal'
import { ConsultaProvider } from './consultaContext'
import { AddButtonStyles } from '../styles'
import { useContextSelector } from 'use-context-selector'
import { ModalContext } from './modalContext'
import { AlertMessageBox } from '../alertMessageBox'

export function Consultas() {
  const OpenModal = useContextSelector(ModalContext, (context) => {
    return context.OpenModal
  })
  function handleOpenNewConsultaModal() {
    OpenModal()
  }
  return (
    <ConsultaProvider>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ x: -50, opacity: 0 }}
      >
        <CustomerContainer>
          <div className="text">
            <h1>Consultas</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              autem nulla, fugiat odit earum, ipsa eaque obcaecati eligendi unde
              distinctio quas, optio placeat! Aut quae temporibus perferendis
              maiores sequi commodi!
            </p>
          </div>
          <AddButtonStyles onClick={handleOpenNewConsultaModal}>
            Cadastrar Consulta
          </AddButtonStyles>
          <ConsultaModal />
          <AlertMessageBox />
          <TabelaConsultas />
        </CustomerContainer>
      </motion.div>
    </ConsultaProvider>
  )
}
