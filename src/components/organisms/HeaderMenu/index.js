import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { navigation } from "../../../utils/constant";
import path from "../../../utils/path";
import { logout } from "../../../stores/actions/authAction";
import { apigetCurrent } from "../../../services/userService";
import cart from "../../../assets/images/cart.png";
import { getCurrent } from "../../../stores/actions/userAction";

const HeaderMenu = () => {
  const { isLoggedIn, token, current } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isHovering, setIsHovering] = useState(false);
  const { currentData } = useSelector((state) => state.user);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     let response = await apigetCurrent(token);
  //     console.log(response);
  //     if (response?.err === 0) {
  //       setUserData(response?.response);
  //     } else {
  //       setUserData({});
  //     }
  //   };
  //   fetchUser();
  // }, [isLoggedIn]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(getCurrent());
    }, 100);
  }, [isLoggedIn]);

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  return (
    <>
      {current !== "admin" ? (
        <div className="flex items-start flex-4 py-2 justify-end ">
          {navigation.map((el) => {
            if (el.children) {
              return (
                <div className="relative " key={el.id}>
                  <NavLink
                    to={!isLoggedIn && `/${path.LOGIN}`}
                    className={({ isActive }) =>
                      isActive
                        ? `${el.css}text-blue-500 hover:bg-blue-300 `
                        : `hover:bg-gray-200 text-gray-500 ${el.css}`
                    }
                    onClick={() => setShowDropdown(!showDropdown)}
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={el.image}
                      className="w-[24px] h-[24px] fill-blue-500"
                      alt={el.name}
                    />
                    <span className="text-sm font-medium">{el.value}</span>
                  </NavLink>

                  {showDropdown ? (
                    <ul className="absolute bg-white z-10 left-[-120px] w-[250px]  rounded-md shadow-md mt-1 ">
                      {el.children.map((child) => (
                        <li
                          onClick={() => {
                            if (child.id === 5) {
                              navigate("/");
                              dispatch(logout());
                            }
                            setShowDropdown(false);
                          }}
                          key={child.id}
                        >
                          <NavLink
                            to={child.path}
                            key={el.id}
                            className={({ isActive }) =>
                              isActive
                                ? `hover:bg-gray-200  text-gray-500 w-full hover:rounded-md flex gap-1 justify-start h-[40px]  `
                                : ""
                            }
                          >
                            <span className="text-sm font-medium px-4 py-4">
                              {child.value}
                            </span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="hidden"></div>
                  )}
                </div>
              );
            } else {
              return (
                <NavLink
                  to={
                    el.id === 1
                      ? `/${path.HOME}`
                      : isLoggedIn
                      ? el.path
                      : `/${path.LOGIN}`
                  }
                  key={el.id}
                  className={({ isActive }) =>
                    isActive
                      ? `${el.css}text-blue-500 hover:bg-blue-300 `
                      : `hover:bg-gray-200 text-gray-500 ${el.css}`
                  }
                >
                  <img
                    src={el.image}
                    className="w-[24px] h-[24px] fill-blue-500"
                    alt={el.name}
                  />
                  <span className="text-sm font-medium">{el.value}</span>
                </NavLink>
              );
            }
          })}
          <span className="after:pr-[1px] after:bg-gray-300 after:mr-[20px] after:align-center after:mt-2 mt-2 "></span>
          <Link
            className="flex mr-[30px]"
            to={isLoggedIn ? `/${path.CHECKOUT}${path.CART}` : `/${path.LOGIN}`}
          >
            <div className="flex ">
              <img
                src={cart}
                alt=""
                className="hover:rounded-md flex my-1 justify-center items-center
      w-[30px] h-[30px]  "
              />
              <span className="border text-white text-xs font-semibold w-[25px] h-[15px] justify-center flex items-center bg-red-500 rounded-[50%] border-red-500">
                {isLoggedIn ? currentData?.cart?.length : 0}
              </span>
            </div>
          </Link>
          {/* image: cart, css: "hover:rounded-md flex gap-1 justify-center items-center
      w-[40px] h-[40px] before:h-[20px] before:bg-gray-300 before:mr-[20px]
      before:ml-[-20px] before:align-center ml-[30px] mr-[10px]
      before:pr-[1px]", path: , */}
        </div>
      ) : (
        // admin
        <div className="flex items-start flex-4 py-2 justify-end ">
          {navigation.map((el) => {
            if (el.childrenAdmin) {
              return (
                <div className="relative " key={el.id}>
                  <NavLink
                    to={!isLoggedIn && `/${path.LOGIN}`}
                    className={({ isActive }) =>
                      isActive
                        ? `${el.css}text-blue-500 hover:bg-blue-300 `
                        : `hover:bg-gray-200 text-gray-500 ${el.css}`
                    }
                    onClick={() => setShowDropdown(!showDropdown)}
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={el.image}
                      className="w-[24px] h-[24px] fill-blue-500"
                      alt={el.name}
                    />
                    <span className="text-sm font-medium">{el.value}</span>
                  </NavLink>

                  {showDropdown ? (
                    <ul className="absolute bg-white z-10 left-[-120px] w-[250px]  rounded-md shadow-md mt-1 ">
                      {el.childrenAdmin.map((child) => (
                        <li
                          onClick={() => {
                            if (child.id === 5) {
                              navigate("/");
                              dispatch(logout());
                            }
                            setShowDropdown(false);
                          }}
                          key={child.id}
                        >
                          <NavLink
                            to={child.path}
                            key={el.id}
                            className={({ isActive }) =>
                              isActive
                                ? `hover:bg-gray-200  text-gray-500 w-full hover:rounded-md flex gap-1 justify-start h-[40px]  `
                                : ""
                            }
                          >
                            <span className="text-sm font-medium px-4 py-4">
                              {child.value}
                            </span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="hidden"></div>
                  )}
                </div>
              );
            } else {
              return (
                <NavLink
                  to={
                    el.id === 1
                      ? `/${path.HOME}`
                      : isLoggedIn
                      ? el.path
                      : `/${path.LOGIN}`
                  }
                  key={el.id}
                  className={({ isActive }) =>
                    isActive
                      ? `${el.css}text-blue-500 hover:bg-blue-300 `
                      : `hover:bg-gray-200 text-gray-500 ${el.css}`
                  }
                >
                  <img
                    src={el.image}
                    className="w-[24px] h-[24px] fill-blue-500"
                    alt={el.name}
                  />
                  <span className="text-sm font-medium">{el.value}</span>
                </NavLink>
              );
            }
          })}
          <span className="after:pr-[1px] after:bg-gray-300 after:mr-[20px] after:align-center after:mt-2 mt-2 "></span>
          <Link
            className="flex mr-[30px]"
            to={isLoggedIn ? `/${path.CHECKOUT}${path.CART}` : `/${path.LOGIN}`}
          >
            <div className="flex ">
              <img
                src={cart}
                alt=""
                className="hover:rounded-md flex my-1 justify-center items-center
      w-[30px] h-[30px]  "
              />
              <span className="border text-white text-xs font-semibold w-[25px] h-[15px] justify-center flex items-center bg-red-500 rounded-[50%] border-red-500">
                {isLoggedIn ? currentData?.cart?.length : 0}
              </span>
            </div>
          </Link>
          {/* image: cart, css: "hover:rounded-md flex gap-1 justify-center items-center
      w-[40px] h-[40px] before:h-[20px] before:bg-gray-300 before:mr-[20px]
      before:ml-[-20px] before:align-center ml-[30px] mr-[10px]
      before:pr-[1px]", path: , */}
        </div>
      )}
    </>
  );
};

export default HeaderMenu;
