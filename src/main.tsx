import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import CursorWand from './CursorWand'
import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <App />
      <CursorWand />
    </>
  </StrictMode>,
)
