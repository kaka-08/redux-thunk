import React, {Component} from 'react';
//引入connect  还有个目的是 会执行 react-redux 里面的 shouldComponentUpdate  "浅层比较"，如果想做 “深层比较”，需要自己定义
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class TodoItem extends Component{
   constructor(props){
     super(props)
   }
   
   /*shouldComponentUpdate(nextProps,nextState){
    debugger;
    console.log(nextProps,nextState);
     return (nextProps.completed !== this.props.completed) || (nextProps.text !== this.props.text)

   }
*/

   render(){
    const checkedProp = this.props.completed ? {checked: true} : {};
    return(
      <li
            className="todo-item"
            style={{
              textDecoration: this.props.completed ? 'line-through' : 'none'
            }}
          >
            <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={this.props.onToggle} />
            <label className="text">{this.props.text}</label>
            <button className="remove" onClick={this.props.onRemove}>×</button>
          </li>
      )
   }

}


TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default connect()(TodoItem);