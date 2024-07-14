import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const showmenu = useSelector(store => store.app.ismenuopen);
  return (showmenu && 
    <div className=' col-span-1 w-56  shadow-lg'>
       <ul className=' font-semibold text-lg border-b-2 pl-5'>
        <Link to='/'><li> Home</li></Link>
        <li>Shorts</li>
        <li>Subscrption</li>
       </ul>
       <div>
        <h1 className=' font-bold text-2xl px-2'>you</h1>
        <ul className=' font-semibold border-b-2 pl-5 text-lg '>
        <li> Your Channel</li>
        <li>History</li>
        <li>Playlist</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
       </ul>
       </div>
       <div>
        <h1 className=' font-bold text-2xl px-2'>Explore</h1>
        <ul className=' font-semibold border-b-2 pl-5 text-lg '>
        <li> Trending </li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
       </ul>
       </div>
        </div>
  )
}

export default Sidebar;