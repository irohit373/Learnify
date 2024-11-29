// Don't Touch this
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Import Components here if necessaary if not work only in App.jsx
import App from './App.jsx'

// Linking the Web Frame with Root
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
