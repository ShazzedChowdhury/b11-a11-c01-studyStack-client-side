import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import CreateAssignmentPage from '../pages/CreateAssignmentPage/CreateAssignmentPage';
import AssignmentPage from '../pages/AssignmentsPage/AssignmentPage';
import MySubittedAssignmentsPage from '../pages/MySubmittedAssignmentsPage/MySubittedAssignmentsPage';
import PendingAssignmentsPage from '../pages/PendingAssignmentsPage/PendingAssignmentsPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "create-assignment",
                element: <CreateAssignmentPage />
            },
            {
                path: "assignments",
                element: <AssignmentPage />
            },
            {
                path: "my-assignments",
                element: <MySubittedAssignmentsPage />
            },
            {
                path: "pending-assignments",
                element: <PendingAssignmentsPage />
            }
        ]
    }
])

export default router;