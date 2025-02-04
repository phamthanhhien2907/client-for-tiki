import axiosConfig from "../axios";
export const apiRegister = (phone) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/auth/register",
        data: { phone },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiLoginSuccess = (id, tokenLogin) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/auth/login-success",
        data: { id, tokenLogin },
      });
      console.log(response);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
