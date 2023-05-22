import { UseGetData } from "../../../hooks/UseGetData";
import {
  GET_ALL_GRADES,
  GET_ERROR,
  GET_GRADES_BY_USERNAME,
} from "../../types/Types";

const getAllGrades = () => async (dispatch) => {
  try {
    const response = await UseGetData(`getgrades`);
    dispatch({
      type: GET_ALL_GRADES,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

const getGradesByUsername = (dataParams) => async (dispatch) => {
  try {
    const response = await UseGetData(`tgrades/${dataParams}`);
    dispatch({
      type: GET_GRADES_BY_USERNAME,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

export { getAllGrades, getGradesByUsername };
