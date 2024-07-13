import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
  name:"1111",
  initialState:{
    billList:[]
  },
  reducers:{
    setBillList(state,action){
      state.billList = action.payload
    }
  }
})
const { setBillList } = billStore.actions
const getBillList = ()=>{
  return async(dispatch)=>{
    const res = await axios.get('http://localhost:3004/ka')
    dispatch(setBillList(res.data))
  }
}

const reducer = billStore.reducer
export { setBillList,getBillList }
export default reducer