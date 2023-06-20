import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { AsideNav } from './pages/components/asideNav/asideNav'
import { GlobalStyle } from './globalStyles'
import { ModalProvider } from './pages/components/clientes/modalContext'
import { AnimalModalProvider } from './pages/components/animais/modalContext'
function App() {
  return (
    <BrowserRouter>
      <AsideNav />
      <GlobalStyle />
      <ModalProvider>
        <AnimalModalProvider>
          <Router />
        </AnimalModalProvider>
      </ModalProvider>
    </BrowserRouter>
  )
}

export default App
