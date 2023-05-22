import { GET_ALL_STUDENT, GET_ERROR } from "../../types/Types";

const inital = {
  student: [],
  loading: true,
};
const reducerStudent = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_STUDENT:
      return {
        ...state,
        student: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        student: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};
export default reducerStudent;
