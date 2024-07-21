

const Comment = ({info})=>
    {
  
      if (!info) return null;
    //   console.log(info);
      
        const {authorDisplayName , authorProfileImageUrl , textDisplay } = info ;
        // console.log(textDisplay);
        return(
        <div className=' flex m-4 pb-2 shadow-sm'>
            <img  className=' rounded-full h-10' alt='autho imag' src={authorProfileImageUrl}></img>
            <div className=' pl-3'>
            <div className=' font-bold'>{authorDisplayName} </div>
            <div className=' '>{textDisplay}</div>
            </div>
           
        </div>)
    }

    export default Comment;