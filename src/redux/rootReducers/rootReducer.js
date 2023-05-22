import { combineReducers } from "redux";
import reducerStudent from "../reducers/student/ReducerStudent";
import reducerSubmissition from "../reducers/submissition/ReducerSubmissition";
import reducerCompany from "../reducers/company/ReducerCompany";
import reducerSopervisor from "../reducers/sopervisor/ReducerSopervisor";
import reducerTasks from "../reducers/tasks/ReducerTasks";
import reducerSkills from "../reducers/skills/ReducerSkills";
import reducerGrades from "../reducers/grades/ReducerGrades";
import reducerForms from "../reducers/forms/ReducerForms";
import reducerAuth from "../reducers/auth/ReducerAuth";

export const rootReducer = combineReducers({
  rootStudent: reducerStudent,
  rootSubmissitions: reducerSubmissition,
  rootCompany: reducerCompany,
  rootSopervisor: reducerSopervisor,
  rootTasks: reducerTasks,
  rootSkills: reducerSkills,
  rootGrades: reducerGrades,
  rootForms: reducerForms,
  rootAuth: reducerAuth,

});
