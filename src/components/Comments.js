import React, { useState } from 'react'
import { useEffect } from 'react';
import { API_KEY } from '../utils/constant';
import Commentlist from './Commentlist';


const Comments = ({vid}) => {

  const [commentinfo ,setcommentinfo]=useState([]);

    useEffect (()=>
        {
         commentfetchapi();
        },[]);
        const commentfetchapi = async()=>
        {
          const apidata = await fetch('https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=30&videoId='+vid+'&key='+API_KEY);
          const json = await apidata.json();
          // console.log(json.items);
          setcommentinfo(json.items);
            
        }
        // console.log(commentinfo);
  return (
    <div className=' w-[1200px] m-6 shadow-lg'>
      <div className=' text-2xl font-bold p-2'>
      Comments :
      </div>
      <Commentlist commentinfo={commentinfo}/></div>
    
  )
}

export default Comments;