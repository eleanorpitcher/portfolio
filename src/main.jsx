import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProviderWrapper } from './contexts/theme.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProviderWrapper>
    <App />
    </ThemeProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
)
