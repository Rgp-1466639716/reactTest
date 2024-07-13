// import { useSearchParams,useParams } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom'
const Layout =()=>{
  return(
    <div>
      我是一级路由
      {/* 二级路由 */}
      <Link to="/"> 跳转关于</Link>
      <Link to="/Asolo"> 跳转也许</Link>
      {/* 二级路由显示位置 */}
      <Outlet/>
    </div>
  )
}
export default Layout