import {
  ADD_SUBMISSITIONS,
  GET_ERROR,
  GET_SUBMISSITIONS_BY_USERNAME,
} from "../../types/Types";
import { UseGetData } from "../../../hooks/UseGetData";
import { UseCreateData } from "../../../hooks/UseCreateData";

const getSubmissitionByUsername = (params) => async (dispatch) => {
  try {
    const respones = await UseGetData(`get_sub/${params}`);
    dispatch({
      type: GET_SUBMISSITIONS_BY_USERNAME,
      payload: respones.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};
const addSubmissition = (params) => async (dispatch) => {
  try {
    const respones = await UseCreateData("inssubmissions", params);
    dispatch({
      type: ADD_SUBMISSITIONS,
      payload: respones,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

export { getSubmissitionByUsername, addSubmissition };
