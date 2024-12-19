import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PizzaMenu } from './PizzaMenu'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <PizzaMenu/>
  </StrictMode>,
)
