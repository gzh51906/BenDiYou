import rootReducer from "./reducer/index.js";

import {
    createStore,
    applyMiddleware
} from "redux";

import createSagaMiddleware from "redux-saga";

// 引入调试工具
import {composeWithDevTools} from "redux-devtools-extension";

//3.引入自定义saga配置文件
import rootSaga from "./rootSaga.js";

//1.创建saga中间件
const sagaMiddleware = createSagaMiddleware();

//2.将中间件连接至store
let enhancer = applyMiddleware(sagaMiddleware);
//因为createStore只接受一个中间件，所以就把其他中间件作为参数传入composeWithDevTools()方法中
const store = createStore(rootReducer,composeWithDevTools(enhancer));

//4.运行saga配置文件
sagaMiddleware.run(rootSaga);

export default store;