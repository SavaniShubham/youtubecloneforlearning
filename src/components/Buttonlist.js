import React from 'react'
import Button from './Button'

const list = ["All","Gaming","Live","Music","Movies","Final","Comedy","web dev","Cricket","compouter","Chess" , "Mounatain" ,"life"] ;
const Buttonlist = () => {
  return (
    <div className=' flex'>
      {
      list.map((l)=>(<Button key={l} name={l}/>))
      
       }
     
    </div>
  )
}

export default Buttonlist