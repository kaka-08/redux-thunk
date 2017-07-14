import React,{ Component } from "react";



const obj = {
    	"皇家马德里":"c罗",
    	"巴塞罗那":"梅西",
    	"AC米兰":"卡卡",
    	"曼彻斯特联":"贝克汉姆"
    }
export default class Objectkeys extends Component{
    

    componentDidMount(){
    	const newA = Object.keys(obj);
    }

    render(){

    	return(
    		   <ul>
    		   	 {
                    Object.keys(obj).map(
                 	  item=><li key={item}>{obj[item]}</li>)
    		   	 }
    		   </ul>
    		)
    }
}
