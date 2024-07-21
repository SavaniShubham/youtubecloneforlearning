import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { togglemenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_SUGG } from '../utils/constant';
import { cacheresult } from '../utils/seachsuggestionslice';


const Head = () => {

    const dispatch = useDispatch();
    const [searchquery , setsearchquery]=useState("");
    const [suggestion , setsuggestion] = useState([]);
    const [showsuggestion , setshowsuggestion]=useState(false);
    const searchcache = useSelector(store=>store.search);
    
   
    useEffect(()=>
    {   //api call
        console.log(searchquery);
        //make api call for every key press but if the differnece between 2 api calls is <200ms then decline the api call
      const timer =  setTimeout(()=> 
        { if (searchcache[searchquery]) {
            setsuggestion(searchcache[searchquery]);
        }
        else
        {
            getsearchsuggapi();
        }
       
        },200);
       
            return ()=>
            {
                clearTimeout(timer);
            };

    },[searchquery]);
    const getsearchsuggapi=async ()=>
    {
        const data = await fetch(YOUTUBE_SEARCH_SUGG + searchquery);
        const json = await data.json();

        // console.log(json);
        console.log(json[1]);
        setsuggestion(json[1]);

        //update the cache
        dispatch(cacheresult({[searchquery] : json[1] ,}));


    }
   

    const handleslidebar = ()=>
    {
        dispatch(togglemenu());

    }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className=' flex col-span-1'>
            <img  className=' mt-6 mr-2 h-6 cursor-pointer' src='https://cdn-icons-png.flaticon.com/128/1828/1828859.png' alt='menu icon' onClick={()=>handleslidebar()}></img>
            <a href='/'><img className='h-20' src='https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg' alt=' youtube logo'></img></a>
        </div>
        <div className=' pt-6 col-span-10'>
            <div className='flex'>
                
            
            <input className='p-2  px-5 w-1/2 h-9 border border-gray-400 rounded-l-full' type='text' placeholder=' Search ' value={searchquery} onChange={(e)=>setsearchquery(e.target.value)} onFocus={()=>setshowsuggestion(true)} onBlur={()=>setshowsuggestion(false)}></input>
            <img  className=' h-9 p-2 px-4 border border-gray-400  rounded-r-full bg-gray-100' src='https://cdn-icons-png.flaticon.com/128/54/54481.png' alt='search icon'></img>
            </div>
            {showsuggestion &&
            <div className=' px-2 absolute bg-white w-[39.5rem] shadow-lg rounded-xl'>
                <ul>
                    {
                        suggestion.map((sugg)=> <li  key={sugg} className='py-2 px-3 hover:bg-gray-100 shadow-sm' onMouseDown={ ()=> setsearchquery(sugg)}>{sugg}</li>)
                    }
                   
                </ul>
            </div>
            }   
        </div>
        <div className=' pt-6 col-span-1'>
            <img className=' h-8' src='https://cdn-icons-png.flaticon.com/128/456/456212.png' alt=' profile'></img>
        </div>
    </div>
  )
}

export default Head;



//debouncing search 
//key - i press
// render the component 
//useeffect() is call
// start the timer => make api call after 200ms


//key -ip press
//destory the component (useeffect return method is call)(this will work if differnece between key stoke  is less then 200ms)
//re-render the component
//useeffect() is call
// start the timer => make api call after 200ms