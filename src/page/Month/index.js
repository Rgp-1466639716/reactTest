// import { useSearchParams,useParams } from 'react-router-dom'

import { useSelector } from "react-redux"

const Month =()=>{
  const {billList }= useSelector(state=>state.bill)
  console.log(1111232312,billList)
  const group = {}
  billList.forEach(item => {
    const key = item.type
    if(!group[key]){
      group[key]=[]
    }
    group[key].push(item)
  });
  console.log(1232,group)
  const adc = billList.reduce((pre,cur)=>{
    const key = cur.type
    if(!pre[key]){
      pre[key]=[]
    }
    pre[key].push(cur)
    return pre
  },{})
  console.log(123321,adc)
  const ab = true
  return<div className={`${ab && "sss"} aaa`}>Month</div>
}
export default Month