// import { useSearchParams,useParams } from 'react-router-dom'
import { Button } from 'antd-mobile'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getBillList } from "@/store/modules/billStore"

const Layout =()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getBillList())
  },[dispatch])
  const { billList } = useSelector(state=>state.bill)
  console.log(111111,billList)
  return(
    <div>
      我是一级路由
      <Button color='primary'>11111</Button>
      {/* 二级路由显示位置 */}
      <Outlet/>
    </div>
  )
}
export default Layout