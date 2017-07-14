import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes';
import { Status } from "./status";

export default (state={status:Status.LOADING},action) =>{
     switch(action.type){
       case FETCH_STARTED:
       return {
       	  status:Status.LOADING
       }
       case FETCH_SUCCESS:
       return {
       	  ...state,
       	  status:Status.SUCCESS,
       	  ...action.res
       }
       case FETCH_FAILURE:
       return {
       	  status:Status.AILURE
       }
       default:
       return state;
    }
}