import React, { useCallback, useEffect } from "react";
import { Link, Outlet, Route, useLocation } from "react-router-dom";

import { Footer, Header } from "../../components/organisms";
import HeaderMenu from "../../components/organisms/HeaderMenu";
import path from "../../utils/path";
const Public = () => {
  const location = useLocation();
  return (
    <div className="w-full flex flex-col items-center">
      {location.pathname === `/${path.CHECKOUT}${path.PAYMENT}` ? (
        ""
      ) : (
        <div className="flex w-full bg-opacity-90 bg-white items-center">
          <Header />
          <HeaderMenu />
        </div>
      )}

      <div className="w-full flex items-center flex-col h-full">
        <Outlet />
        <div className="">
          {location.pathname.slice(1) === path.HOME ||
          location.pathname === `/${path.CHECKOUT}${path.PAYMENT}` ? (
            ""
          ) : (
            <Footer />
          )}
        </div>
      </div>
    </div>
  );
};

export default Public;
