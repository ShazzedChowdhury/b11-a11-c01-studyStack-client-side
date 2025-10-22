import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Router/router.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import AssignmentProvider from "./context/AssignmentProvider.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotificationProvider from "./context/NotificationProvider.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const queryClient = new QueryClient();
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <NotificationProvider>
            <AssignmentProvider>
              <Elements stripe={stripePromise}>
                <RouterProvider router={router} />
              </Elements>
            </AssignmentProvider>
          </NotificationProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
