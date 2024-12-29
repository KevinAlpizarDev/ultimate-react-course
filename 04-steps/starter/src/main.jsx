import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Steps } from './Steps'
import { Counter}  from './Counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 < Steps/>
{/* <Counter/> */}
  </StrictMode>,
)
