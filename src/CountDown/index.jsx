import React,{ Component } from "react";
import { PropTypes } from "prop-types";

class CountDown extends Component{
	constructor(props){
		super(props);
		this.state={
			count:props.startCount
		}
	}

	componentDidMount(){
		this.intervalHandler = setInterval(()=>{
			const newCount = this.state.count - 1 ;
			if (newCount>-1) {
				this.setState({
					count:newCount
				})
			}else{
			   window.clearInterval(this.intervalHandler)	
			}
		},1000)
	}

    //及时清除定时器 componentWillUnmount 主要做一些清除工作 清除监听器 定时器等等
    componentWillUnmount(){
    	if(this.intervalHandler){
    		window.clearInterval(this.intervalHandler);
    	}
    }

    
    render(){
    	const count = this.state.count;
    	return this.props.children(count);
    }

}


CountDown.propTypes - {
  children:React.PropTypes.func.isRequired,
  startCount:React.PropTypes.number.isRequired
}


export default CountDown;