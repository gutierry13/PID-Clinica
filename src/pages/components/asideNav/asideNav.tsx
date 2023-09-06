import { AsideNavContainer } from './styles'
import { Link } from 'react-router-dom'
import {
  FaUser,
  FaDog,
  FaCalendarAlt,
  FaInfoCircle,
  FaFacebookF,
} from 'react-icons/fa'
import { GiHealthNormal } from 'react-icons/gi'
import { BiBone } from 'react-icons/bi'
import { motion } from 'framer-motion'
import Logo from '../../../assets/logo.svg'
import FooterImage from '../../../assets/footer-image.png'
export function AsideNav() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <AsideNavContainer>
        <div>
          <img src={Logo} alt="Logo pata de cachorro" />
        </div>
        <div className="links">
          <Link to="/PID-Clinica/animais">
            <FaDog />
            Animais
          </Link>
          <Link to="/PID-Clinica/funcionarios">
            <GiHealthNormal />
            funcionarios
          </Link>
          <Link to="/PID-Clinica/consultas">
            <FaCalendarAlt />
            consultas
          </Link>
          <Link to="/PID-Clinica/clientes">
            <FaUser />
            clientes
          </Link>
          <Link to="/PID-Clinica/adocoes">
            <BiBone />
            Adoções
          </Link>
          <Link to="/PID-Clinica/infoadocoes">
            <FaInfoCircle />
            Info-Adoções
          </Link>
          <Link to="/PID-Clinica/social">
            <FaFacebookF />
            Social
          </Link>
        </div>
        <div>
          <img src={FooterImage} alt="Logo pata de cachorro" />
        </div>
      </AsideNavContainer>
    </motion.div>
  )
}
