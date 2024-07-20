import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closemenu } from '../utils/appSlice';
import {  useSearchParams } from 'react-router-dom';
import Comments from './Comments';
import Livechat from './Livechat';

const Watchpage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  // console.log(searchParams);
  console.log(searchParams.get("v"));
  useEffect (()=>
  {
    dispatch(closemenu());

  } , []);
  return (
    
    <div className=' col-span-11 '>
      <div className=' flex'>
      <iframe className=' m-6 rounded-t-lg' width="1200" height="550"
       src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        
        <Livechat/>
     
        </div>
        <div>
       
        </div>
        
        </div>

     
  )
}

export default Watchpage;