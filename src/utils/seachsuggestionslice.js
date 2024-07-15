import { createSlice } from "@reduxjs/toolkit";


const searchsuggestionslice= createSlice(
    {
        name:'search' ,
        initialState :{},
        reducers:
        {
            cacheresult : (state,action )=>
            {
            //    state = {...action.payload , ...state};
               //{"iphone " : ["eaeffa","ded3q"," so on "]}
               state = Object.assign(state , action.payload)

            },
            
        }


    }
);
export default searchsuggestionslice.reducer;
export const { cacheresult} =  searchsuggestionslice.actions ;