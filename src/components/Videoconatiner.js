import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';

const Videoconatiner = () => {
  const [videos , setvideos]= useState([]);
  useEffect (()=>
  {
    getvideodata();

  },[]);
  const getvideodata = async()=>
  {
    const apidata = await fetch(YOUTUBE_VIDEO_API);
    const json = await apidata.json();
    console.log(json.items);
    setvideos(json.items);

  }
  return (
    <div className=' flex flex-wrap'>
      
      {videos.map((video)=>(   <Link key={video.id} to={"/watch?v="+video.id}><Videocard  info={video}/></Link>))}
    
    </div>
  )
}

export default Videoconatiner;