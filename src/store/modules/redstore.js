import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name:'counter',
  // 初始化state
  initialState:{
    count:0
  },
  // 修改状态的方法
  reducers:{
    inscrement (state){
      state.count++
    },
    decrement(state){
      state.count--
    },
    add10(state,action){
      state.count = action.payload
    }
  }
})
// 结构出来 actionCreater函数
const {inscrement,decrement,add10} = counterStore.actions
// 获取reducer
const reducer = counterStore.reducer
export {inscrement,decrement,add10}
export default reducer