import { Routes, Route, useLocation } from 'react-router-dom'
import { Animais } from '../pages/components/animais/animais'
import { Clientes } from '../pages/components/clientes/clientes'
import { Funcionarios } from '../pages/components/funcionarios/funcionarios'
import { Consultas } from '../pages/components/consultas/consultas'

export function Router() {
  const location = useLocation()
  return (
    <Routes
      key={location.pathname}
      location={location}
    >
      <Route
        path="/animais"
        element={<Animais />}
      />
      <Route
        path="/clientes"
        element={<Clientes />}
      />
      <Route
        path="/funcionarios"
        element={<Funcionarios />}
      />
      <Route
        path="/consultas"
        element={<Consultas />}
      />
    </Routes>
  )
}
