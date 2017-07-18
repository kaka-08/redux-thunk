import React,{Component} from "react";
import {PropTypes} from "prop-types";
import { fetchWeather } from "./actions";
import { connect } from 'react-redux';

const CITY_CODES = {
	'北京':101010100,
	'上海':101020100,
	'广州':101280101,
	'深圳':101280601
}

class CitySelector extends Component{
   constructor(props){
   	 super(props);
   }
   
   handlerChange=(ev)=>{
   	  const cityCode = ev.target.value;
   	  this.props.onSelectCity(cityCode)
   }
   

   componentDidMount(){
    const cityCode = '101010100';
    this.props.onSelectCity(cityCode);
   }

   render(){
   	 return(
          <select onChange={this.handlerChange}>
            {  
            	Object.keys(CITY_CODES).map(
                   cityName => <option key={cityName} value={CITY_CODES[cityName]}>
                         {cityName}</option>  
            		)
            }
          </select>
   	 	)
   }
}

const mapDispatchToProps =(dispatch)=>{
	return {
		onSelectCity:cityCode=>{
      dispatch(fetchWeather(cityCode));
    }
	}
}



export default connect(null, mapDispatchToProps)(CitySelector);
