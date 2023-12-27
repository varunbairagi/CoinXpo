import { configureStore } from '@reduxjs/toolkit'
import coindSlice from './coindSlice'
import singleCSlice from './singleCSlice'
import cartSlice from './cartSlice'
import filterSlice from './filterSlice'
const store = configureStore({
  reducer: {
    coinData:coindSlice,
    singleCData:singleCSlice,
    filterData:filterSlice,
    cartData:cartSlice,
  },
})
export default store