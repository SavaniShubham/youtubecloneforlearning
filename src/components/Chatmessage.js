import React from 'react'

const Chatmessage = ({name , message}) => {
  return (

    <div className='flex  items-center p-2  '>
        
           <img 
           className='h-6 rounded-full mr-3 '
           alt='chatimage'
           src='https://yt3.ggpht.com/ytc/AIdro_lPLRfn_9CcibqWJAVHbtEluWckjCg5W-Tbor0l1ZPwUXZC_LSbMeWYgo8hzNNHXaKWSw=s108-c-k-c0x00ffffff-no-rj'
           ></img>
        
        <span className=' font-bold mr-2'>{name}

        </span>
        <span>{message}</span>
    </div>
     
  )
}

export default Chatmessage