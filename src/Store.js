import { createStore,applyMiddleware,compose } from "redux";
import reducer from "./Reducer";
import Perf from "react-addons-perf";

//redux-thunk 处理异步action
import thunkMiddleware from 'redux-thunk';



const win = window;
win.Perf = Perf;    //目的是帮助缩小代码  配合 UglifyJsPlugin 

const initialState = {};

// Be sure to ONLY add this middleware in development! 
const middlewares = (process.env && process.env.NODE_ENV !== 'production') ?
  [require('redux-immutable-state-invariant').default(), thunkMiddleware] :
  [thunkMiddleware];

//middlewares数据里面存放的都是中间件 的function()
// require('redux-immutable-state-invariant')()这么写会报错  __webpack_require__(...) is not a function


//首先，什么都不做的 Store Enhancer如下 (Store Enhancer是一个函数，接收createStore为参数，返回一个新的createStore)

const doNothingEnhancer = createStore=>(reducer,initialState,storeEnhancers)=>{
	const store = createStore(reducer,initialState,storeEnhancers);
	return store;
}


//storeEnhancer 这个是增强器,例如我们要增强器给每个dispatch的调用都输出一个日志，那么就实现logEnhancer 
const logEnhancer = createStore=>(reducer,initialState,storeEnhancers)=>{
	const store = createStore(reducer,initialState,storeEnhancers);

    const originalDispatch = store.dispatch;
          store.dispatch = action =>{
          	console.log('dispatch action: ',action);
          originalDispatch(action)
          }

    return store

}

// compose用于把多个 Store Enhancer组合在一起
const storeEnhancers = compose(
       applyMiddleware(...middlewares),
       (win && win.devToolsExtension) ? win.devToolsExtension() : (f) =>f,
/*       doNothingEnhancer,*/
       logEnhancer
	)
// createStore 有三个参数   http://www.redux.org.cn/docs/api/createStore.html  
//createStore() 的第二个参数是可选的, 用于设置 state 初始状态。
//这对开发同构应用时非常有用，服务器端 redux 应用的 state 结构可以与客户端保持一致,
//那么客户端可以将从网络接收到的服务端 state 直接用于本地数据初始化。


//storeEnhancers这个参数 能够让createStore函数产生的Store对象具有更强的功能

const store = createStore(reducer,initialState,storeEnhancers);



export default store;
