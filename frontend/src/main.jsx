import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UserContextProvider } from "./context/UserContext.jsx"
import { DataContextProvider } from './context/DataContext.jsx'
import { AuthProvider } from './context/AuthenticationContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <UserContextProvider>
      <DataContextProvider>
      <App />
      </DataContextProvider>
    </UserContextProvider>
    </AuthProvider>
  </StrictMode>,
)
