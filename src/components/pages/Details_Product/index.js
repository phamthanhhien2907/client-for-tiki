import React, { useEffect, useState } from "react";
import { CustomSlide, Footer, SliderCate, TopSeller } from "../../organisms";
import icons from "../../../utils/icons";
import ClipLoader from "react-spinners/ClipLoader";
import {
  Link,
  NavLink,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { categories, prodcutDetailTabs } from "../../../utils/constant";

import path from "../../../utils/path";
import { apiGetProduct } from "../../../services/productService";
import {
  createSlug,
  formatMoney,
  renderStartFromNumber,
} from "../../../utils/helper";
const { IoChevronBackOutline, IoIosArrowForward, CiStar } = icons;
const DetailProduct = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const location = useLocation();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const getProduct = async (queries) => {
    const data = [];
    const response = await apiGetProduct(queries);
    if (response.success) {
      response?.products?.map((product) => {
        if (product?.type === category) data.push(product);
      });
      setProducts(data);
    }
  };
  useEffect(() => {
    let param = [];
    for (let i of params.entries()) param.push(i);
    let queries = {};
    for (let i of params) queries[i[0]] = i[1];

    getProduct(queries);
  }, [params]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {!category ? (
        navigate({ path: `/${path.HOME}` })
      ) : loading ? (
        <div className="w-full h-[200px] flex items-center justify-center">
          <ClipLoader
            loading={loading}
            size={60}
            color={"#3644d6"}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="flex w-main">
          <div className="flex-2 flex rounded-md bg-opacity-90 bg-white m-4 h-[541px] overflow-y-auto scrollbar-hide ">
            <SliderCate />
          </div>
          <div className="flex-8 flex ml-0 m-4 h-[541px] overflow-y-auto scrollbar-hide">
            <div className=" w-full flex flex-col gap-2 ">
              <div className="bg-white p-4 flex flex-col gap-8 ">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-normal">Đồ chơi mẹ & bé</h3>

                  <CustomSlide />
                </div>
                <div className="flex justify-between ">
                  <div className="flex gap-4 w-full">
                    {prodcutDetailTabs.map((el) => (
                      <NavLink key={el.id} to={`${el.path}`}>
                        <div className="flex gap-4 w-full ">
                          <span
                            onClick={() => setActiveTab(el.id)}
                            className={
                              activeTab === +el.id
                                ? `${el.style}`
                                : `${el.hover}`
                            }
                          >
                            {el.value}
                          </span>
                        </div>
                      </NavLink>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <span>1/50</span>
                    <div className="flex gap-1">
                      <span className="w-[36px] pt-2 h-[36px]">
                        <IoChevronBackOutline color="gray" size={22} />
                      </span>
                      <span className="w-[36px] pt-2 h-[36px]">
                        <IoIosArrowForward color="gray" size={22} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[56px] py-2 border-t-[1px]">
                  <div className="w-[50px] h-[32px] rounded-3xl border border-gray-300 bg-gray-200 flex items-center justify-center ">
                    <img
                      className="w-[24px] h-[12px] "
                      src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {activeTab === 1 ? (
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
                          <div className="px-2 flex flex-col gap-2 w-full h-[124px]">
                            <div className="w-full h-[72px] flex flex-col gap-2">
                              <p className="text-xs font-normal w-full h-fit text-gray-800 overflow-hidden overflow-ellipsis line-clamp-3 ">
                                {el?.title}
                              </p>
                              <div className="flex w-full h-[15px] ">
                                <span className="flex ">
                                  {renderStartFromNumber(
                                    Number(Math.random() * 4 + 1)
                                  )}
                                </span>
                                <span className="ml-[4px] pl-[5px] before:absolute before:top-[50%] before:left-0 before:w-[0.5px] before:h-[12px] before:translate-y-[-50%] before:bg-gray-400 relative text-[10px] font-normal text-gray-400">
                                  Đã bán {el?.sold}
                                </span>
                              </div>
                            </div>
                            <div className="flex text-base  h-[24px]">
                              <div className="font-medium ">
                                {formatMoney(el?.prices)}
                              </div>
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
              ) : (
                <Outlet />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailProduct;
