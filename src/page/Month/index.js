// import { useSearchParams,useParams } from 'react-router-dom'

import { useSelector } from "react-redux"
import Counter from "../Class"

const Month =()=>{
  const {billList }= useSelector(state=>state.bill)
  const group = {}
  billList.forEach(item => {
    const key = item.type
    if(!group[key]){
      group[key]=[]
    }
    group[key].push(item)
  });
  const adc = billList.reduce((pre,cur)=>{
    const key = cur.type
    if(!pre[key]){
      pre[key]=[]
    }
    pre[key].push(cur)
    return pre
  },{})
  const ab = true
  return<div className={`${ab && "sss"} aaa`}>
    Month<Counter/>
    </div>
}
export default Month