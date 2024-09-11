import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthContextProvider } from './service/auth.tsx'

createRoot(document.getElementById('root')!).render(

    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  
)
