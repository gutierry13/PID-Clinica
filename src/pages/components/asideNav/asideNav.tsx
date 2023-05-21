import { AsideNavContainer } from "./styles";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
export function AsideNav(){
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
    <AsideNavContainer >
      <Link to="/animais">Animais</Link>
      <Link to="/funcionarios">funcionarios</Link>
      <Link to="/consultas">consultas</Link>
      <Link to="/clientes">clientes</Link>
    </AsideNavContainer>
     </motion.div>

  )
}