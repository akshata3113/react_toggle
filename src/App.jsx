import { useEffect, useState } from 'react'
import User from './components/User'

function App() {
  const [display, setDisplay] = useState(true)
  const [count,setCount]=useState(0)
 const[color,setColor]=useState(0)
  
  useEffect(()=>{
    alert("count was changed")
  },[count])

  
  return (
    <>
    <User color={"navy" + "blue"}/>
      <h1>Toggle in react</h1>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>

{
  display?  <h1>User Akshata</h1>:null
}
    
    </>
  )
}

export default App
//Commit 2
