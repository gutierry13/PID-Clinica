import { Routes, Route, useLocation } from 'react-router-dom'
import { Animais } from '../pages/components/animais/animais'
import { Funcionarios } from '../pages/components/funcionarios/funcionarios'
import { Consultas } from '../pages/components/consultas/consultas'
import { Clients } from '../pages/components/clientes/clients'

export function Router() {
  const location = useLocation()
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/animais" element={<Animais />} />
      <Route path="/clientes" element={<Clients />} />
      <Route path="/funcionarios" element={<Funcionarios />} />
      <Route path="/consultas" element={<Consultas />} />
    </Routes>
  )
}
