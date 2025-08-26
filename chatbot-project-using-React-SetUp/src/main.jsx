// this code sets up react  like ReactDOM.createRoot(container).render(<App></App>); 
// main.jsx does the same work like ReactDOM.createRoot(container).render(<App></App>); in .html file

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// it calls createRoot , gives it a container and then renders the app component on to the website
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// ReactDOM.createRoot(container).render(<App></App>);  the one other differnec in this code is it wraps the App in a component called StictMode
// StrictMode is a special component provided by react. <StrictMode> gives us some additional checks and warnings when developing our apps 