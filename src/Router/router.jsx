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
        element: <CreateAssignmentPage />,
      },
      {
        path: "assignment/:id",
        loader: ({params}) =>
          axios(`${import.meta.env.VITE_base_api}/assignment/${params.id}`),
        element: <DetailsPage />,
      },
      {
        path: "assignments",
        element: <AssignmentPage />,
      },
      {
        path: "my-assignments",
        element: <MySubittedAssignmentsPage />,
      },
      {
        path: "pending-assignments",
        element: <PendingAssignmentsPage />,
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