import {
  GET_ALL_GRADES,
  GET_ERROR,
  GET_GRADES_BY_USERNAME,
} from "../../types/Types";

const inital = {
  grades: [],
  loading: true,
};
const reducerGrades = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_GRADES:
      return {
        ...state,
        grades: action.payload,
        loading: false,
      };
    case GET_GRADES_BY_USERNAME:
      return {
        ...state,
        grades: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        grades: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};

export default reducerGrades;
