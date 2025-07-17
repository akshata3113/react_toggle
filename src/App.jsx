import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState(true)

  return (
    <>
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
