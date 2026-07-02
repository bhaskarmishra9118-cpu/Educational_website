import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SocketProvider from './context/AppProvider.jsx'

createRoot(document.getElementById('root')).render(
  <provider store={store}>
  <SocketProvider>
  <BrowserRouter>
  
    <App />
  </BrowserRouter>
  </SocketProvider>

  </provider>
  
)
