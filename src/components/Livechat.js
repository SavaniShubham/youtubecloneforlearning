import React, { useEffect, useState } from 'react'
import Chatmessage from './Chatmessage'
import { useDispatch, useSelector } from 'react-redux'
import { addchatdata } from '../utils/chatSlice';
import { createRandommessage, randomnamegenerate } from '../utils/helper';

const Livechat = () => {

    const dispatch = useDispatch();
    const chatmessages = useSelector((store)=>store.chat.messages);
    const [livechatmsg , setlivechatmsg]=useState("");
    

    useEffect(()=>
    {
         const clearid=setInterval(()=>
        {
                dispatch(addchatdata(
                    {
                        name:randomnamegenerate(),
                        message:createRandommessage(20),
                    }
                ))
        } , 1500);

        return ()=>clearInterval(clearid);

    },[])

   
  return (
    <>
    <form className=' w-1/4' onSubmit={(e)=>{e.preventDefault();
         dispatch(addchatdata({
            name:"shubham savani",
            message:livechatmsg ,
            }
            )) 
            setlivechatmsg("");
            }}>
   
        <div className='  flex justify-between pl-3  p-3 mt-6 border border-black  rounded-t-xl'>
        Livechat ▼
        <div >
        <span className=' mr-6'> ⋮</span>
        <span className=' mr-2'>☓</span>
        </div>

        </div>
       
        <div className='   h-[455px]  pl-4 p-2  border border-black bg-slate-100  overflow-y-scroll flex flex-col-reverse  '>
        {
            chatmessages.map((c , index)=><Chatmessage key={index} name={c.name} message={c.message}/>)
        }
        </div>

        <div className='  flex justify-center  p-2  border border-black  rounded-b-xl'>

            <input className=' w-[340px] pl-3  p-2 rounded-3xl border border-black' value={livechatmsg} placeholder='chat...'
            onChange={(e)=>setlivechatmsg(e.target.value)} ></input>
    
        </div>
        </form>
       </>
  )
}

export default Livechat;

//e.preventDefault() prevents the default form submission action, which would normally reload the page and submit the form data to the server.

