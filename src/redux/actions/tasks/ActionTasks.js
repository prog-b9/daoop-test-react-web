import { UseGetData } from "../../../hooks/UseGetData";
import { GET_ALL_TASKS, GET_ERROR } from "../../types/Types";

const getAllTasks = () => async (dispatch) => {
  try {
    const response = await UseGetData(`gettasks`);
    dispatch({
      type: GET_ALL_TASKS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

const getTasksByUsername = (dataParams) => async (dispatch) => {
  try {
    const response = await UseGetData(`gettasks/${dataParams}`);
    dispatch({
      type: GET_ALL_TASKS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

export { getTasksByUsername, getAllTasks };
