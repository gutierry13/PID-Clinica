import { Routes, Route, useLocation } from 'react-router-dom'
import { Animais } from '../pages/components/animais/animais'
import { Funcionarios } from '../pages/components/funcionarios/funcionarios'
import { Consultas } from '../pages/components/consultas/consultas'
import { Clients } from '../pages/components/clientes/clients'
import { ModalProvider } from '../pages/components/clientes/modalContext'
import { AnimalModalProvider } from '../pages/components/animais/modalContext'

export function Router() {
  const location = useLocation()
  return (
    <ModalProvider>
      <AnimalModalProvider>
        <Routes key={location.pathname} location={location}>
          <Route path="/animais" element={<Animais />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/funcionarios" element={<Funcionarios />} />
          <Route path="/consultas" element={<Consultas />} />
        </Routes>
      </AnimalModalProvider>
    </ModalProvider>
  )
}
