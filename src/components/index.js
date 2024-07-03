import React from 'react';
import { createContext, useContext } from 'react';

const MyCoutext =  createContext(null)
const Sun = ()=>{
  // 函数组件获取 dataFunction
  const dataFunction = useContext(MyCoutext)
  console.log('dataFunction',dataFunction)
  // 类组件获取 
  const had = (value)=>{
    console.log(1221,value)
  }
  return <div>
    <MyCoutext.Consumer name={'小强'}>
      {had}
    </MyCoutext.Consumer>
    </div>
}
const Son = () =>{
  return<Sun/>
}
const Index = (props)=>{
  props.add('哈哈哈·')
  return <div>
    {props.name}{props.children}
    <MyCoutext.Provider value={'小强'}>
      <Son/>
    </MyCoutext.Provider>
  </div>
}
export { Index }