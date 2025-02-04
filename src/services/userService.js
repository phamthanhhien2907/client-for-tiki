import axiosConfig from "../axios";
export const apigetCurrent = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/user/get-one",
        // headers: {
        //   authentication: token,
        // },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apigetAllUser = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/user/get-all",
        // headers: {
        //   authorization: token,
        // },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiUpdateCart = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: "/user/cart",
        data,
        // headers: {
        //   authentication: token,
        // },
      });
      console.log(data);

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiRemoveCart = (pid) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "DELETE",
        url: "/user/remove-cart/" + pid,
        // headers: {
        //   authentication: token,
        // },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
