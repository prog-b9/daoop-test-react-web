import { UseGetData } from "../../../hooks/UseGetData";
import {
  GET_ALL_COMPANY,
  GET_COMPANY_BY_USERNAME,
  GET_ERROR,
} from "../../types/Types";

const getAllCompany = () => async (dispatch) => {
  try {
    const response = await UseGetData("get_companys");

    dispatch({
      type: GET_ALL_COMPANY,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

const getCompanyByUsername = (dataParams) => async (dispatch) => {
  try {
    const response = await UseGetData(`get_company/${dataParams}`);
    dispatch({
      type: GET_COMPANY_BY_USERNAME,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

export { getAllCompany, getCompanyByUsername };
