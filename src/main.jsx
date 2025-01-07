import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Global } from './Global.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global/>
    <App />
  </StrictMode>,
)
