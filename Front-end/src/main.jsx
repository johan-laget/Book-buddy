import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
}
from "react-router-dom";
import "./global.css";
import Root from "/src/routes/Root.jsx";
import ErrorPage from "./error-page";
import Favoris from "./pages/Favoris.jsx"; // Assurez-vous que ce chemin est correct

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "favoris",
        element: <Favoris />,
      },
      // Ajoutez d'autres chemins enfants ici si nécessaire
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
