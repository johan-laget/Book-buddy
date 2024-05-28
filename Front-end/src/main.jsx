import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../src/routes/Root";
import RootAuth from "../src/routes/RootAuth";
import RootUser from "../src/routes/RootUser";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import ErrorPage from "../src/routes/Errorpage";
import "../src/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <RootAuth/>,
    errorElement: <ErrorPage />,
    children: [
      {
      path: "loginform",
      element: <LoginForm />, 
      },
      {
        path: "registerform",
        element: <RegisterForm />,
  }
      ]
  },
  {
    path: "/user",
    element: <RootUser/>,

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
