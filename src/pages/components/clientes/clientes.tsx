import {motion} from 'framer-motion'
import { TabelaClientes } from './tabelaCliente'
import { AddButton} from '../buttons'
import { CustomerContainer } from '../../../globalStyles'

export function Clientes(){

  return (
    <motion.div
    initial={{ x: -50 , opacity: 0}}
    animate={{ x: 0,opacity: 1}}
    transition={{ duration: 0.2 }}
    exit={{ x:-50,opacity: 0}}
    >
      <CustomerContainer>
      <div className="text">
        <h1>Clientes</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque maiores assumenda. Iusto perspiciatis, placeat quia, velit enim molestias commodi, libero quo expedita est ipsa omnis obcaecati! Minima, est debitis.</p>
      </div>
      <AddButton customer='Clientes'/>
          <TabelaClientes/>
      </CustomerContainer>
    </motion.div>
  )
}