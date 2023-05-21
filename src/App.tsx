import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { AsideNav } from './pages/components/asideNav/asideNav'
import { GlobalStyle } from './globalStyles'
function App() {
  return (
    <BrowserRouter>
      <AsideNav />
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  )
}

export default App
