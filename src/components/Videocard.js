import React from 'react'

const Videocard = ({info}) => {
    const {snippet , statistics } = info;
    const {channelTitle , title , thumbnails} = snippet;
    console.log(info);
  return (
    <div className=' p-2 m-2'>
        <img  className=' rounded-lg' alt='thumbnail' src={thumbnails.medium.url}></img>
        <ul className=' w-[320px]'>
            <li className=' font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default Videocard