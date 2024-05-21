/* imports */
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
}
from "react-router-dom";
import "./global.css";
import Home from "/src/routes/home.jsx";
import ErrorPage from "./error-page";

/* path */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    // children:[
    //   {path: "toto",element:<Headers/>},
      

    // ]
  
  },
]);


/* root */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);