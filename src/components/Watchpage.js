import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closemenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

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
    <div className=' col-span-11'>
      <iframe className=' m-6 rounded-t-lg' width="1200" height="550"
       src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
  )
}

export default Watchpage