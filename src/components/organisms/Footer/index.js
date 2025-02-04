import React from "react";
import path from "../../../utils/path";
import footer1 from "../../../assets/images/logo_fotter1.png";
import footer2 from "../../../assets/images/logo_footer2.svg";
import footer3 from "../../../assets/images/logo_footer3.png";
import credit_card from "../../../assets/images/credit_card.png";
import zalo from "../../../assets/images/zalo.png";
import facebook from "../../../assets/images/facebook.png";
import youtube from "../../../assets/images/youtube.jpg";
import tikinow from "../../../assets/images/TIKINOW.png";
import qrcode from "../../../assets/images/qrcode.png";
import playstore from "../../../assets/images/playstore.png";
import appstore from "../../../assets/images/appstore.png";

import { Link } from "react-router-dom";
const Footer = ({ hidden }) => {
  const newTab = () => {
    window.open("https://www.tikinow.vn/?src=footer", "_blank");
  };
  return (
    <div className={hidden ? "hidden" : " gap-12 py-4  bg-white flex w-full"}>
      <div className="flex px-4  flex-col flex-1 items-start justify-start gap-4">
        <h3 className="text-base font-medium">Hỗ trợ khách hàng</h3>
        <div className="flex flex-col text-xs gap-2 text-gray-600">
          <span className="flex flex-col ">
            <span className="flex gap-1">
              Hotline: <strong className="font-medium ">1900-6035</strong>
            </span>
            <span className="">(1000 đ/phút, 8-21h kể cả T7, CN)</span>
          </span>
          <span>Các câu hỏi thường gặp</span>
          <span>Gửi yêu cầu hỗ trợ</span>
          <span>Hướng dẫn đặt hàng</span>
          <span>Phương thức vận chuyển</span>
          <span>Chính sách đổi trả</span>
          <span>Hướng dẫn trả góp</span>
          <span>Chính sách hàng nhập khẩu</span>
          <span>Hỗ trợ khách hàng: hotro@tiki.vn</span>
          <span>Báo lỗi bảo mật: security@tiki.vn</span>
        </div>
      </div>
      <div className="flex flex-col flex-1 items-start justify-start gap-4">
        <h3 className="text-base font-medium">Về Tiki</h3>
        <div className="flex flex-col text-xs gap-2 text-gray-600">
          <span>Giới thiệu Tiki</span>

          <span>Tiki Blog</span>
          <span>Tuyển dụng</span>
          <span>Chính sách bảo mật thanh toán</span>
          <span>Chính sách bảo mật thông tin cá nhân</span>
          <span>Chính sách giải quyết khiếu nại</span>
          <span>Điều khoản sử dụng</span>
          <span>Giới thiệu Tiki Xu</span>
          <span>Gói hội viên VIP</span>
          <span>Tiếp thị liên kết cùng Tiki</span>
          <span>Bán hàng doanh nghiệp</span>
          <span>Điều kiện vận chuyển</span>
        </div>
      </div>
      <div className="flex flex-col flex-1 items-start justify-start gap-4">
        <h3 className="text-base font-medium">Hợp tác và liên kết</h3>
        <div className="flex flex-col text-xs gap-2 text-gray-600">
          <span>Quy chế hoạt động Sàn GDTMĐT</span>

          <span>Bán hàng cùng Tiki</span>
        </div>
        <div>
          <h3 className="text-base font-medium">Chứng nhận bởi</h3>
          <div className="w-[83px] h-[32px] flex gap-2">
            <img src={footer1} alt="" />
            <img src={footer2} className="w-[83px] h-[32px]" alt="" />
            <img src={footer3} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 ml-6  items-start justify-start gap-4  ">
        <h3 className="text-base font-medium w-full">Phương thức thanh toán</h3>
        <div className="w-[130px] h-[160px]">
          <img src={credit_card} alt="credit_card" />
        </div>
        <h3 className="text-base font-medium">Dịch vụ giao hàng</h3>
        <div className="w-[109px] h-[33] cursor-pointer" onClick={newTab}>
          <img src={tikinow} alt="tikinow" />
        </div>
      </div>
      <div className="flex flex-col w-[220px] mr-6  items-start justify-start gap-4">
        <h3 className="text-base font-medium w-full">Kết nối với chúng tôi</h3>
        <div className="flex w-full items-start justify-start ">
          <div className="w-[32px] h-[32px] justify-center items-center">
            <img src={facebook} alt="facebook" />
          </div>
          <div className="mx-2 w-[32px] h-[32px]  border rounded-[50%] bg-red-600 items-center justify-center flex">
            <img className="w-[20px]  h-[14px] " src={youtube} alt="youtube" />
          </div>
          <div className=" w-[32px] h-[32px]">
            <img className=" border rounded-[50%]" src={zalo} alt="zalo" />
          </div>
        </div>
        <h3 className="text-base font-medium">Tải ứng dụng trên điện thoại</h3>
        <div className="flex gap-2 w-full ">
          <div className="w-full h-[80px]">
            <img className="w-[80px] h-[80px]" src={qrcode} alt="" />
          </div>
          <div className="w-full">
            <div className="w-[126px] gap-2 flex flex-col">
              <img
                className="w-[126px] h-[36px]"
                src={appstore}
                alt="app_store"
              />
              <img
                className="w-[126px] h-[36px]"
                src={playstore}
                alt="app_store"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
