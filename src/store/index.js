import { configureStore } from "@reduxjs/toolkit";
// 导入子模块reducer
import counterReducer from './modules/redstore'
import channelReducer from '@/store/modules/addstore'
import billReducer from './modules/billStore'
const store =configureStore({
  reducer:{
    counter:counterReducer,
    channel:channelReducer,
    bill:billReducer
  }
})
export default store