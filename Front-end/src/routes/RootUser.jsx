import React from "react";
import Header from "../layout/header.jsx"
import { Outlet } from "react-router-dom";

const RootUser = () => {
  return (
    <div> 
      <Header />
      <Outlet/>

    </div>  
  );
};

export default RootUser;
