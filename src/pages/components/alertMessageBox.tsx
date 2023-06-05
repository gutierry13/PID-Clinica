import { useContext } from 'react'
import { ErrorAlert, SuccessAlert, WarningAlert } from './alertBox'
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineWarning,
} from 'react-icons/ai'
import { ClienteContext } from './clientes/clienteContext'

export function AlertMessageBox() {
  const { alertMessageBoxInfo } = useContext(ClienteContext)
  const { alertType, content, visible } = alertMessageBoxInfo
  // const [active, setActive] = useState(visible)

  if (alertType === 'success' && visible) {
    return (
      <SuccessAlert active={visible}>
        <AiOutlineCheck />
        <span>{content}</span>
        <span className="load"></span>
      </SuccessAlert>
    )
  } else if (alertType === 'warning' && visible) {
    return (
      <WarningAlert active={visible}>
        <AiOutlineWarning />
        <span>{content}</span>
        <span className="load"></span>
      </WarningAlert>
    )
  } else if (alertType === 'error' && visible) {
    return (
      <ErrorAlert active={visible}>
        <AiOutlineClose />
        <span>{content}</span>
        <span className="load"></span>
      </ErrorAlert>
    )
  } else {
    return null
  }
}
