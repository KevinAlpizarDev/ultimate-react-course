import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TravelList } from './TravelList'
createRoot(document.getElementById('root')).render(
  <StrictMode>
<TravelList/>
  </StrictMode>,
)
