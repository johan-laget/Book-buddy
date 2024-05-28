import Headerauth from "@/layout/headerauth";
import React from "react";
import { Outlet } from "react-router-dom";


const RootAuth = () => {
  return (
    <div>
        <Headerauth/>
        <Outlet />
    </div>  
  );
};

export default RootAuth;
