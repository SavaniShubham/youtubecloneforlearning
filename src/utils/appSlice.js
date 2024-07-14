import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice(
    {
        name:'app' ,
        initialState :{
            ismenuopen : true ,
        },
        reducers:
        {
            togglemenu : (state )=>
            {
                state.ismenuopen = !state.ismenuopen ;

            },
            closemenu : (state)=>
            {
                state.ismenuopen = false ;
            }
        }


    }
);
export default appSlice.reducer;
export const { togglemenu  , closemenu} =  appSlice.actions ;