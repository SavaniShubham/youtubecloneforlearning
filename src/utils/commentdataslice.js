import { createSlice } from "@reduxjs/toolkit";

const commentdataslice = createSlice(
    {
        name:'comment' ,
        initialState :{
            commentdata:[],
        },
        reducers:
        {
            addcomment : (state , action )=>
            {
                state.commentdata.push(action.payload) ;

            },
            removecomment : (state , action)=>
            {
               state.commentdata.length = 0;
            }
        }


    }
);
export default commentdataslice.reducer;
export const { addcomment  , removecomment} =  commentdataslice.actions ;
