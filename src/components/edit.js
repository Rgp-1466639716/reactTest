import React, { useEffect, useState } from 'react';

const Son = () =>{
  useEffect(()=>{
    const setaa = setInterval(()=>{
      console.log(11111111)
    },1000)
    return ()=>clearInterval(setaa)
  },[])
}
const useToto = ()=>{
  const [ show, setShow ] = useState(true)
  const handleShow =()=>setShow(!show)
  return{ show, handleShow }
}
const Edit = (props)=>{
  const { show, handleShow } = useToto()
  return <div>
      {show && <Son/>}
      <button onClick={handleShow}>点击事件</button>
  </div>
}
export { Edit }