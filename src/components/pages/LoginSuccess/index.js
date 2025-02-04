import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { loginSuccessAction } from "../../../stores/actions/authAction";

import { useDispatch, useSelector } from "react-redux";
import path from "../../../utils/path";
const LoginSuccess = () => {
  const { userId, tokenLogin } = useParams();

  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(loginSuccessAction(userId, tokenLogin));
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Navigate to={`/${path.HOME}`} replace={true} />
      ) : (
        <div>
          <h1 className="text-3xl font-medium text-center">
            Yêu cầu bạn hãy đăng nhập
          </h1>
          <Link to={`/${path.LOGIN}`}>
            <span>Login</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoginSuccess;
