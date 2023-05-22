import { GET_ALL_SOPERVISOR, GET_ERROR, GET_SOPERVISOR_BY_USERNAME } from "../../types/Types";

const inital = {
    sopervisor: [],
    loading: true,
  };
  
  const reducerSopervisor = (state = inital, action) => {
    switch (action.type) {
      case GET_ALL_SOPERVISOR:
        return {
          ...state,
          sopervisor: action.payload,
          loading: false,
        };
      case GET_SOPERVISOR_BY_USERNAME:
        return {
          ...state,
          sopervisor: action.payload,
          loading: false,
        };
      case GET_ERROR:
        return {
          sopervisor: action.payload,
          loading: true,
        };
      default:
        return state;
    }
  };
  
  export default reducerSopervisor;
  