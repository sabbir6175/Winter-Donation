import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'animate.css';
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Provider/authProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
