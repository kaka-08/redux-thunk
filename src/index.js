import React,{ Component } from "react";
import store from "./Store";
import ReactDOM from "react-dom";
// react-redux 提供的 Provider： 提供包含store的context 
import { Provider } from "react-redux"; 
import TodoApp from "./TodoApp";


export default class Root extends Component{
   render(){
     return(
     	 <Provider store={store}>
            <TodoApp />
     	 </Provider>
     	)
   }
}

ReactDOM.render(
    <Root />,
    document.getElementById('container')
)