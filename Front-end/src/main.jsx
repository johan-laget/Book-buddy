import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../src/routes/Root";
import RootAuth from "../src/routes/RootAuth";
import RootUser from "../src/routes/RootUser";
import LoginForm from "./pages/LoginForm";
import Favoris from "./pages/Favoris";
import Profil from './pages/Profil'
import RegisterForm from "./pages/RegisterForm";
import ErrorPage from "../src/routes/Errorpage";
import HomeUser from "./pages/HomeUser";
import "../src/global.css";
import { AuthRequired } from "./lib/auth";

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
    // loader: <AuthRequired/>,
    children: [
      {
        path: "/user",
        element: <HomeUser />, 
        },
      {
      path: "profil",
      element: <Profil />, 
      },
      {
      path: "favoris",
      element: <Favoris />,
      }
      ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
