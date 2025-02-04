import React from "react";
import { Link, NavLink } from "react-router-dom";
import path from "../../../utils/path";
import { categories, navigation } from "../../../utils/constant";
import { createSlug } from "../../../utils/helper";

const Slidebar = () => {
  return (
    <div className="overflow-y-auto h-screen scrollbar-hide ">
      <p className="font-semibold px-2 py-2 text-sm">Danh mục</p>
      {categories.map((el, index) => (
        <div className="py-2 px-4 mx-2 break-words whitespace-normal hover:rounded-lg hover:bg-gray-200 text-sm">
          <NavLink
            key={el.id}
            to={createSlug(el.categoryName)}
            categoryName={el.categoryName}
            className="flex gap-2 items-center "
          >
            <img
              className="w-[32px] h-[32px]"
              src={el.categoryImage}
              alt="categoryImage"
            />
            <p>{el.categoryName}</p>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Slidebar;
