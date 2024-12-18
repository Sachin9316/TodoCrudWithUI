import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/contextApp.jsx'

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>
)