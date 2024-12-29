import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FlashCards } from './FlashCards'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlashCards/>
  </StrictMode>,
)
