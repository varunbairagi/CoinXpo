import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cSData: {},
  isLoading: true,
};
const singleCSlice = createSlice({
  name: "singleC",
  initialState,
  reducers: {
    setCData(state, actions) {
      state.cSData = actions.payload;
      state.isLoading = false;
    },
    setLoader(state,actions){
      state.isLoading=actions.payload
    }
  },
});
export default singleCSlice.reducer;
export const { setCData,setLoader } = singleCSlice.actions;
export function fetchSignleCData(id,cname) {
  return async function fetchData(dispatch, getState) {
    // console.log(id,cname)
    // const url = `https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "11953919f1msha36b523db985331p136566jsnef85400936d7",
    //     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    //   },
    // };

    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.json();
    //   dispatch(setCData(result.data));
    //   console.log(result.data);
    // } catch (error) {
    //   console.error(error);
    // }
    try {
      const res=await fetch(`http://localhost:8080/${id}`);
      const resl=await res.json();
      dispatch(setCData(resl))
      console.log(resl)
    } catch (err) {console.log(err)
      
    }
  };
}
