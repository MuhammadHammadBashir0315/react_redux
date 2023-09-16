import {createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name : 'counter',
    initialState : 20,
    reducers :{
        increment : (state, payload)=>{ 
            console.log(payload.payload)
            console.log(state)
            // state.value += payload.payload
            return state = state + payload.payload
        },
        decrement : (state)=>{state -=1}
    }
})

export const {increment, decrement} = counterSlice.actions 
export default counterSlice.reducer