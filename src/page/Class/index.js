import { Button } from "antd-mobile";
import { Component, useState } from "react";

class Son extends Component {
  constructor(props){
    // 初始化state
    console.log(111,'consructor')
    super(props)
    this.state ={
      count: 0
    }
  }
  inc = (x)=>{
    return x + 2
  }
  red = (x)=>{
    return x - 1
  }
  setCount = ()=>{
    const that = this
    function chain(value){
      const handler = {
        get: function(obj, prop) {
          if( typeof that[prop] === 'function' ){
            obj.value = that[prop](obj.value)
            return proxy
          }
          return obj[prop]
        }
      }
      const proxy = new Proxy({ value }, handler)
      return proxy
    }
    const aa = chain(3).inc.red
    console.log(11111,aa)
    this.setState({
      count:1
    })
  }
  static getDerivedStateFromProps(nextProps,nextState){
    // 用于props变化更新state
    console.log(111,'getDerivedStateFromProps')
    return {
      count:nextProps.title
    }
  }
  shouldComponentUpdate(nextProps,nextState){
    // 组件是否更新 true更新
    console.log(111,'shouldComponentUpdate',nextProps,nextState)
    return true
  }
  getSnapshotBeforeUpdate(preProps, preState) {
    // 获取更新前的数据，存储更新前的先前值，跟底下钩子一起使用
    console.log(111,'getSnapshotBeforeUpdate',preProps,preState)
    return 11111
  }
  componentDidUpdate(preProps, preState, snapshot){
    // 组件更新完调用 snapshot是上边生命周期返回的值
    console.log(111,'componentDidUpdate',preProps,preState,snapshot)
  }
  componentDidMount(){
    // 组件挂载完毕时自动执行,执行副作用，调后端接口等
    console.log(111,'conponentDidMount')
    // 管道函数 函数返回的值 当行参 传递给下一个函数
    function pipeFun (...aru){
      return function(x){
        return aru.reduce((pre,item)=>{
          return item(pre)
        },x)
      }
    }
    function f1 (x){
      return x+1
    }
    function f2 (y){
      return y+2
    }
    const pipe = pipeFun (f1,f2)
    pipe(5)
  }
  componentWillUnmount(){
    // 组件卸载时执行，清除定时器，副作用等
    console.log(111,'componentWillUnmount')
  }
  render(){
    // 创建或更新 vdom
    console.log('111','render',this.state)
    const { count } = this.state
    return <div onClick={this.setCount}>{count}</div>
  }
}
function Counter () {
  const [ show, setShow ] = useState(true)
  const [ title, setTitle ] = useState(1)
  return (
    <div onClick={()=>setShow(true)}>
      {show && <Son title={title}/>}
      <Button onClick={()=>{setTitle(3)}}>title</Button>
    </div>
  )
}
export default Counter