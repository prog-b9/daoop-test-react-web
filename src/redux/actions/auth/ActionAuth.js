import { UseCreateData } from "../../../hooks/UseCreateData";
import { AUTH_LOGIN, GET_ERROR } from "../../types/Types";

export const authLogin = (dataParams) => async (dispatch) => {
  try {
    const response = await UseCreateData("store", dataParams);
    dispatch({
      type: AUTH_LOGIN,
      payload: response,
      loading: true,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};
