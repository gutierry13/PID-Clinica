import { motion} from "framer-motion";
import { CustomerContainer } from "../../../globalStyles";
import { AddButton } from "../buttons";
import { TabelaConsultas } from "./tabelaConsultas";

export function Consultas(){
  return (
    <motion.div
    initial={{ x: -50 , opacity: 0}}
    animate={{ x: 0,opacity: 1}}
    transition={{ duration: 0.2 }}
    exit={{ x:-50,opacity: 0}}
    >
      <CustomerContainer>
      <div className="text">
        <h1>Consultas</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore autem nulla, fugiat odit earum, ipsa eaque obcaecati eligendi unde distinctio quas, optio placeat! Aut quae temporibus perferendis maiores sequi commodi!</p>
      </div>
      <AddButton customer='Consultas'/>
      <TabelaConsultas/>
      </CustomerContainer>
    </motion.div>
  )
}