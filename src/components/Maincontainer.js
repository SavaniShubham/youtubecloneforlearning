import React from 'react'
import Buttonlist from './Buttonlist'
import Videoconatiner from './Videoconatiner'

const Maincontainer = () => {
  return (
    <div className=' col-span-11 px-4'>
        <Buttonlist/>
        <Videoconatiner/>
    </div>
  )
}

export default Maincontainer