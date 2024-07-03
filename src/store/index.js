import { configureStore } from "@reduxjs/toolkit";
// 导入子模块reducer
import counterReducer from './modules/redstore'
import channelReducer from './modules/addstore'
const store =configureStore({
  reducer:{
    counter:counterReducer,
    channel:channelReducer
  }
})
export default store