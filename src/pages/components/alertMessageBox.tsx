import { useContext, useEffect, useState } from 'react'
import { ErrorAlert, SuccessAlert, WarningAlert } from './alertBox'
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineWarning,
} from 'react-icons/ai'
import { ClientContext } from './clientes/clientContext'

export function AlertMessageBox() {
  const { alertMessageBoxInfo, setAlertMessageBoxInfo } =
    useContext(ClientContext)
  const { alertType, content, visible } = alertMessageBoxInfo
  const [animation, setAnimation] = useState('')
  function showAlert() {
    setAnimation('alert-box 0.6s linear forwards;')
  }
  function hideAlert() {
    setTimeout(() => {
      setAnimation('hideAlert 0.8s linear forwards')
      clearAlert()
    }, 2600)
  }
  function clearAlert() {
    setTimeout(() => {
      setAlertMessageBoxInfo({
        visible: false,
        alertType: '',
        content: '',
      })
    }, 200)
  }

  useEffect(() => {
    if (visible) {
      showAlert()
      hideAlert()
    }
  }, [visible])
  if (alertType === 'success' && visible) {
    return (
      <SuccessAlert active={!!visible} animation={animation}>
        <AiOutlineCheck />
        <span>{content}</span>
        <span className="load"></span>
      </SuccessAlert>
    )
  } else if (alertType === 'warning' && visible) {
    return (
      <WarningAlert active={visible} animation={animation}>
        <AiOutlineWarning />
        <span>{content}</span>
        <span className="load"></span>
      </WarningAlert>
    )
  } else if (alertType === 'error' && visible) {
    return (
      <ErrorAlert active={visible} animation={animation}>
        <AiOutlineClose />
        <span>{content}</span>
        <span className="load"></span>
      </ErrorAlert>
    )
  } else {
    return null
  }
}
