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

// array.splice(start, deleteCount, item1, item2, ...)

// The splice() method in JavaScript is used to modify an array by adding or removing elements. It can be used to perform various operations on an array, such as inserting, deleting, or replacing elements.

// const fruits = ['Apple', 'Date'];
// fruits.splice(1, 0, 'Banana', 'Cherry'); // Adds 'Banana' and 'Cherry' at index 1
// console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date']

// const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
// fruits.splice(1, 2); // Removes 2 elements starting from index 1
// console.log(fruits); // Output: ['Apple', 'Date']

// const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
// fruits.splice(1, 2, 'Mango', 'Pineapple'); // Removes 2 elements starting from index 1, and adds 'Mango' and 'Pineapple'
// console.log(fruits); // Output: ['Apple', 'Mango', 'Pineapple', 'Date']


// array.slice(start, end)
// The slice() method in JavaScript is used to create a shallow copy of a portion of an array and return it as a new array. It does not modify the original array.
// const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
// const slicedFruits = fruits.slice(1, 3);
// console.log(slicedFruits); // Output: ['Banana', 'Cherry']
// console.log(fruits);       // Output: ['Apple', 'Banana', 'Cherry', 'Date'] (original array is unchanged)


