import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ImgGrid from './components/ImgGrid'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ImgGrid />
  </StrictMode>,
)

