import React, { useEffect } from "react";

import { useSelector } from "react-redux";

const Account = () => {
  const { currentData } = useSelector((state) => state.user);
  return (
    <div className="p-4 flex flex-col gap-2">
      <h3 className="font-normal text-xl text-black"> Thông tin tài khoản</h3>
      <div className="bg-white rounded-md">
        <h3>Thông tin cá nhân</h3>
        {currentData && <p>{currentData?.fullname}</p>}
      </div>
    </div>
  );
};

export default Account;
