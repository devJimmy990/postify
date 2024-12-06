'use client'
import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slices/PostSlice'
const store = configureStore({
    reducer: {
        post: postReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;

