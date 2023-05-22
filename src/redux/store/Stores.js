import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../rootReducers/rootReducer";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));
