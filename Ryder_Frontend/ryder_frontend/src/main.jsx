import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContextProvider } from './context/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ContextProvider>
  </React.StrictMode>,
)
