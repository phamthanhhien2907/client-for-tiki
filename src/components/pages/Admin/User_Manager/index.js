import React from "react";
import { Outlet } from "react-router-dom";

const UserManager = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UserManager;
