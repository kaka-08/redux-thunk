import {SET_FILTER} from './actionTypes.js';
import {FilterTypes} from '../constants.js'

const initialState = FilterTypes.ALL;
export default (state = initialState, action) => {
  switch(action.type) {
    case SET_FILTER: {
      return action.filter;
    }
    default:
      return state;
  }
}