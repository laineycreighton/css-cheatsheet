//----- IMPORTS -----//
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "normalize.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//----- EXPORTS -----//
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dev",
        element: <Dev />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
