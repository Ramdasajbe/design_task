import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./redux/reducer";

const initialState = {};
const rootReducer = combineReducers({
  user: counterReducer,
});
const store = createStore(rootReducer, initialState, composeWithDevTools());
export default store;
