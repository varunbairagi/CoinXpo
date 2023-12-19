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
export function fetchSignleCData(id) {
  return async function fetchData(dispatch, getState) {
    console.log(id)
    const url = `https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "11953919f1msha36b523db985331p136566jsnef85400936d7",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      dispatch(setCData(result.data));
      // console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  };
}
