import Comment from "./Comment";


const Commentlist = ({commentinfo})=>
    {
      if (!commentinfo || commentinfo.length === 0) {
        return <div>No comments available.</div>;
      }
      const filteredComments = commentinfo.filter(comm => {
        const comment = comm.snippet.topLevelComment.snippet;
        return comment && !comment.textDisplay.includes('<');
      });
      return(
        <div>
          {

        // console.log(commentinfo[1]?.snippet?.topLevelComment?.snippet);
              
            filteredComments.map((comm) => (
              <Comment
                key={comm.snippet.topLevelComment.snippet.updatedAt}
                info={comm.snippet.topLevelComment.snippet}
              />
            ))
          }
        </div>
      )
        
    }

    export default Commentlist;