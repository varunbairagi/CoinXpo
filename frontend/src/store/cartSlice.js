import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  isLoading: true,
  final_amount: [],
  payment:true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPro(state, actions) {
      // console.log(actions.payload)
      let idx = state.data.findIndex(
        (index) => index.uuid == actions.payload.uuid
      );
      // console.log(idx)
      if (idx === -1) {
        state.data.push({ ...actions.payload, quantity: 1 });
      } else {
        state.data[idx].quantity += 1;
      }
      localStorage.setItem("cartI", JSON.stringify(state.data));
      // console.log(state.data[0])
    },
    dltPro(state, actions) {
      // const d=actions.payload.uuid;
      // console.log(actions.payload)
      state.data = state.data.filter(
        (item) => item.uuid != actions.payload.uuid
      );
      state.final_amount = state.final_amount.filter((el, i) =>
        i == actions.payload.id ? null : el
      );
      localStorage.setItem("cartI", JSON.stringify(state.data));
    },
    setAmt(state, actions) {
      state.final_amount.push(actions.payload);
      // console.log(actions.payload)
    },
    chngAmt(state, actions) {
      state.final_amount[actions.payload.id] = actions.payload.value;
      console.log(actions.payload.id);
    },
    setQuant(state, actions) {
      state.data.map((el, i) => {
        if (el.uuid === actions.payload.uuid)
          return (el.quantity = actions.payload.qunt);
      });
      localStorage.setItem("cartI", JSON.stringify(state.data));
      
      // console.log(state.data)
    },
  },
});

export default cartSlice.reducer;
export const { addPro, dltPro, setAmt, setQuant, chngAmt } = cartSlice.actions;
export function setCartData() {
  return async function setCartD(dispatch, getState) {
    
    try {
      // let cd1 =await getState().cartData.data;
      // let pmt=await getState().cartData.payment;
      let {payment,final_amount,data}=await getState().cartData;
      const amount=final_amount.reduce((sum,el)=>sum+parseFloat(el),0)
      let url= payment?"/api/user/order/":"/api/user/update/"
      console.log(final_amount);

      if(payment){
        const res = await fetch(`${url}65d33025fc364aaf9d8f1822`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ items: data,amount }),
        });
        console.log(res);
      }
      else{const res = await fetch(`${url}65d33025fc364aaf9d8f1822`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ values: data }),
      });
      console.log(res);}
    } catch (error) {
      console.log(error);
    }
  };
}
