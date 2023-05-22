import {
  ADD_SUBMISSITIONS,
  GET_ERROR,
  GET_SUBMISSITIONS_BY_USERNAME,
} from "../../types/Types";

const inital = {
  submissition: [],
  loading: true,
};
const reducerSubmissition = (state = inital, action) => {
  switch (action.type) {
    case GET_SUBMISSITIONS_BY_USERNAME:
      return {
        ...state,
        submissition: action.payload,
        loading: false,
      };
    case ADD_SUBMISSITIONS:
      return {
        submissition: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        submissition: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};
export default reducerSubmissition;
