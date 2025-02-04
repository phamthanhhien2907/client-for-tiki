import { apiLoginSuccess } from "../../services/authService";
import actionType from "./actionType";
export const loginSuccessAction = (id, tokenLogin) => async (dispatch) => {
  try {
    let response = apiLoginSuccess(id, tokenLogin);
    response.then(function (result) {
      console.log(result.role);
      if (result?.err === 0) {
        dispatch({
          type: actionType.LOGIN_SUCCESS,
          data: result.token,
          role: result.role,
        });
      } else {
        dispatch({
          type: actionType.LOGIN_SUCCESS,
          data: null,
        });
      }
    });
  } catch (error) {
    dispatch({
      type: actionType.LOGIN_SUCCESS,
      data: null,
    });
  }
};
export const logout = () => ({
  type: actionType.LOGOUT,
});
