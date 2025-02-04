import React, { memo } from "react";
import banner from "../../../assets/images/banner.webp";
import { Link } from "react-router-dom";
import path from "../../../utils/path";
const Banner = () => {
  return (
    <div className="bg-white rounded-md w-full flex items-center justify-center ">
      <div className="">
        <img src={banner} alt="" className="w-[306px] h-[306px] rounded-xl" />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex gap-3">
          {Array.from(Array(4).keys())?.map((el) => (
            <Link to={path.LOGIN} key={el}>
              <img
                src={banner}
                alt=""
                className="w-[146px] h-[146px] rounded-xl"
              />
            </Link>
          ))}
        </div>
        <div className="flex gap-3">
          {Array.from(Array(4).keys())?.map((el) => (
            <Link key={el}>
              <img
                src={banner}
                alt=""
                className="w-[146px] h-[146px] rounded-xl"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Banner);
