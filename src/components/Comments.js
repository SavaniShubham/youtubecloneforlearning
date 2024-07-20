import React, { useState } from 'react'
import { useEffect } from 'react';
import { COMMENTS_API } from '../utils/constant';

const Comments = () => {

  const [commentinfo ,setcommentinfo]=useState([]);
  

    
    useEffect (()=>
        {
         commentdata();
      
        },[]);
        const commentdata = async()=>
        {
          const apidata = await fetch(COMMENTS_API);
          const json = await apidata.json();
          console.log(json.items);
          setcommentinfo(json.items);
          
         
      
        }
        console.log(commentinfo[0].snippet.topLevelComment.snippet);
    
  return (
    // <div><Commentlist commentsinfo={commentinfo}/></div>
    <div>comment</div>
  )
}

const Commentlist = ({commentsinfo})=>
{
    commentsinfo.map((comm)=> <Comment info={comm.snippet?.topLevelComment?.snippet}/>)
    
}
const Comment = ({info})=>
{
    const {authorDisplayName , authorProfileImageUrl , textDisplay } = info ;
    console.log(textDisplay);
    return(
    <div>
        <img alt='autho imag' src={authorProfileImageUrl}></img>
        <p>{authorDisplayName} </p>
        <p>{textDisplay}</p>
    </div>)
}

export default Comments;