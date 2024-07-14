// import { useSearchParams,useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { getBillList } from "@/store/modules/billStore"
import React, { useState } from 'react'
import { TabBar } from 'antd-mobile'
import {
  AppOutline,
  MessageFill,
  UnorderedListOutline,
} from 'antd-mobile-icons'
import './index.scss'

const Layout =()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getBillList())
  },[dispatch])
  const { billList } = useSelector(state=>state.bill)
  const tabs = [
    {
      key: 'Month',
      title: '月度账单',
      icon: <AppOutline />,
    },
    {
      key: 'New',
      title: '待办',
      icon: <UnorderedListOutline />,
    },
    {
      key: 'Year',
      title: '年度账单',
      icon: <MessageFill /> ,
    },
  ]
  const navigate = useNavigate()
  const switchRoute = (path)=>{
    navigate(path)
  }
  return (
    <div className='layout'>
      <div className='container'>
        二级路由占位
        <Outlet/>
      </div>
      <div className='footer'>
        <TabBar onChange={switchRoute}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  )
}
export default Layout