// import React from 'react'
// import Index from './Index.jsx'
// import { useState } from 'react'


// /*function App({name}) {
//   const [data , setData ] = useState("Welcome")
//   return (
//     <div>
//       <h1> hello {data}</h1>
//       <button onClick={() => setData("hiiii")}>click</button>
//       <button onClick={() => setData("")}>Clear</button>
//     </div>
//   )
// }
//   */
//  /*function App({name}) {
//   const [count , setCount ] = useState(0)
//   return (
//     <div>
//       <h1> Count {count} </h1>
//       <button onClick={() => setCount(count + 1)}>Count</button>
//       <button onClick={() => setCount(0)}>Restart</button>
//       <button onClick={() => setCount(count*2)}>Double</button>
//     </div>
//   )
//  }

// export default App
// */
// import Reeact, {use} from 'react'
// import Index from './Index.jsx'
// import ExpenseContainer from "./Component/ExpenseContainer.jsx"

// function App( ){
//   return (
//     <>
//     <ExpenseContainer/>
//     </>
//   )
// }
// export default App
import React from 'react'
import Index from './Index.jsx'
import {useState} from 'react'
import ExpenseContainer from './Component/ExpenseContainer.jsx'
function App() {
  
  return (
    <>
      
      <ExpenseContainer />
      
    </>
    
  )};

export default App