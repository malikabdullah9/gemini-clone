import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
