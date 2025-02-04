import React, { useEffect, useState } from "react";
import { apigetCurrent } from "../../../services/userService";
import { useDispatch, useSelector } from "react-redux";
import { customerTabs, customerTabsAdmin } from "../../../utils/constant";
import avatar from "../../../assets/images/avatar.png";
import Spinner from "react-bootstrap/Spinner";
import { getCurrent } from "../../../stores/actions/userAction";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [activedTab, setActivedTab] = useState(1);
  const dispatch = useDispatch();
  const { token, isLoggedIn, current } = useSelector((state) => state.auth);
  const { currentData } = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(getCurrent());
    }, 100);
  }, [isLoggedIn]);

  // useEffect(() => {
  //   const fetchCurrent = async () => {
  //     const response = await apigetCurrent();
  //     console.log(response);
  //   };
  //   isLoggedIn && fetchCurrent();
  // }, [isLoggedIn]);

  // useEffect(() => {
  //   if(activeTab === 1) setcurrentData()
  // }, [activeTab])
  return (
    <div className="flex-3 flex flex-col m-4 px-4 w-full ">
      {currentData ? (
        <div className="flex gap-2 ">
          <img
            src={
              currentData && currentData.avatar ? currentData.avatar : avatar
            }
            alt="avatar"
            className="w-[45px] h-[45px]  border rounded-[50%]"
          />
          <div className="flex flex-col">
            Tài khoản của
            <span className="font-medium text-lg">{currentData.fullname}</span>
          </div>
        </div>
      ) : (
        <div className="flex gap-2">
          <Spinner />
          <span className="font-medium text-lg">Đang tải...</span>
        </div>
      )}
      {current === "admin"
        ? customerTabsAdmin.map((el) => (
            <>
              <NavLink to={el.path} key={el.id}>
                <div
                  onClick={() => el.id === 1 && setActivedTab(el.id)}
                  className={`flex px-2 py-2 items-center gap-2 ${
                    activedTab === +el.id
                      ? "bg-gray-300 border-b-0 "
                      : " text-gray-800"
                  }`}
                >
                  {el.icon}
                  <span className="">{el.value}</span>
                </div>
              </NavLink>
              <span className="flex w-ful justify-end px-4">
                {el?.productChildren ? (
                  <div>
                    {el?.productChildren?.map((els) => (
                      <NavLink to={els?.path}>
                        <div
                          onClick={() => setActivedTab(els.id)}
                          className={`flex px-2 py-2 items-center gap-4 ${
                            activedTab === +els.id
                              ? "bg-gray-300 border-b-0 "
                              : " text-gray-800"
                          }`}
                        >
                          {els.value}
                        </div>
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col w-ful justify-end px-4">
                    <span className="">
                      {el?.userChildren?.map((els) => (
                        <NavLink to={els?.path}>
                          <div
                            onClick={() => setActivedTab(els.id)}
                            className={`flex px-2 py-2 items-center gap-4 ${
                              activedTab === +els.id
                                ? "bg-gray-300 border-b-0 "
                                : " text-gray-800"
                            }`}
                          >
                            {els.value}
                          </div>
                        </NavLink>
                      ))}
                    </span>
                  </div>
                )}
              </span>
            </>
          ))
        : customerTabs.map((el) => (
            <NavLink to={el.id === 3 ? `/sales/${el.path}` : ""} key={el.id}>
              <div
                onClick={() => setActivedTab(el.id)}
                className={`flex px-2 py-2 items-center gap-4 ${
                  activedTab === +el.id
                    ? "bg-gray-300 border-b-0 "
                    : " text-gray-800"
                }`}
              >
                {el.icon}

                <span>{el.value}</span>
              </div>
            </NavLink>
          ))}
    </div>
  );
};

export default Navbar;
