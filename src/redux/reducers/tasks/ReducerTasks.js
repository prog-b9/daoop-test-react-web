import {
  GET_ALL_TASKS,
  GET_ERROR,
  GET_TASKS_BY_USERNAME,
} from "../../types/Types";

const inital = {
  tasks: [],
  loading: true,
};

const reducerTasks = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };
    case GET_TASKS_BY_USERNAME:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        tasks: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducerTasks;
