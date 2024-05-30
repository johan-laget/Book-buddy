import React from "react";
import { Outlet } from "react-router-dom";


const RootAuth = () => {
  return (
    <div>
        <Outlet />
    </div>  
  );
};

export default RootAuth;
