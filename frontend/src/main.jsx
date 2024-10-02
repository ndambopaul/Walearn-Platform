import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UserContextProvider } from "./context/UserContext.jsx"
import { DataContextProvider } from './context/DataContext.jsx'
import { AuthProvider } from './context/AuthenticationContext.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <UserContextProvider>
      <DataContextProvider>
      <App />
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
         
        />
      </DataContextProvider>
    </UserContextProvider>
    </AuthProvider>
  </StrictMode>,
)
