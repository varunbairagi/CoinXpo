import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  isLoading:true,
};
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
      addPro(state,actions){
          state.data.push(actions.payload)
          // console.log(state.data)
      },
      dltPro(state,actions){
        // const d=actions.payload.uuid;
        state.data= state.data.filter(item=>item.uuidid!==actions.payload.uuid)
      }

    }
})

export default cartSlice.reducer
export const {addPro,dltPro}=cartSlice.actions