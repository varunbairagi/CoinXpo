import { configureStore } from '@reduxjs/toolkit'
import coindSlice from './coindSlice'
import singleCSlice from './singleCSlice'
import cartSlice from './cartSlice'
import filterSlice from './filterSlice'
import authSlice from './authSlice'
const store = configureStore({
  reducer: {
    coinData:coindSlice,
    singleCData:singleCSlice,
    filterData:filterSlice,
    cartData:cartSlice,
    authData:authSlice
  },
})
export default store