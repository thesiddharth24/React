import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    username: "siddharth",
    age: 21
  }
  let newArr =[1,2,3,4];

  return (
    <>
    <h1 className='bg-green-400 text-black p-4
    rounded-xl mb-4'>Tailwind text</h1>


    <Card username="Chai or code"  btnText="click me"/>
    <Card username="siddharth" btnText="visit me"/>
    </>
  )
}

// here Card is a component so it will behave like a html
export default App
