import { GET_FORMS, countTimeLine, dataForms } from "../../types/Types";

const inital = {
  dataForms: dataForms,
  countTimeLine,
};

const reducerForms = (state = inital, action) => {
  switch (action.type) {
    case GET_FORMS:
      return { ...state };
    default:
      return state;
  }
};

export default reducerForms;
