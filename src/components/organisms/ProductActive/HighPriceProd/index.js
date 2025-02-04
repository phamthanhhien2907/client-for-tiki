import React, { useEffect, useState } from "react";
import { apiGetProduct } from "../../../../services/productService";
import { Link, useParams, useSearchParams } from "react-router-dom";
import icons from "../../../../utils/icons";
import { formatMoney } from "../../../../utils/helper";
const { CiStar } = icons;
const TopSeller = () => {
  // const [params] = useSearchParams();
  const [products, setProducts] = useState(null);
  const { category } = useParams();

  const getProduct = async (queries) => {
    const data = [];
    const response = await apiGetProduct({ sort: "-prices", type: category });
    if (response.success) {
      response?.products?.map((product) => {
        if (product?.type === category) data.push(product);
      });
      setProducts(data);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="flex flex-col gap-8 rounded-xl">
      <div className=" flex flex-wrap gap-2">
        {products?.map((el) => (
          <Link
            key={el?._id}
            className=""
            to={`/${category}/${el?._id}/${el?.slug}`}
          >
            <div className=" w-[185px] border rounded-lg h-[388px] bg-gray-100 cursor-pointer ">
              <img
                className="rounded-t-lg w-full h-[200px]"
                src={el.thumb?.[0]?.split(",")[0].split(" ")[0]}
                alt="home_product"
              />
              <div className="py-[4px] px-2">
                <img
                  className="w-[89p] h-[20px]"
                  src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                  alt=""
                />
              </div>
              <div className="px-2 flex flex-col w-full h-[124px]">
                <div className="w-full h-[72px]">
                  <p className="text-xs font-normal w-full h-fit text-gray-800 overflow-hidden overflow-ellipsis line-clamp-3 ">
                    {el?.title}
                  </p>
                  <div className="flex w-full h-[15px] ">
                    <span className="">
                      <CiStar color="orange" size={12} />
                    </span>
                    <span className="ml-[4px] pl-[5px] before:absolute before:top-[50%] before:left-0 before:w-[0.5px] before:h-[12px] before:translate-y-[-50%] before:bg-gray-400 relative text-[10px] font-normal text-gray-400">
                      Đã bán {el?.sold}
                    </span>
                  </div>
                </div>
                <div className="flex text-base  h-[24px]">
                  <div className="font-medium ">{formatMoney(el?.prices)}</div>
                  <sup className="top-[0.5em]">đ</sup>
                </div>
              </div>
              <div className="border-t-[1px] py-2 w-[135px] h-[35px]  mx-2">
                <p className="font-medium text-gray-400 text-xs">
                  Giao thứ 2, 15/01
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopSeller;
