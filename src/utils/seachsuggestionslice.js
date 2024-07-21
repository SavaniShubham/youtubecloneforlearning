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


//const state = { a: 1, b: 2, c: 3 };
// const action = { payload: { b: 4, d: 5 } };

// Object.assign(state, action.payload);
// { a: 1, b: 4, c: 3, d: 5 }


// const state = { a: 1, b: 2, c: 3 };
// const action = { payload: { b: 4, d: 5 } };

// const newState = { ...action.payload, ...state };

// { b: 2, d: 5, a: 1, c: 3 }


