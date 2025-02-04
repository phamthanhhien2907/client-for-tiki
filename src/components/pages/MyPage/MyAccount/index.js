import React from "react";
import Account from "../../../../pages/myapp/account";
import { Navbar } from "../../../organisms";
import { Outlet } from "react-router-dom";

const MyAccount = () => {
  return (
    <div className="w-main flex">
      <div className="flex-2">
        <Navbar />
      </div>
      <div className="flex-8">
        <Outlet />
      </div>
    </div>
  );
};

export default MyAccount;
