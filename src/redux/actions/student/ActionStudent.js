import { GET_ALL_STUDENT, GET_ERROR } from "../../types/Types";
import { UseGetData } from "../../../hooks/UseGetData";

const getAllStudent = () => async (dispatch) => {
  try {
    const respones = await UseGetData("get_students");
    dispatch({
      type: GET_ALL_STUDENT,
      payload: respones,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

const getStudentByUsername = (params) => async (dispatch) => {
  try {
    const respones = await UseGetData(`get_student/${params}`);
    dispatch({
      type: GET_ALL_STUDENT,
      payload: respones.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

export { getAllStudent, getStudentByUsername };
