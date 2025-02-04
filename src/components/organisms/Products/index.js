import React, { useEffect, useState } from "react";
import icons from "../../../utils/icons";
import { Link } from "react-router-dom";
import path from "../../../utils/path";
import { useDispatch, useSelector } from "react-redux";
import { apiGetProductAction } from "../../../stores/actions/prodAction";
import { apiGetProduct } from "../../../services/productService";
import { formatMoney } from "../../../utils/helper";
const { CiStar } = icons;
const Products = () => {
  const [product, setProduct] = useState(null);
  const [product1, setproduct1] = useState(null);
  const fetchApiProduct = async () => {
    const response = await apiGetProduct({
      // page: Math.floor(Math.random(10) * 10) + 1,
      page: Math.floor(Math.random(10) * 10) + 1,
      limit: 6,
      sort: "-prices",
    });

    if (response?.success) {
      setProduct(response?.products);
    }
  };
  const fetchApiProduct1 = async () => {
    const response = await apiGetProduct({
      // page: Math.floor(Math.random(10) * 10) + 1,
      page: 8,

      limit: 6,
      sort: "-prices",
    });

    if (response?.success) {
      setproduct1(response?.products);
    }
  };
  // const { data } = useSelector((state) => state.product);
  // const dispatch = useDispatch();
  useEffect(() => {
    fetchApiProduct() && fetchApiProduct1();
    // dispatch(apiGetProductAction({ limit: 10 }));
  }, []);
  // console.log(data);
  return (
    <>
      <div className="w-full flex-col flex bg-white rounded-xl px-2 py-4">
        <h3 className="py-4 font-medium text-lg">Giá tốt hôm nay</h3>
        <div className="flex gap-2 ">
          {product?.map((el) => (
            <Link
              className="flex"
              key={el?._id}
              to={`/${el?.type}/${el?._id}/${el?.slug}`}
            >
              <div className=" w-[150px] border rounded-lg h-[265px] bg-gray-100 flex flex-col gap-2 cursor-pointer  ">
                <img
                  className="rounded-t-lg w-full h-[148px]"
                  src={el.thumb?.[0]?.split(",")[0].split(" ")[0]}
                  alt="home_product"
                />
                <div className="px-2 flex flex-col w-full h-[80px]">
                  <p className="text-xs font-light h-[36px] text-gray-800 overflow-hidden break-words whitespace-break-spaces ">
                    {el?.title}
                  </p>
                  <div className="flex">
                    <div className="font-medium">{formatMoney(el?.prices)}</div>
                    <sup className="top-[0.5em]">đ</sup>
                  </div>
                </div>
                <div className="border-t-2 py-2 w-full h-[35px] px-2">
                  <p className="font-medium text-gray-400 text-xs">
                    Giao thứ 2, 15/01
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full mb-4 rounded-xl bg-white px-2 py-4">
        <h3 className="py-4 font-medium text-lg">Sản phẩm bán chạy</h3>
        <div className="flex gap-2 ">
          {product1?.map((el) => (
            <Link
              className="flex"
              key={el?._id}
              to={`/${el?.type}/${el?._id}/${el?.slug}`}
            >
              <div className=" w-[150px] border rounded-lg h-[265px] bg-gray-100 flex flex-col gap-2 cursor-pointer  ">
                <img
                  className="rounded-t-lg w-full h-[148px]"
                  src={el.thumb?.[0]?.split(",")[0].split(" ")[0]}
                  alt="home_product"
                />
                <div className="px-2 flex flex-col w-full h-[80px]">
                  <p className="text-xs font-light h-[36px] text-gray-800 overflow-hidden break-words whitespace-break-spaces ">
                    {el?.title}
                  </p>
                  <div className="flex">
                    <div className="font-medium">{formatMoney(el?.prices)}</div>
                    <sup className="top-[0.5em]">đ</sup>
                  </div>
                </div>
                <div className="border-t-2 py-2 w-full h-[35px] px-2">
                  <p className="font-medium text-gray-400 text-xs">
                    Giao thứ 2, 15/01
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
