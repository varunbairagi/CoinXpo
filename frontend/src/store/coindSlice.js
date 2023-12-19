import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {},
  isLoading:true,
};

const coindSlice = createSlice({
  name: "coinData",
  initialState,
  reducers: {
    setData(state, actions) {
      state.data = actions.payload;
      state.isLoading=false;
    },
    setLoader(state,actions){
      state.isLoading=actions.payload
    }
  },
});
export default coindSlice.reducer;
export const { setData,setLoader } = coindSlice.actions;
export function fetchFinalData(){
  return async function fetchData(dispatch, getState) {
      const url =
        "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "11953919f1msha36b523db985331p136566jsnef85400936d7",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        dispatch(setData(data.data));
        // dispatch();
        // console.log(data);
      } catch (e) {
        console.log(e);
      }
    
  };
};
