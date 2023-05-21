import {motion} from 'framer-motion'
import { CustomerContainer } from '../../../globalStyles'
import { AddButton } from '../buttons'
import { TabelaAnimais } from './tabelaAnimais'
export function Animais(){
  return (
    <motion.div
    initial={{ x: -50 , opacity: 0}}
    animate={{ x: 0,opacity: 1}}
    transition={{ duration: 0.2 }}
    exit={{ x:-50,opacity: 0}}
    >
      <CustomerContainer>
      <div className="text">
          <h1>Animais</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolore cumque quos voluptate animi, suscipit voluptatem nisi officia, consectetur fuga voluptates alias minus natus veritatis, cum ab inventore nemo voluptas?</p>
      </div>
      <AddButton customer='Animais'/>
      <TabelaAnimais/>
      </CustomerContainer>
    </motion.div>
  )
}