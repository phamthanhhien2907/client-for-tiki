import React, { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import path from "../../../utils/path";
import { auth } from "../../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { logo, banner_auth, facebook, google } from "../../atoms/images";

import PhoneInput from "react-phone-input-2";
import { Button, Input } from "../../atoms/index";
import OtpInput, { ResendOTP } from "otp-input-react";
import icons from "../../../utils/icons";
import { useDispatch } from "react-redux";
import { apiRegister } from "../../../services/authService";
// import { apiRegister } from "../../services/authService";
const { MdOutlineArrowBackIos, BsFillShieldLockFill, CgSpinner } = icons;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    password: "",
  });
  const [otp, setOtp] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  // const countryCode = "+84";
  // const [phone, setPhone] = useState(countryCode);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      let response = await apiRegister(phone);
      console.log(response);
      // if (response?.err === 0) {
      //   setPhone(response?.response);
      // } else {
      //   setUserData({});
      // }
    };
  }, []);

  const [showOTP, setShowOTP] = useState(false);
  const [isUser, setIsUser] = useState(null);
  // const {otp, phone }
  // const window = {
  //   recaptchaVerifier: undefined,
  // };
  // console.log(phone);
  // const handleSubmit = async () => {
  //   const response = await apiRegister(payload);
  //   console.log(response);
  // };

  // const onCaptchVerify = () => {
  //   window.recaptchaVerifier = new RecaptchaVerifier(
  //     auth,
  //     "recaptcha-container",
  //     {
  //       // size: "invisible",
  //       callback: (response) => {
  //         onSignup();
  //       },
  //       "expired-callback": () => {},
  //     }
  //   );
  // };
  // const onSignup = (e) => {
  //   // function getPhoneNumberFromUserInput() {
  //   //   return "+15558675309";
  //   // }
  //   e.preventDefault();
  //   setLoading(true);
  //   onCaptchVerify();
  //   const appVerifier = window.recaptchaVerifier;
  //   signInWithPhoneNumber(auth, phone, appVerifier)
  //     .then((confirmationResult) => {
  //       window.confirmationResult = confirmationResult;
  //       setLoading(false);
  //       setShowOTP(true);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // };
  const onSignup = async () => {
    try {
      const response = await apiRegister(phone);
      console.log(response);
      if (response.err === 2) {
        setLoading(true);
        const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {
          size: "invisible",
          callback: (response) => {
            console.log({ callback: response });
          },
          "expired-callback": (response) => {
            console.log({ expired: response });
          },
        });
        await signInWithPhoneNumber(auth, phone, recaptcha)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setLoading(false);
            setShowOTP(true);

            console.log(confirmationResult);
            // setIsUser(confirmationResult);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onOTPVerify = () => {
    setLoading(true);
    let confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(otp)
      .then((res) => {
        console.log(res.user);
        // const user = res.user;
        // setIsUser(res.isUser);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    // window.confirmationResult
    //   .confirm(otp)
    //   .then(async (res) => {
    //     console.log(res);
    //     setIsUser(res.user);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //   });
  };
  const handleLogin = (type) => {
    window.open(`http://localhost:5000/api/auth/${type}`, "_self");
  };
  return (
    <div className="flex w-full bg-white ">
      <div className="flex flex-5 flex-col ">
        <div className="flex gap-6 items-center">
          <Link to={`/${path.HOME}`}>
            <img
              src={logo}
              alt="logo"
              className="w-[72px] h-[72px] ml-14 my-[10px] object-cover"
            />
          </Link>
        </div>
        {isUser ? (
          <div>User</div>
        ) : (
          <>
            {!isEmail ? (
              <div className="flex flex-col ml-12 gap-2 w-[410px]">
                <div className="flex flex-col ml-4 gap-2">
                  <h1 className="text-2xl font-medium">Xin chào,</h1>
                  <span>Đăng nhập hoặc Tạo tài khoản</span>
                </div>

                {showOTP ? (
                  <div className="flex flex-col ml-4 items-center justify-center ">
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      OTPLength={6}
                      otpType="number"
                      placeholder={[0, 0, 0, 0, 0, 0]}
                      disabled={false}
                      autoFocus
                      secure
                      className="opt-container"
                    />
                    <ResendOTP
                      onResendClick={() => console.log("Resend clicked")}
                    />
                    {console.log(otp)}

                    <button
                      onClick={onOTPVerify}
                      className="flex w-full bg-red-500 border rounded-md h-[40px] items-center justify-center"
                    >
                      {loading && (
                        <CgSpinner
                          size={20}
                          color="blue"
                          className="mt-1 animate-spin"
                        />
                      )}
                      <span>Xác minh</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center flex-col gap-2">
                    <div>
                      <PhoneInput
                        country={"vn"}
                        value={phone}
                        onChange={(phone) => setPhone("+" + phone)}
                        enableAreaCodes={true}
                      />
                    </div>
                    {/* <Input nameKey="Số điện thoại" /> */}
                    {/* <Button name="Tiếp tục" handleOnclick={() => onSignup()} /> */}
                    <button
                      onClick={onSignup}
                      className="flex w-[305px] bg-red-500 border rounded-md h-[40px] items-center justify-center"
                    >
                      {loading && (
                        <CgSpinner
                          size={20}
                          color="blue"
                          className="mt-1 animate-spin"
                        />
                      )}
                      <span>Tiếp tục</span>
                    </button>
                    <div id="recaptcha-container" className="bg-red-500"></div>
                  </div>
                )}
                <div
                  onClick={() => setIsEmail(!isEmail)}
                  className="font-sans cursor-pointer text-blue-500 text-center ml-6 "
                >
                  Đăng nhập với email
                </div>
                <span className="relative flex items-center justify-center px-4 pt-16 ml-4 w-[410px]">
                  <span className=" relative text-gray-500 text-lg px-4 bg-white z-20">
                    Hoặc tiếp tục bằng
                  </span>
                  <span className="absolute h-[1px]  w-full bg-gray-300 bottom-0 mt-8  left-0 top-[50%] "></span>
                </span>
                <div className="w-full flex items-center justify-center">
                  <div className="w-[58px] h-[58px] flex gap-4 mr-12">
                    <img
                      className="cursor-pointer"
                      onClick={() => handleLogin("facebook")}
                      src={facebook}
                      alt=""
                    />
                    <img
                      className="cursor-pointer"
                      src={google}
                      alt=""
                      onClick={() => handleLogin("google")}
                    />
                  </div>
                </div>
                <span className="text-xs ml-4">
                  Bằng việc tiếp tục, bạn đã đọc và đồng ý với
                  <span className="underline"> điều khoản sử dụng</span> và
                  <span className="underline">
                    Chính sách bảo mật thông tin cá nhân
                  </span>
                  của Tiki
                </span>
              </div>
            ) : isForgotPassword ? (
              <div className="flex flex-col ml-12 gap-2 w-[410px]">
                <span className="ml-4 ">
                  <MdOutlineArrowBackIos
                    size={21}
                    className="text-gray-400 cursor-pointer"
                    onClick={() => setIsForgotPassword(false)}
                  />
                </span>
                <div className="flex flex-col ml-4 gap-2">
                  <h1 className="text-2xl font-medium">Quên mật khẩu ?</h1>
                  <span>
                    Vui lòng nhập thông tin tài khoản để lấy lại mật khẩu
                  </span>
                </div>
                <Input nameKey="Số điện thoại/ Email" />
                <Button name="Lấy lại mật khẩu" />
                <span className="ml-4 mt-4 text-blue-500 cursor-pointer">
                  Đổi số điện thoại? Liên hệ Hotline 1900-6035
                </span>
              </div>
            ) : isRegister ? (
              <div className="flex flex-col ml-12 gap-2 w-[410px]">
                <span className="ml-4 ">
                  <MdOutlineArrowBackIos
                    size={21}
                    className="text-gray-400 cursor-pointer"
                    onClick={() => setIsRegister(false)}
                  />
                </span>
                <div className="flex flex-col ml-4 gap-2">
                  <h1 className="text-2xl font-medium">Tạo tài khoản</h1>
                  <span>Vui lòng nhập số điện thoại</span>
                </div>
                <Input nameKey="Số điện thoại" />
                <Button name="Tiếp Tục" />

                <span className="relative flex items-center justify-center px-4 pt-16 ml-4 w-[410px]">
                  <span className=" relative text-gray-500 text-lg px-4 bg-white z-20">
                    Hoặc tiếp tục bằng
                  </span>
                  <span className="absolute h-[1px]  w-full bg-gray-300 bottom-0 mt-8  left-0 top-[50%] "></span>
                </span>
                <div className="w-full flex items-center justify-center">
                  <div className="w-[58px] h-[58px] flex gap-4 mr-12">
                    <img
                      className="cursor-pointer"
                      onClick={() => handleLogin("facebook")}
                      src={facebook}
                      alt=""
                    />
                    <img
                      className="cursor-pointer"
                      src={google}
                      alt=""
                      onClick={() => handleLogin("google")}
                    />
                  </div>
                </div>
                <span className="text-xs ml-4">
                  Bằng việc tiếp tục, bạn đã đọc và đồng ý với
                  <span className="underline"> điều khoản sử dụng</span> và
                  <span className="underline">
                    Chính sách bảo mật thông tin cá nhân
                  </span>
                  của Tiki
                </span>
              </div>
            ) : (
              <div className="flex flex-col ml-4 mt-[30px] gap-4 ">
                <span className="ml-4 ">
                  <MdOutlineArrowBackIos
                    size={21}
                    className="text-gray-400 cursor-pointer"
                    onClick={() => setIsEmail(false)}
                  />
                </span>
                <div className="flex flex-col ml-4 gap-2">
                  <h1 className="text-2xl font-medium">Đăng nhập bằng email</h1>
                  <span>Nhập email và mật khẩu tài khoản Tiki</span>
                </div>
                <Input
                  nameKey={"abc@gmail.com"}
                  style={
                    "px-4 py-2 rounded-md border w-[410px]  ml-4 placeholder:text-sm  outline-none"
                  }
                />
                <Input
                  nameKey={"Mật khẩu"}
                  style={
                    "px-4 py-2 rounded-md border w-[410px]  ml-4 placeholder:text-sm  outline-none"
                  }
                />
                <div className="pt-4">
                  <Button name={"Đăng nhập"} />
                </div>
                <div className="flex flex-col text-sm ml-4 font-normal pt-4 text-blue-500">
                  <span
                    className="cursor-pointer"
                    onClick={() => setIsForgotPassword(true)}
                  >
                    Quên mật khẩu?
                  </span>
                  <div className="flex">
                    <span className="text-gray-500">Chưa có tài khoản?</span>
                    <span
                      className="cursor-pointer"
                      onClick={() => setIsRegister(true)}
                    >
                      Tạo tài khoản
                    </span>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="flex flex-5 bg-blue-100 items-center justify-center relative w-screen h-screen ">
        <div className="absolute flex flex-col bottom-[30px] items-center justify-center text-blue-500">
          <span className="font-semibold text-xl">Mua sắm tại Tiki</span>
          <span className="font-semibold text-sm">Siêu ưu đãi mỗi ngày</span>
        </div>
        <img src={banner_auth} alt="banner" className="w-[370px] h-[370px]" />
      </div>
    </div>
  );
};

export default Login;
