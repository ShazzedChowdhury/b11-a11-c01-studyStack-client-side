import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />
    }
])

export default router;