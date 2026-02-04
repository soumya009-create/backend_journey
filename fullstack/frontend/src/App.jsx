import { useEffect, useState } from "react";

import axios from "axios"


function App() {

 const [notes, setnotes] = useState([
  {
    title:"title 1",
    description:"des 1"
  },
  {
    title:"title 2",
    description:"des 2"
  },
  {
    title:"title 3",
    description:"des 3"
  }
 ])

 useEffect(()=>{
  axios.get('http://localhost:3000/notes').then((res)=>{
    setnotes(res.data.note);
    
    
   })
 },[])
  return (
   
  <div className="main">
     <div className="notes">
      {
        notes.map((elem,key)=>{
          return <div className="note" key={key}>
          <h1>{elem.title}</h1>
          <h4>{elem.description}</h4>
        </div>
        })
      }
   </div>
  </div>
  
  )
}

export default App
