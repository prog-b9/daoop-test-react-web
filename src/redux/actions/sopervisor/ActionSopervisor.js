import { UseGetData } from "../../../hooks/UseGetData";
import {
  GET_ALL_SOPERVISOR,
  GET_ERROR,
  GET_SOPERVISOR_BY_USERNAME,
} from "../../types/Types";

const getAllSopervisor = () => async (dispatch) => {
  try {
    const response = await UseGetData("get_emps");
    dispatch({
      type: GET_ALL_SOPERVISOR,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "####### My Error #######: " + err,
    });
  }
};

const getSopervisorByUsername = (dataParams) => async (dispatch) => {
  try {
    const response = await UseGetData(`get_emp/${dataParams}`);
    dispatch({
      type: GET_SOPERVISOR_BY_USERNAME,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "####### My Error #######: " + err,
    });
  }
};

export { getAllSopervisor, getSopervisorByUsername };
