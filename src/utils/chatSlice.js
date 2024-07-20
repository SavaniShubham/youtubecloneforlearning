import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice(
    {
        name:'chat',
        initialState:{
            messages:[]
        },
        reducers:
        {
            addchatdata:(state , action)=>
            {
                state.messages.splice(30,1);
                state.messages.unshift(action.payload);

            }

        }
    }
)

export default chatSlice.reducer;
export  const {addchatdata} = chatSlice.actions;
