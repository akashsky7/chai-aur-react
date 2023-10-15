import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  //counter is a variable and setCounter is a function whose work is to update counter variable

  const reduceValue = () => {
    //console.log("clickedreduce",  counter);
    if(counter >= 1){
      setCounter(counter-1);
    }
    
  }
  const addValue = () =>{
    //console.log("clicked",counter);
    if(counter < 20){
      setCounter(counter+1);
    }
    
  }
  //let counter = 5
  return (
    <>
      <h1>chai or react</h1>
      <h2>Counter Value : {counter}</h2>
      <br/>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={reduceValue}>Reduce value</button>
    </>
  )
}

export default App
