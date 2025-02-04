import React, { useCallback, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import icons from "../../../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { apiGetProduct } from "../../../../services/productService";
import { apiRemoveCart } from "../../../../services/userService";
import { getCurrent } from "../../../../stores/actions/userAction";
import { formatMoney } from "../../../../utils/helper";
import path from "../../../../utils/path";
import { Button } from "../../../atoms";
import { FaEdit } from "react-icons/fa";
import { EditProd } from "../..";
import ProductUpdate from "../../ProductUpdate";
const { RiDeleteBin6Line } = icons;

const EditProduct = () => {
  const dispatch = useDispatch();
  const [editProduct, setEditProduct] = useState(null);
  const [products, setProducts] = useState(null);
  const getApiProduct = async () => {
    const response = await apiGetProduct({
      limit: 100,
    });
    if (response?.success) setProducts(response?.products);
  };
  const render = useCallback(() => {
    setEditProduct(!editProduct);
  });
  const handleRemoveProduct = async (id) => {
    const response = await apiRemoveCart(id);
    if (response?.success) dispatch(getCurrent());
    localStorage.removeItem(id);
  };
  useEffect(() => {
    getApiProduct();
  }, [editProduct]);

  return (
    <div className="w-full flex flex-col h-[541px]  overflow-y-auto scrollbar-hide relative ">
      {editProduct && (
        <div className="absolute inset-0 min-h-screen z-50 bg-white">
          <ProductUpdate editProduct={editProduct} render={render} />
        </div>
      )}
      <div className="w-full flex">
        <div className="ml-4 w-full flex flex-col">
          <div className="flex flex-col w-full">
            <h3 className="text-xl font-medium p-4 pb-0 ">Tất cả sản phẩm</h3>
            <div className="m-4 flex ">
              <div className="bg-white w-full p-4 rounded-xl">
                <div className="flex justify-between items-center ">
                  <div className="flex gap-2 w-[324px] ">
                    <span className="pl-4"> Tất cả </span>
                    <span>({products?.length} sản phẩm)</span>
                  </div>
                  <span>Màu</span>
                  <span className=" flex justify-end w-[120px]">Đơn giá</span>
                  <span>Sửa</span>

                  <span>
                    <RiDeleteBin6Line />
                  </span>
                </div>
              </div>
            </div>
            {products?.map((el) => (
              <div className="mx-4   flex " key={el._id}>
                <div className="bg-white w-full p-4 rounded-xl">
                  <div className="flex justify-between items-center ">
                    <div className=" w-[324px] gap-2 flex ">
                      <input
                        type="checkbox"
                        id={el?._id}
                        // checked={Boolean(getLocal(el?._id))}
                      />

                      <div className="w-[80px] h-[80px]">
                        <img
                          src={el?.thumb?.[0]?.split(",")[0].split(" ")[0]}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-[202px]">
                        <span className="overflow-ellipsis overflow-hidden text-sm font-normal">
                          {el?.title}
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
                      <span className="text-xs flex w-[120px] flex-1 gap-2 flex-col text-gray-400">
                        {el?.color?.length === 0 && "Không có"}
                        {el?.color?.map((colors, index) => (
                          <span className="flex flex-col gap-1">
                            Màu {index + 1} : {colors}
                          </span>
                        ))}
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="flex">
                        {formatMoney(el?.prices)}
                        <sub>₫</sub>
                      </span>
                    </div>
                    <span onClick={() => setEditProduct(el)}>
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

export default EditProduct;
