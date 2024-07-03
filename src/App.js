import './App.css';
import { useState, useRef, useEffect } from  'react'
import _ from 'lodash'
import { v4 as v5} from 'uuid'
import dayjs from 'dayjs'
import { Index as Son } from './components/index';
import { Edit } from './components/edit';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { inscrement,decrement,add10 } from './store/modules/redstore';
import { fetchChannlList } from './store/modules/addstore';
// 点击事件
function ass(){
  return '222'
}
// 点击事件 e
function sss(x,e){
  let addd = ''
  switch (x) {
    case 1:
      addd = 1111
      break;
  
    default:
      addd = 2222
      break;
  }
  console.log(addd)
}
const ac = 122
// 列表
const list = [
  {id:1, a:"11啊哈哈"},
  {id:2, a:"11啊哈哈", my:true},
  {id:3, a:'hha122'}
]
const n = 0;
const ad = false
// 定义组件 首字母大写
function But () {
  return <button>12222</button>
}
// 自定义hooks，封装请求逻辑
const useCss = (adurl)=>{
  const [list1 ,setList1] = useState([])
  useEffect(()=>{
    const ax = async()=>{
      const res = await axios.get(adurl)
      setList1(res.data)
    } 
    ax()
  },[])
  return {list1,setList1}
}
function App() {
  const { count:count2 } = useSelector(state=>state.counter)
  const { changeList=[] } = useSelector(state=>state.channel)
  const dispatch = useDispatch()
  const useRefInput = useRef(null)
  const {list1,setList1} = useCss('http://localhost:3004/icons')
  const [ count ,setCount ] = useState(0)
  const [ count1 ,setCount1 ] = useState({name:'rui'})
  // 惰性传usestate初始数据
  const orderByList = () =>{
    return _.orderBy([
      {id:1, a:"11啊哈哈", number:1},
      {id:2, a:"11啊哈哈", my:true,number:5},
      {id:3, a:'hha122',number:4}
    ],'number','desc')
  }
  const [ lis, setLis ] = useState(orderByList)
  const tabShow = [
    {type:'hot',document:'热'},
    {type:'cold',document:'冷'},
  ]
  const [ showColor, setShow ] = useState('hot')
  const [ val ,setval ] = useState('')
  const handClick = ()=>{
    setCount(count+1);
    // 新对象替换老值
    setCount1({
      ...count1,
      name:'li'
    })
  }
  const del1 = (id)=>{
    const lisnew = lis.filter(item=>item.id !== id)
    setLis(lisnew)
  }
  // tab切换 数据   改变颜色和数据
  const tabClick = (type)=>{
    let lisn = ''
    switch (type) {
      case 'hot':
        lisn = lis.sort((a,b)=>a['number'] - b['number'])
        break;
    
      default:
        lisn =_.orderBy(lis,'number','desc')
        break;
    }
    setShow(type)
    setLis(lisn)
  }
  const but1 = ()=>{
    setLis([
      ...lis,
      {id:v5(), a:val, number:4},
    ])
    setval('')
    useRefInput.current.focus()
    console.log(dayjs(new Date()).format('YYYY-MM'))
  }
  const add1 = (aa)=>{
    console.log('add',aa)
  }
  useEffect(()=>{
    dispatch(fetchChannlList())
  },[dispatch])
  return (
    <div className="App">
      {changeList.map(item=><div key={item.id}>{item.id}</div>)}
      {/* redux */}
      <button onClick={()=>{dispatch(decrement())}}>+</button>
      <div>{count2}</div>
      <button onClick={()=>{dispatch(inscrement())}}>-</button>
      <button onClick={()=>{dispatch(add10(10))}}>10+</button>
      <div>/////////</div>
      <Edit></Edit>
      <Son name='11' add={add1}>
        哈哈
      </Son>
      {/* 受控表达绑定和 获取dom */}
      <input
        ref={useRefInput}
        value={val}
        placeholder='hehe'
        onChange={(e)=>{setval(e.target.value)}}
      />
      <button onClick={but1}>发布</button>
      {tabShow.map(item=>
      // 切换 tab classname 
      <div 
        key={item.type} 
        onClick = {()=>tabClick(item.type)}
        className={`add ${showColor === item.type && 'changeColor'}`}
      >
          {item.document}
          </div>
      )}
      {/* {sss('1')} */}
      {/* 写表达式，不能语句 */}
      {'开始喽，加油干'}
      {ass()}
      {ac}
      {/* 多列渲染 */}
      {list.map((item,key) => <div key={key}>{item.a}</div>)}
      {/* 判断 */}
      {ad && 22}
      {n && 22221}
      {ad?'1':'2'}
      {/* 绑定事件 */}
      {<div onClick={sss}>22232323232</div>}
      {<div onClick={(e)=>sss(1,e)}>22232323232</div>}
      {/* 定义组件 */}
      <But/>
      {/* usestate使用，是替换 */}
      <button onClick={handClick}>{count}{count1.name}</button>
      {lis.map(item=><div key={item.id}>{item.a}<div onClick={()=>del1(item.id)}>{item.my && '删除'}</div></div>)}
    </div>
  );
}

export default App;
