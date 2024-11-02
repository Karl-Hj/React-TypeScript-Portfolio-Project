import { createBrowserRouter, Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

import { Container } from "../components/Container";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      { path: "home", element: <Container /> },
      { path: "hotels", element: <Container /> },
    ],
  },
]);
