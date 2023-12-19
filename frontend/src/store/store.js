import { configureStore } from '@reduxjs/toolkit'
import coindSlice from './coindSlice'
import singleCSlice from './singleCSlice'
const store = configureStore({
  reducer: {
    coinData:coindSlice,
    singleCData:singleCSlice,
  },
})
export default store