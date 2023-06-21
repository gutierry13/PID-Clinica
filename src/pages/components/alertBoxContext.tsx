import { ReactNode, createContext, useState } from 'react'
interface AlertBoxContextProps {
  alertMessageBoxInfo: {
    visible: boolean
    alertType: string
    content: string
  }
  setAlertMessageBoxInfo: (alertMessageBoxInfo: any) => void
}
export const AlertBoxContext = createContext({} as AlertBoxContextProps)
export function AlertBoxContextProvider({ children }: { children: ReactNode }) {
  const [alertMessageBoxInfo, setAlertMessageBoxInfo] = useState({
    visible: false,
    alertType: '',
    content: '',
  })
  return (
    <AlertBoxContext.Provider
      value={{ alertMessageBoxInfo, setAlertMessageBoxInfo }}
    >
      {children}
    </AlertBoxContext.Provider>
  )
}
