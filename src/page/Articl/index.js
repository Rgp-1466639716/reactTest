import { useSearchParams,useParams } from 'react-router-dom'

const Articl =()=>{
  // searchParams 传参
  // const [ params ] = useSearchParams()
  // const name = params.get('name')
  // params 传参
  const params2 = useParams()
  const name2 = params2.name
  const id2 =params2.id
  return<div>我wezhang{name2}{id2}</div>
}
export default Articl