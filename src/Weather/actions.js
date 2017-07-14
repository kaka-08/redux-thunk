import { FETCH_STARTED,FETCH_SUCCESS,FETCH_FAILURE } from "./actionTypes";



/**
*  开始 fetch
*/
export const fetchWeatherStarted = ()=>({
	type:FETCH_STARTED
})


/**
*  fetch 成功
*/
export const fetchWeatherSuccess = (res)=>({
	type:FETCH_SUCCESS,
	res
})

/**
*  fetch 失败
*/
export const fetchWeatherFailure = (err)=>({
	type:FETCH_FAILURE,
	err
})

/**
*  fetch服务
*/
/*export const fetchWeather = (cityCode)=> {
	return dispatch => {
		const apiUrl = `/data/cityinfo/${cityCode}.html`;
		dispatch(fetchWeatherStarted())
		fetch(apiUrl).then( res => {
           if(res.status !== 200){
               throw new Error("Fail to get response with status" + res.status); 
           }
           res.json().then( resJson=>{
           	  dispatch(fetchWeatherSuccsss(resJson.weatherinfo))
           }).catch(error=>{
           	   throw new Error("Invalid json response" + error); 
           }).catch(error=>{
           	  dispatch(fetchWeatherFailure(error))
           })
		})
	}
}*/


/**
*  异步action的套路如下
*/
export const sampleAsyncAction = () => {
	return (dispatch,getState) =>{
		//在这个函数里可以调用异步函数，自行决定在合适的时机通过dispatch参数派发出新的action对象
	}
}



let nextSeqId = 0;
export const fetchWeather = cityCode => {
  return dispatch => {
    const apiUrl = `/data/cityinfo/${cityCode}.html`;
    
    const seqId = ++nextSeqId;

    const dispatchIfValid = action=>{
      if(seqId===nextSeqId){
          return dispatch(action)
      }
    }

    dispatchIfValid(fetchWeatherStarted())

    fetch(apiUrl).then((response) => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status ' + response.status);
      }

      response.json().then((responseJson) => {
        dispatchIfValid(fetchWeatherSuccess(responseJson.weatherinfo));
      }).catch((error) => {
        dispatchIfValid(fetchWeatherFailure(error));
      });
    }).catch((error) => {
      dispatchIfValid(fetchWeatherFailure(error));
    })
  };
}
