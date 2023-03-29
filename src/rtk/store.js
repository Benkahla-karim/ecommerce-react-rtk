import { configureStore } from '@reduxjs/toolkit'
import BagReducer from './slices/bag-slice'
export const store = configureStore({
    reducer: BagReducer
})