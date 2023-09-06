import { Routes, Route, useLocation } from 'react-router-dom'
import { Animais } from '../pages/components/animais/animais'
import Adocoes from '../pages/components/adocoes/adocoes'
import { Funcionarios } from '../pages/components/funcionarios/funcionarios'
import { Consultas } from '../pages/components/consultas/consultas'
import { Clients } from '../pages/components/clientes/clients'
// Providers
import { ModalProvider } from '../pages/components/clientes/modalContext'
import { AnimalModalProvider } from '../pages/components/animais/modalContext'
import { AdocaoModalProvider } from '../pages/components/adocoes/modalContext'

export function Router() {
  const location = useLocation()
  return (
    <ModalProvider>
      <AnimalModalProvider>
        <AdocaoModalProvider>
          <Routes key={location.pathname} location={location}>
            <Route path="/PID-Clinica/animais" element={<Animais />} />
            <Route path="/PID-Clinica/clientes" element={<Clients />} />
            <Route
              path="/PID-Clinica/funcionarios"
              element={<Funcionarios />}
            />
            <Route path="/PID-Clinica/consultas" element={<Consultas />} />
            <Route path="/PID-Clinica/adocoes" element={<Adocoes />} />
          </Routes>
        </AdocaoModalProvider>
      </AnimalModalProvider>
    </ModalProvider>
  )
}
