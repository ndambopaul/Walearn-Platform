import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UserContextProvider } from "./context/UserContext.jsx"
import { DataContextProvider } from './context/DataContext.jsx'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <DataContextProvider>
      <App />
      </DataContextProvider>
    </UserContextProvider>
  </StrictMode>,
)
