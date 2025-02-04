import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import icons from "../../../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { apiGetProduct } from "../../../../services/productService";
import { apiRemoveCart, apigetAllUser } from "../../../../services/userService";
import { getCurrent } from "../../../../stores/actions/userAction";
import { formatMoney } from "../../../../utils/helper";
import path from "../../../../utils/path";
import { Button } from "../../../atoms";
import { FaEdit } from "react-icons/fa";
const { RiDeleteBin6Line } = icons;

const EditUser = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState(null);
  const getApiProduct = async () => {
    const response = await apigetAllUser();

    if (response?.success) setUsers(response?.user);
    // if (response?.success) setProducts(response?.products);
  };
  console.log(users);
  const handleRemoveProduct = async (id) => {
    const response = await apiRemoveCart(id);
    if (response?.success) dispatch(getCurrent());
    localStorage.removeItem(id);
  };
  useEffect(() => {
    getApiProduct();
  }, []);

  return (
    <div className="w-full flex flex-col h-[541px]  overflow-y-auto scrollbar-hide  ">
      <div className="w-full flex">
        <div className="ml-4 w-full flex flex-col">
          <div className="flex flex-col w-full">
            <h3 className="text-xl font-medium p-4 pb-0 ">Tất cả người dùng</h3>
            <div className="m-4 flex ">
              <div className="bg-white w-full p-4 rounded-xl">
                <div className="flex justify-between items-center ">
                  <div className="flex gap-2 w-[324px] ">
                    <span className="pl-4"> Tất cả </span>
                    <span> ({users?.length} người dùng)</span>
                  </div>

                  <span>Họ và tên</span>

                  <span>Màu sắc</span>
                  <span>Số lượng</span>

                  <span>Sửa</span>
                  <span>
                    <RiDeleteBin6Line />
                  </span>
                </div>
              </div>
            </div>
            {users?.map((el) => (
              <div className="mx-4   flex " key={el._id}>
                <div className="bg-white w-full p-4 rounded-xl">
                  <div className="flex justify-between items-center ">
                    <div className=" w-[210px] gap-2 flex items-center ">
                      <input
                        type="checkbox"
                        id={el?._id}
                        // checked={Boolean(getLocal(el?._id))}
                      />

                      <div className="flex flex-col gap-1 w-[90px]">
                        <span className="overflow-ellipsis overflow-hidden text-sm font-normal">
                          <img
                            src={el?.avatar}
                            className="h-[60px] w-[60px]"
                            alt=""
                          />
                        </span>

                        {/* <div className="flex gap-2 text-xs  font-normal">
                          <span className="w-[32px] h-[16px]">
                            <CiDeliveryTruck className="w-full" />
                            <img
                              src="https://salt.tikicdn.com/cache/w96/ts/tka/65/be/89/d0c3208134f19e4bab8b50d81b41933a.png"
                              alt=""
                            />
                          </span>
                        </div> */}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm flex  flex-1 gap-2 flex-col text-gray-400">
                        {el?.fullname}
                      </span>
                    </div>

                    <div className="flex gap-8 items-center justify-center">
                      <span className="flex flex-col">
                        {el?.cart?.map((cart, index) => (
                          <span className="flex flex-col gap-1">
                            Màu {index + 1} : {cart?.color}
                          </span>
                        ))}
                      </span>
                      <span className="flex flex-col">
                        {el?.cart?.map((cart, index) => (
                          <span className="flex flex-col gap-1">
                            Màu {index + 1} : {cart?.quantity}
                          </span>
                        ))}
                      </span>
                    </div>

                    <span onClick={() => handleRemoveProduct(el?.product?._id)}>
                      <FaEdit />
                    </span>
                    <span onClick={() => handleRemoveProduct(el?.product?._id)}>
                      <RiDeleteBin6Line />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
