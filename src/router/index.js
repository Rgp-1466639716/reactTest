import Login from '../page/Login/index'
import Articl from '../page/Articl/index'
import Layout from '../page/Layout'
import About from '../page/Layout/About'
import Asolo from '../page/Layout/Asolo'
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
        element:<About/>
      },
      {
        path:'/Asolo',
        element:<Asolo/>
      }
    ]
  },
  {
    path:'/Login',
    element:<Login/>
  },
  {
    // path:'/Articl', //searchParams传参
    path:'/Articl/:name/:id', //params传参
    element:<Articl/>
  },
  // 匹配不到路由了，匹配到这里
  {
    path:'*',
    element:<div>404</div>
  }
])

export default router