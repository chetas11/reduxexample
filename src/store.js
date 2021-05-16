import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer  from './Reducer'

const intailState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  intailState,
  applyMiddleware(...middleware)
);

export default store;
