import React,{ Component } from "react";
import Todos from "./todo/views/todos";
import Filter from "./filter/views/filter";
import CountDown from "./CountDown/index.jsx";
import Weather from "./Weather/view";
import CitySelector from "./Weather/CitySelector";
import Objectkeys from "./Objectkeys/index.jsx";


class TodoApp extends Component{

	render(){
		const clrFloat = {"clear":"both"};
		return(
			<div>
	            <Todos />
	            <Filter />
	            <br />
	            <div style={clrFloat}></div>
	            <CountDown startCount={10}> 
	                {
	                  (count) => <div>{count>0?count : '新年快乐'}</div>
	                }
                </CountDown>
                <br />
                <CitySelector />
                <br />
                <Weather />
                <br />
                <Objectkeys />
	         </div>
		)
	}
}

export default TodoApp;