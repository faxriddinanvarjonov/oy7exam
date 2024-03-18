import { combineReducers, createStore } from "redux";
import { checkouts } from "./checkout";

let rootReduce = combineReducers({
  checkouts: checkouts,
});

export let store = createStore(rootReduce);
