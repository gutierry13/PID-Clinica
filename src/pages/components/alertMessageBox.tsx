import { useState } from 'react'
import { ErrorAlert, SuccessAlert, WarningAlert } from './alertBox'
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineWarning,
} from 'react-icons/ai'
interface AlertMessageBoxProps {
  alertType: string
  content: string
  visible?: boolean
}
export function AlertMessageBox({
  alertType,
  content,
  visible = false,
}: AlertMessageBoxProps) {
  const [active, setActive] = useState(visible)

  setTimeout(() => {
    setActive(false)
  }, 2500)
  if (alertType === 'success') {
    return (
      <SuccessAlert active={active}>
        <AiOutlineCheck />
        <span>{content}</span>
        <span className="load"></span>
      </SuccessAlert>
    )
  } else if (alertType === 'warning') {
    return (
      <WarningAlert active={active}>
        <AiOutlineWarning />
        <span>{content}</span>
        <span className="load"></span>
      </WarningAlert>
    )
  } else {
    return (
      <ErrorAlert active={active}>
        <AiOutlineClose />
        <span>{content}</span>
        <span className="load"></span>
      </ErrorAlert>
    )
  }
}
