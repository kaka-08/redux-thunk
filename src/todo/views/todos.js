import React,{Component} from 'react';
import AddTodo from './addTodo.js';
import TodoList from './todoList.js';
import './styles.css';

class Todos extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
		    <div className="todos">
		      <AddTodo />
		      <TodoList />
		    </div>
		  );
    }
}

export default Todos;