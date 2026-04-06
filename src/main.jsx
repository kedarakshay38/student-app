import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import './index.css'
import App from './App.jsx'
import { initTheme } from './store/useThemeStore'

initTheme()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
