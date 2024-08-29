import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
 const[jokes,setJokes]=useState([])


 useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    setJokes(response.data)
  })
  .catch((error)=>{
    console.log(error)  
  })
 })
  return (

    <>
      <div>
      <h1>Jokes sunlo!! hurrahhh </h1>  
      </div>
      <p>
        JOkes {jokes.length}
      </p>
      <p></p>
      {
        jokes.map((jokes,index)=>(
          
          <div key={jokes.id}>
            <h3>{jokes.title}</h3>
            <p>{jokes.content}</p>
          
          </div>
        ))
      }
    </>
  )
}

export default App
