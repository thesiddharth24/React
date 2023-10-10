import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //state k sath UI change ho raha hai 
  let [counter , setCounter] = useState(15);

//  let counter =5;
  
 const addValue = ()=>{
  console.log('clicked',counter)
    //  counter=counter+1;
    //  setCounter(counter + 1);
    //  setCounter(counter + 1);
    //  setCounter(counter + 1);
    //  setCounter(counter + 1);
    //+1 karega
    
     setCounter((prevCounter) => prevCounter+1);
     setCounter((prevCounter) => prevCounter+1);
     setCounter((prevCounter) => prevCounter+1);
     setCounter((prevCounter) => prevCounter+1);
     //+4 karega
   

 }

 const removeValue = ()=>{
  if(counter >0){
    setCounter(counter - 1);
  }
  
 }

  return (
    <>
       <h1> chai or react</h1>
       <h2>counter value : {counter}</h2>

       <button onClick={addValue}>Add value{counter}</button>
       <br/>
       <button onClick={removeValue}>remove value {counter}</button>
       <p> Footer:{counter}</p>

    </>
  )
}

export default App
