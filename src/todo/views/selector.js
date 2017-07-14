import {FilterTypes} from '../../constants.js';
//提高store数据获取的性能，避免不必要的运算，
import { createSelector } from "reselect";


const getFilter = (state) =>state.filter;

const getTodos = (state) =>state.todo;


//reselect插件的用法如下 先缓存运算结果，然后再判断数据是否改变  reslect的缓存功能 
export const selectVisibleTodos = createSelector(
  [getTodos,getFilter],
  (todos, filter) => {
  switch (filter) {
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed);
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed);
    default:
      throw new Error('unsupported filter');
  }
}
)
