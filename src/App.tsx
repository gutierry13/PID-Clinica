import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { AsideNav } from './pages/components/asideNav/asideNav'
import { GlobalStyle } from './globalStyles'
import { ModalProvider } from './pages/components/clientes/modalContext'
function App() {
  return (
    <BrowserRouter>
      <AsideNav />
      <GlobalStyle />
      <ModalProvider>
        <Router />
      </ModalProvider>
    </BrowserRouter>
  )
}

export default App
