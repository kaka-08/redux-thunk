import { combineReducers } from "redux";

import {reducer as todoReducer} from './todo';
import {reducer as filterReducer} from './filter';
import {reducer as weaterReducer} from "./Weather";

//把分reducer合并为一个总的reducer
const reducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
  weather:weaterReducer
});

export default reducer;