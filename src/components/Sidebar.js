import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SidebarSection = ({ title, items }) => (
  <div>
    <h1 className='font-bold text-2xl px-2'>{title}</h1>
    <ul className='font-semibold border-b-2 pl-5 text-lg'>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Sidebar = () => {
  const showMenu = useSelector(store => store.app.ismenuopen);

  if (!showMenu) return null;

  return (
    <div className='col-span-1 w-56 shadow-lg'>
      <ul className='font-semibold text-lg border-b-2 pl-5'>
        <Link to='/'><li>Home</li></Link>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <SidebarSection 
        title='You'
        items={['Your Channel', 'History', 'Playlist', 'Watch Later', 'Liked Videos']}
      />
      <SidebarSection 
        title='Explore'
        items={['Trending', 'Shopping', 'Music', 'Movies', 'Live', 'Gaming', 'News']}
      />
    </div>
  );
};

export default Sidebar;
