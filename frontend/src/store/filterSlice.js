import { createSlice } from "@reduxjs/toolkit";

const initialState={
    prices:"",
    cap:"",
    pchng:"",
    id:0,
    prid:0,
    cid:0,
    cgid:0,
   
}

const filterSlice=createSlice({

    name:"filter",
    initialState,
    reducers:{
        setPrice(state,actions){
            state.prices=actions.payload;
            state.prid=1;
            if(state.id<8)state.id+=1;
        },
        setcap(state,actions){
            state.cid=2;
            if(state.id<8)state.id+=2;
            state.cap=actions.payload;
        },
        setPchng(state,actions){
            state.cgid=3;
            // state.id<8?state.id+=4:;
            if(state.id<8)state.id+=4;
            state.pchng=actions.payload;
        },
        setInc(state,actions){
            state.id=4;
            
        },
        setDec(state,actions){
            state.id=5;

        }
    }
})
export default filterSlice.reducer;
export const {setPchng,setPrice,setcap,setDec,setInc} =filterSlice.actions;