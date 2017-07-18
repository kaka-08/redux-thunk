import React, {Component} from 'react';
import { PropTypes } from "prop-types";
import {connect} from 'react-redux';
import TodoItem from './todoItem.js';
import {toggleTodo, removeTodo} from '../actions.js';
import { selectVisibleTodos } from "./selector";
import TransitionGroup from "react-addons-css-transition-group";

/**
* 初始化装载TransitionGroup时 如果 transitionName = "name",transitionXXXTimeout,
* 它的每个子元素都会有一个name-XXX CSS类
* 接着会有一个example-appear-active CSS类
*/
class TodoList extends Component{

  render(){
    const todos = this.props.todos;
    return(
        <ul className="todo-list">
          <TransitionGroup 
           transitionName="fade" 
           transitionEnterTimeout={500} 
           transitionLeaveTimeout={300}>
            {
              todos.map((item) => (
                <TodoItem
                  key={item.id}
                  text={item.text}
                  completed={item.completed}
                  onToggle={() => this.props.onToggleTodo(item.id)}
                  onRemove={() => this.props.onRemoveTodo(item.id)}
                />
                ))
            }
          </TransitionGroup>
        </ul>
      )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};


const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
    onRemoveTodo: (id) => {
      dispatch(removeTodo(id));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);