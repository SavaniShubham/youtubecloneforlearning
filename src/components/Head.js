import React from 'react'
import { useDispatch } from 'react-redux'

import { togglemenu } from '../utils/appSlice';


const Head = () => {

    const dispatch = useDispatch();
   

    const handleslidebar = ()=>
    {
        dispatch(togglemenu());

    }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className=' flex col-span-1'>
            <img  className=' mt-6 mr-2 h-6 cursor-pointer' src='https://cdn-icons-png.flaticon.com/128/1828/1828859.png' alt='menu icon' onClick={()=>handleslidebar()}></img>
            <a href='/'><img className='h-20' src='https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg' alt=' youtube logo'></img></a>
        </div>
        <div className='flex pt-6 col-span-10'>
            <input className='p-2 w-1/2 h-9 border border-gray-400 rounded-l-full' type='text' placeholder=' Search '></input>
            <img  className=' h-9 p-2 px-4 border border-gray-400  rounded-r-full bg-gray-100' src='https://cdn-icons-png.flaticon.com/128/54/54481.png' alt='search icon'></img>
        </div>
        <div className=' pt-6 col-span-1'>
            <img className=' h-8' src='https://cdn-icons-png.flaticon.com/128/456/456212.png' alt=' profile'></img>
        </div>
    </div>
  )
}

export default Head;