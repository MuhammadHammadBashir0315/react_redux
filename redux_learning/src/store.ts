import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice'

const store = configureStore({
    reducer:{
        counterReducer: counterReducer
    }
})

export default store