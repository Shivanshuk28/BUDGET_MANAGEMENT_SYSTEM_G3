import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  {/* <Router> */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  {/* </Router> */}
  </AuthProvider>
)
