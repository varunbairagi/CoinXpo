import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  isLoading:true,
  final_amount:0,
};
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
      addPro(state,actions){
          state.data.push(actions.payload)
          state.data=state.data.map((val,i)=>{
            if(val.uuid==actions.payload.uuid){
              val={...val,"amount":1}
            }
          })
          console.log(state.data)
      },
      dltPro(state,actions){
        // const d=actions.payload.uuid;
        state.data= state.data.filter(item=>item.uuidid!==actions.payload.uuid)
      },
      setAmt(state,actions){
        state.final_amount= parseFloat(state.final_amount+actions.payload );
        if(state.final_amount<0) state.final_amount=0
        console.log(state.final_amount)
      }

    }
})

export default cartSlice.reducer
export const {addPro,dltPro,setAmt}=cartSlice.actions