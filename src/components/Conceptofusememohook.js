import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../utils/helper'

import Demo from './let,state,refconcept';

const Conceptofusememohook = () => {

  const [text,settext]=useState(0);
  const [darkcolor,setcolor]=useState(false);


  // const prime = ()=> findNthPrime(text);
  const prime = useMemo(()=> findNthPrime(text) , [text]);
  console.log("rerender ...");
  console.log("calculate prime number for " , text);
  return (
    <>
    <div className={' w-96 h-96 border border-black' +  (darkcolor &&' text-white bg-black')  }>
      <input className=' m-3 p-2 border border-black text-black' value={text} onChange={(e)=>settext(e.target.value)} type='number' placeholder='enter number ...'></input>
      {/* <div className=' font-bold text-lg m-3'>nth prime number : {prime()}</div> */}
      <div className=' font-bold text-lg m-3'>nth prime number : {prime}</div>

      <button className=' m-3 border border-black p-3 cursor-pointer bg-green-300' onClick={()=> darkcolor ? setcolor(false) : setcolor(true)}>theme</button>

    </div>
    <Demo/>
   
    
    </>
  )
  
}

export default Conceptofusememohook;

//here we useMemo() hook - it cache between the result of two render
//means save value of of the previous render 
//in that it hase one function and second is dependency
// if the dependency change then it call the function to get the value otherwise use the cache value


//without using it if any time component re-render the page will be freeze(after value is very big and you try to change the theme)
//but prime is only dependent on the text not on the theme therfore it calculate only of the text state change not for evry render

