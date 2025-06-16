import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Router/router.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import AssignmentProvider from './context/AssignmentProvider.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AssignmentProvider>
        <RouterProvider router={router} />
      </AssignmentProvider>
    </AuthProvider>
  </StrictMode>
);
