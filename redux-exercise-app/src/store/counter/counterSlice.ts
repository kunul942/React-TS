import { createSlice,PayloadAction } from '@reduxjs/toolkit'

interface counterState {
    counter: number
}

const initialState:counterState = {
    counter:0
}


export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        incrementar: ( state, action:PayloadAction<number> )=>{
            state.counter = state.counter + action.payload
        },
        decrementar: ( state,action:PayloadAction<number> ) =>{
            state.counter = state.counter - action.payload
        },
        reset: (state, action:PayloadAction<number> ) => {
            state.counter = action.payload
        }
    }
})


export const { incrementar, decrementar, reset } = counterSlice.actions

