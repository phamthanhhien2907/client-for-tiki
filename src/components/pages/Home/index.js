import React, { useEffect, useState } from "react";
import { Footer, Slidebar } from "../../organisms";
import Banner from "../../organisms/Banner";
import { useLocation } from "react-router-dom";
import path from "../../../utils/path";
import Product from "../../organisms/Products";
import { useSelector } from "react-redux";

const Home = () => {
  const location = useLocation();

  return (
    <div className="w-main flex mt-3 h-full">
      <div className="flex-2 flex rounded-md bg-opacity-90 bg-white mx-6 h-screen">
        <Slidebar />
      </div>
      <div className="flex flex-col justify-start items-start flex-8 rounded-lg bg-opacity-90 mr-4 h-screen overflow-y-scroll scrollbar-hide">
        <div className="flex flex-col gap-2">
          <Banner />
          <Product />
        </div>
        {location.pathname.slice(1) === path.HOME ? <Footer /> : ""}
      </div>
    </div>
  );
};

export default Home;
