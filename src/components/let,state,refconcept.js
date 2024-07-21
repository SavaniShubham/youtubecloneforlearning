
import React, { useRef, useState } from 'react'

const Demo = () => {
    let x = 0;
    const [y , sety]=useState(0);
    const z=useRef(0);
    // console.log(z);
    console.log("render the demo component ...");
 
         return (
   
    <div className=' w-96 h-96 border border-black' >

        <div>
        <button className=' p-2 m-2 bg-orange-200 rounded-lg' onClick={()=> {x=x+1; console.log(x)}}>increment x</button>
        <span>x={x}</span>
        </div>


        <button className=' p-2 m-2 bg-orange-200 rounded-lg' onClick={()=> {sety(y+1) }}>increment y</button>
        <span>y={y}</span>

        <div>
        <button className=' p-2 m-2 bg-orange-200 rounded-lg' onClick={()=> { z.current = z.current +1; console.log(z.current);}}>increment z</button>
        <span>z={z.current}</span>
        </div>
    </div>
  
  )
}

export default Demo;


//in here we increment x but it not  shown in the ui (it don't re-render the component and if component  re-render it value will be 0)
//y is set variable it shown in the ui and it re-render the component
//z is ref if we increment the value it store that value but not re-render the component (therefore it value is not shown on ui) after the component re-render it updated value is shown on the ui