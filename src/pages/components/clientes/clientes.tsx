import { motion } from 'framer-motion'
import { TabelaClientes } from './tabelaCliente'
import { CustomerContainer } from '../../../globalStyles'
import { ButtonOpenModal } from '../buttons'
import { ClienteModal } from './clienteModal'
import { ClienteContext, ClienteProvider } from './clienteContext'

export function Clientes() {
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              eaque maiores assumenda. Iusto perspiciatis, placeat quia, velit
              enim molestias commodi, libero quo expedita est ipsa omnis
              obcaecati! Minima, est debitis.
            </p>
          </div>
          {/* <div
          onClick={handleOpenNewClienteModal}
          className="btn"
        >
          <AddButton customer="Clientes" />
        </div> */}
          <ButtonOpenModal customer="cliente">
            <ClienteModal />
          </ButtonOpenModal>
          <TabelaClientes />
        </CustomerContainer>
      </motion.div>
    </ClienteProvider>
  )
}
