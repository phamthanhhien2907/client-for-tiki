import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import path from "../../../utils/path";
import { Footer, PayPal } from "../../organisms";
import logo from "../../../assets/images/logo.png";
import contact from "../../../assets/images/contact.png";
import icons from "../../../utils/icons";
import {
  vn_pay,
  viettel_money,
  payment_hand,
  momo,
  zalo_pay,
} from "../../atoms/images";
import { Button } from "../../atoms";
import ClipLoader from "react-spinners/ClipLoader";
const { GiShop } = icons;
const Payment = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {loading ? (
        <div className=" w-full h-[200px] bg-white  flex items-center justify-center">
          <ClipLoader
            loading={loading}
            size={60}
            color={"#3644d6"}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <div className="w-full bg-white h-[100px] flex items-center px-3 ">
            <div className="  flex items-center gap-4 flex-1 ">
              <Link to={`/`}>
                <img src={logo} className="w-[72px] h-[72px]" alt="" />
              </Link>
              <span className="w-[1px] h-[32px] bg-blue-400"></span>
              <h3 className="font-normal text-2xl text-blue-400">Thanh toán</h3>
            </div>
            <div className="flex-1 flex justify-end">
              <img src={contact} className=" w-[185px] h-[56px]" alt="" />
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-[70%] mx-4 mt-8 mb-4 flex flex-col gap-4">
              <div className="bg-white rounded-md p-4 flex flex-col gap-8">
                <h3 className="font-bold text-lg">Thông tin đơn hàng</h3>
                <div className="w-full h-[154px] border rounded-lg px-4 relative py-8">
                  <span className="absolute top-0 flex items-center gap-1 font-normal px-2 left-3 translate-y-[-50%] bg-white text-sm text-green-600">
                    <GiShop />
                    Gói: Giao thứ 4, trước 19h, 17/01
                  </span>
                  <div className="w-[60%] flex flex-col gap-2">
                    <div className="flex gap-8 justify-between">
                      <span className="text-xs">GIAO TIẾT KIỆM</span>
                      <div className="flex gap-1 items-center">
                        <span className="text-sm line-through text-gray-500">
                          42.000 ₫
                        </span>
                        <span className="font-medium text-green-600">
                          MIỄN PHÍ
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 ">
                      <img
                        className="w-[48px] h-[48px]"
                        src="https://salt.tikicdn.com/cache/96x96/ts/product/72/52/d2/f1e9e6e657aa4e777491d6ee7e7d79bf.PNG.webp"
                        alt=""
                      />
                      <div className="flex flex-col gap-1 text-sm text-gray-500">
                        <span className="overflow-hidden overflow-ellipsis line-clamp-1 ">
                          Ba lô nam thời trang cao cấp phong cách mới 15,6" -
                          Màu đen abcadsd xasxas
                        </span>
                        <div className="flex justify-between">
                          <span>SL: x1</span>
                          <span>441.000 ₫</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-md p-4 flex flex-col gap-8 ">
                <h3>Chọn hình thức thanh toán</h3>
                <div className="flex flex-col gap-4">
                  <div className="w-full flex gap-2 items-center h-[64px] ">
                    <input type="radio" className="w-[18px] h-[18px]" />
                    <img
                      src={payment_hand}
                      className="w-[32px] h-[32px]"
                      alt=""
                    />
                    <span>Thanh toán tiền mặt khi nhận hàng</span>
                  </div>
                  {/* <div className="w-full flex gap-2 items-center h-[64px]">
                    <input type="radio" className="w-[18px] h-[18px]" />
                    <img
                      src={viettel_money}
                      className="w-[32px] h-[32px]"
                      alt=""
                    />
                    <span>Thanh toán bằng ví Viettel Money</span>
                  </div>
                  <div className="w-full flex gap-2 items-center h-[64px]">
                    <input type="radio" className="w-[18px] h-[18px]" />
                    <img src={momo} className="w-[32px] h-[32px]" alt="" />
                    <span>Thanh toán bằng ví MoMo</span>
                  </div>
                  <div className="w-full flex gap-2 items-center h-[64px]">
                    <input type="radio" className="w-[18px] h-[18px]" />
                    <img src={zalo_pay} className="w-[32px] h-[32px]" alt="" />
                    <span>Thanh toán bằng ví ZaloPay</span>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="w-[25%] mx-4 mt-8 mb-4 flex flex-col gap-4">
              <div className="bg-white rounded-md p-4">
                <h3 className="font-normal text-lg text-gray-400">Giao tới</h3>
                <div className="flex gap-2 items-center font-medium">
                  <span>Nguyễn Tấn Quang</span>
                  <p className=" w-[1px] bg-black h-[20px]"></p>
                  <span>0938915502</span>
                </div>
                <div className="">
                  <span className="mr-[5px] text-xs rounded-[100%] border bg-green-100 h-[18px] text-center px-1 text-green-600">
                    Nhà
                  </span>
                  <span className="text-gray-500 ">
                    01 văn cận, Phường Khuê Trung, Quận Cẩm Lệ, Đà Nẵng
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-md p-4">
                <div className="flex justify-between w-full h-[52px] border-b-[1px]">
                  <h3 className="font-medium text-lg ">Đơn hàng</h3>
                  <Link to={`/${path.CHECKOUT}${path.CART}`}>
                    <span className="text-blue-600">Thay đổi</span>
                  </Link>
                </div>
                <div className=" w-full h-[108px] flex flex-col text-sm text-gray-500 gap-1 my-2 border-b-[1px]">
                  <div className="flex justify-between">
                    <span>Tạm tính</span>
                    <span>441.000đ</span>
                  </div>
                  <div className="flex justify-between">
                    <span> Phí vận chuyển</span>
                    <span> 42.000đ</span>
                  </div>
                  <div className="flex justify-between">
                    <span> Khuyến mãi vận chuyển </span>
                    <span className="text-green-400"> -42.000đ</span>
                  </div>
                  <div className="flex justify-between">
                    <span> Giảm giá </span>
                    <span className="text-green-400"> -25.000đ</span>
                  </div>
                </div>
                <div className=" w-full h-[66px] flex flex-col gap-1 my-2 ">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Tổng tiền</span>
                    <span className="text-xl font-medium text-red-500">
                      416.000 ₫
                    </span>
                  </div>
                </div>

                <div className="w-full mt-2 flex gap-2 items-center h-[64px]">
                  <PayPal />
                </div>
                {/* <div className=" w-full h-[60px] ">
                  <Button name="Đặt hàng" fw />
                </div> */}
              </div>
            </div>
          </div>
          <div className="bg-gray-200 text-xs mt-12 p-4 flex flex-col items-start justify-start w-full gap-4 text-gray-500">
            <div className="flex flex-col gap-1">
              <span>
                Bằng việc tiến hành Đặt Mua, bạn đồng ý với các Điều kiện Giao
                dịch chung:
              </span>
              <div className="flex gap-4 items-center text-black">
                <span>Quy chế hoạt động</span>
                <span className="w-[1px] h-[15px] bg-gray-300"></span>
                <span>Chính sách giải quyết khiếu nại</span>
                <span className="w-[1px] h-[15px] bg-gray-300"></span>
                <span>Chính sách bảo hành</span>
                <span className="w-[1px] h-[15px] bg-gray-300"></span>
                <span>Chính sách bảo mật thanh toán</span>
                <span className="w-[1px] h-[15px] bg-gray-300"></span>
                <span>Chính sách bảo mật thông tin cá nhân</span>
              </div>
            </div>

            <div>
              <span>
                © 2019 - Bản quyền của Công Ty Cổ Phần Ti Ki - Tiki.vn
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Payment;
