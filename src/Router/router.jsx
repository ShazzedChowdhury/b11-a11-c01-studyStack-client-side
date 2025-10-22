import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import CreateAssignmentPage from '../pages/CreateAssignmentPage/CreateAssignmentPage';
import AssignmentPage from '../pages/AssignmentsPage/AssignmentPage';
import MySubittedAssignmentsPage from '../pages/MySubmittedAssignmentsPage/MySubittedAssignmentsPage';
import PendingAssignmentsPage from '../pages/PendingAssignmentsPage/PendingAssignmentsPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import Register from '../pages/RegisterPage/Register';
import axios from 'axios';
import Loading from '../components/Loading/Loading';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import CoursesPage from '../pages/CoursesPage/CoursesPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "create-assignment",
        element: (
          <PrivateRoute>
            <CreateAssignmentPage />
          </PrivateRoute>
        ),
      },
      {
        path: "assignment/:id",
        element: (
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "assignments",
        element: <AssignmentPage />,
      },
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "my-assignments",
        element: (
          <PrivateRoute>
            <MySubittedAssignmentsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "pending-assignments",
        element: (
          <PrivateRoute>
            <PendingAssignmentsPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;