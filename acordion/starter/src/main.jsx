import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {AccordionApp} from './AccordionApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AccordionApp />
  </StrictMode>,
)
