import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthContextProvider } from './service/auth.jsx';

// Obtenha o elemento 'root' do DOM
const rootElement = document.getElementById('root');

if (rootElement) {
  // Renderize o aplicativo se o elemento 'root' existir
  createRoot(rootElement).render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
} else {
  console.error("Element with id 'root' not found in the DOM.");
}
