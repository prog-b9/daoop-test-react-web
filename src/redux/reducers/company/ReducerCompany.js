import {
  GET_ALL_COMPANY,
  GET_COMPANY_BY_USERNAME,
  GET_ERROR,
} from "../../types/Types";

const inital = {
  company: [],
  loading: true,
};

const reducerCompany = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_COMPANY:
      return {
        ...state,
        company: action.payload,
        loading: false,
      };
    case GET_COMPANY_BY_USERNAME:
      return {
        ...state,
        company: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        company: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducerCompany;
