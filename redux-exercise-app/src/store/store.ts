import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { configureStore,  } from '@reduxjs/toolkit'

import { counterSlice } from './counter/counterSlice'

export const store = configureStore({
    reducer:{
        counters: counterSlice.reducer
    }
})


export const useAppDispatch: ()=> typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector



