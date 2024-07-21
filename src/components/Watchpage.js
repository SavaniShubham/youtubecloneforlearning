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
        <Comments vid={searchParams.get("v")}/>
        </div>

     
  )
}

export default Watchpage;

// useSearchParams is used to access and manipulate the query parameters in the URL. These are the key-value pairs found after the ? in a URL.

// useParams is used to access URL parameters defined in the route path. These are typically part of the path itself, not the query string.