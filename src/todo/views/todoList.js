import React, {Component} from 'react';
import { PropTypes } from "prop-types";
import {connect} from 'react-redux';
import TodoItem from './todoItem.js';
import {toggleTodo, removeTodo} from '../actions.js';
import { selectVisibleTodos } from "./selector";

class TodoList extends Component{

  render(){
    const todos = this.props.todos;
    return(
       <ul className="todo-list">
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