import { createStore,applyMiddleware,compose } from "redux";
import reducer from "./Reducer";
import Perf from "react-addons-perf";

//redux-thunk 处理异步action
import thunkMiddleware from 'redux-thunk';



const win = window;
win.Perf = Perf;    //目的是帮助缩小代码  配合 UglifyJsPlugin 

const initialState = {};

const middlewares = [thunkMiddleware];
/*if(process.env.NODE_ENV !== "production"){
	//const RISI = require("redux-immutable-state-invariant");
	middlewares.push(require("redux-immutable-state-invariant"));
}*/

// compose用于把多个 Store Enhancer组合在一起
const storeEnhancers = compose(
       applyMiddleware(...middlewares)
/*       (win && win.devToolsExtension) ? win.devToolsExtension() : (f) =>f*/
	)
// createStore 有三个参数   http://www.redux.org.cn/docs/api/createStore.html  
//createStore() 的第二个参数是可选的, 用于设置 state 初始状态。
//这对开发同构应用时非常有用，服务器端 redux 应用的 state 结构可以与客户端保持一致,
//那么客户端可以将从网络接收到的服务端 state 直接用于本地数据初始化。


//storeEnhancers这个参数 能够让createStore函数产生的Store对象具有更强的功能

const store = createStore(reducer,initialState,storeEnhancers);

export default store;
