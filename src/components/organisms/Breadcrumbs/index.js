import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import icons from "../../../utils/icons";
const { IoIosArrowForward } = icons;
const BreadCrumbs = ({ title, category }) => {
  const routes = [
    { path: "/:category", breadcrumb: category },
    { path: "/", breadcrumb: "Trang chủ" },
    {
      path: "/:category/:id/:title",
      breadcrumb: title,
    },
  ];
  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <div className="ml-8 pt-2 w-full flex items-center ">
      {breadcrumbs
        ?.filter((el) => !el.match?.route === false)
        ?.map(({ match, breadcrumb }, index, self) => (
          <NavLink key={match.pathname} to={match.pathname}>
            <div className="flex items-center text-sm text-gray-400">
              {breadcrumb}
              {index !== self.length - 1 && <IoIosArrowForward />}
            </div>
          </NavLink>
        ))}
    </div>
  );
};

export default BreadCrumbs;
