import Year from '@/page/Year'
import Month from '@/page/Month'
import New from '@/page/New'
import Layout from '../page/Layout'
import {createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    // 二级路由配置
    children:[
      // 设置默认二级路由
      {
        index:true,
        element:<Month/>
      },
      {
        path:'/Year',
        element:<Year/>
      }
    ]
  },
  {
    path:'/New',
    element:<New/>
  },
  // 匹配不到路由了，匹配到这里
  {
    path:'*',
    element:<div>404</div>
  }
])

export default router