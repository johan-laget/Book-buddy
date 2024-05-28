import React from "react";
import { Outlet } from "react-router-dom";

const RootUser = () => {
  return (
    <div> 
      <Outlet />
    </div>  
  );
};

export default RootUser;
