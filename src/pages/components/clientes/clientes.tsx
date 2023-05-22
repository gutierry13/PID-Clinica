import { motion } from 'framer-motion'
import { TabelaClientes } from './tabelaCliente'
import { CustomerContainer } from '../../../globalStyles'
import { ClienteModal } from './clienteModal'
import { ClienteProvider } from './clienteContext'
import { useState } from 'react'

export function Clientes() {
  const [newClienteModalOpen, setNewClienteModalOpen] = useState(false)
  const [clienteSelecionado, setClienteSelecionado] = useState(null)
  function handleOpenNewClienteModal() {
    setNewClienteModalOpen(true)
  }
  function handleCloseNewClienteModal() {
    setNewClienteModalOpen(false)
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
          <button onClick={handleOpenNewClienteModal}>Abrir modal</button>
          <ClienteModal
            open={newClienteModalOpen}
            close={handleCloseNewClienteModal}
            forceOpen={handleOpenNewClienteModal}
          />
          <TabelaClientes
            open={newClienteModalOpen}
            close={handleCloseNewClienteModal}
          />
        </CustomerContainer>
      </motion.div>
    </ClienteProvider>
  )
}
