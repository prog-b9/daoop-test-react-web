import { GET_ALL_SKILLS, GET_ERROR, GET_SKILLS_BY_USERNAME } from "../../types/Types";

const inital = {
  skills: [],
  loading: true,
};

const reducerSkills = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_SKILLS:
      return {
        ...state,
        skills: action.payload,
        loading: false,
      };
    case GET_SKILLS_BY_USERNAME:
      return {
        ...state,
        skills: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        skills: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};
export default reducerSkills;
