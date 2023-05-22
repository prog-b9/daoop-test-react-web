/* eslint-disable no-unused-vars */
/* eslint-disable no-duplicate-case */
import { AUTH_LOGIN, AUTH_REGISTER, GET_ERROR } from "../../types/Types";

const inital = {
  login: [],
  // register: [],
  // companyByUsername: [],
  loading: true,
};

const reducerAuth = (state = inital, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        login: action.payload,
        loading: false,
      };
    // case AUTH_REGISTER:
    //   return {
    //     ...state,
    //     register: action.payload,
    //     loading: false,
    //   };
    case GET_ERROR:
      return {
        login: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};

export default reducerAuth;
