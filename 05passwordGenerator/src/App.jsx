import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");

  //ref hook
  const passwordRef = useRef(null);

  //Password generator method 
   const passwordGenerator = useCallback(() => {
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed){
        str +="0123456789"
      }
      if(charAllowed){
        str+="`!@#$%^&*(){}[]-_=~"
      }

      for(let i=0;i< length;i++){
        let char = Math.floor(Math.random() * str.length + 1);

        pass += str.charAt(char);
      }

      //value read karo then 
      setPassword(pass)
   } , [length,numberAllowed,charAllowed , setPassword]);

   const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
      window.navigator.clipboard.writeText(password);
   },[password,passwordRef]);
   
   //use effect means kush bhi ched chaad ho dependencies me toh dubara run kar do 
   useEffect(()=>{
    passwordGenerator();
    
   },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'>
      <h4 className='text-white text-center '>Password generator
      </h4>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef} />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
        Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
           min={6}
           max={100}
           value={length}
           className='cursor-pointer'
           onChange={(e) => {setLength(e.target.value)}} />
           <label >Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
           defaultChecked={numberAllowed}
           id="numberInput"
           onChange={() => {
            //prev value ko reverse kar do 
            setNumberAllowed((prev) => !prev);
           }}/>
           <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>

      </div>
      </div>
    </>
  )
}

export default App
