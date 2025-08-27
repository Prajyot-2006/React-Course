import { StrictMode } from 'react'   // no ./ that means its gonna load with node_modules not from a file or folder
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'  // 1st we need to import browserrouter from the react-router package 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
    
)
