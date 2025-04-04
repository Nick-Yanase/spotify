import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>  {/*  renderiza todos os componentes 2 vezes, para testar a robutez projeto, pois se tiver erro, aprecerá 2 vezes, fazendo com que não passe despercebido */}
    <App /> {/*  este app esta sendo rederizado na div com id=root */}
  </StrictMode>,
)
