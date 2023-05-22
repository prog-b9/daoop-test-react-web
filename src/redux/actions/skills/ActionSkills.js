import { UseGetData } from "../../../hooks/UseGetData";
import { GET_ALL_SKILLS, GET_ERROR } from "../../types/Types";

const getAllSkills = () => async (dispatch) => {
  try {
    const response = await UseGetData(`gettasks`);
    dispatch({
      type: GET_ALL_SKILLS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

const getSkillsByUsername = (dataParams) => async (dispatch) => {
  try {
    const response = await UseGetData(`gettasks/${dataParams}`);
    dispatch({
      type: GET_ALL_SKILLS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

export { getAllSkills, getSkillsByUsername };
