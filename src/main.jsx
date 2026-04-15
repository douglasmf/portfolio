import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Global } from './styles/global.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global/>
    <App />
  </StrictMode>,
)
