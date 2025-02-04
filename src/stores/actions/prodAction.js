import {
  apiGetProduct,
  apiGetProductById,
} from "../../services/productService";
import actionType from "./actionType";

export const apiGetProductAction = () => async (dispatch) => {
  try {
    const response = await apiGetProduct();
    console.log(response?.products);
    if (response?.success) {
      dispatch({
        type: actionType.GET_PRODUCT,
        data: response?.products,
      });
    } else {
      dispatch({
        type: actionType.GET_PRODUCT,
        data: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCT,
      data: null,
    });
  }
};

export const apiGetProdByIdAction = (id) => async (dispatch) => {
  try {
    const response = await apiGetProductById(id);
    if (response?.success) {
      dispatch({
        type: actionType.GET_PRODUCT_BY_ID,
        data: response?.productDatas,
      });
    } else {
      dispatch({
        type: actionType.GET_PRODUCT_BY_ID,
        data: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCT_BY_ID,
      data: null,
    });
  }
};
