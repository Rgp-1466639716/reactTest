import { Link, useNavigate } from 'react-router-dom'
const Login =()=>{
  const navigate = useNavigate()
  return (
    <div>
      我是登录
      {/* 声明式 */}
      <Link to="/Articl"> 跳转文章</Link>
      {/* 编程式 */}
      <button onClick = {()=>navigate('/Articl')}>跳转文章</button>
      <button onClick = {()=>navigate('/Articl?id=1&name=rui')}>seachParams传参</button>
      <button onClick = {()=>navigate('/Articl/rui/1001')}>params传参数</button>
      <Link to="/AAA"> 跳转404</Link>
    </div>
  )
}
export default Login