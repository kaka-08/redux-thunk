import React,{Component} from "react";
import { PropTypes } from "prop-types";
import { connect } from 'react-redux';
import { fetchWeather } from "./actions";
import { Status } from "./status";

const cityCode = 101010100;  //北京

class Weather extends Component{
  constructor(props){
  	super(props);
  	this.state={
  	}
  }
   
  render(){
  	const { weatherData } = this.props;
    const content = ()=>{
          switch (weatherData.status) {
            case Status.LOADING: {
              return <div>天气信息请求中...</div>;
            }
            case Status.SUCCESS: {
              return (
                <div>
                  {weatherData.city} {weatherData.temp1} 最低气温 {weatherData.temp2} 最高气温 {weatherData.highestTemp}
                </div>
              )
            }
            case Status.FAILURE: {
              return <div>天气信息装载失败</div> 
            }
            default: {
              throw new Error('unexpected status');
            }
          }
    };
  	return(
         <div>
           {content()}
         </div> 
  		)
  } 
}


const mapStateToProps = (state) => {
  const weatherData = state.weather;

  return {
    weatherData
  };
}

const mapDispatchToProps = (dispatch)=> {
  return{
    dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Weather);


