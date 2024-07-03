import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
  name:'channel',
  // 初始化state
  initialState:{
    changeList:[]
  },
  // 修改状态的方法
  reducers:{
    setChannels(state,action){
      state.changeList = action.payload
    }
  }
})
  // 异步请求部分
  const {setChannels} = channelStore.actions
  const fetchChannlList=()=>{
    return async(dispatch)=>{
      const res = await axios.get('http://localhost:3004/icons')
      dispatch(setChannels(res.data))
    }
  }

  export {fetchChannlList}
  const reducer = channelStore.reducer
  export default reducer