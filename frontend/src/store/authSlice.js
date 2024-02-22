import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  token: "",
  isLogin: false,
  user: undefined,
};
const authSlice = createSlice({
  name: "tokenData",
  initialState,
  reducers: {
    setToken(state, actions) {
      state.token = actions.payload;
      state.isLogin = true;
      localStorage.setItem("token_jwt", actions.payload);
      // console.log("token added");
    },
    removeToken(state, action) {
      state.token = "";
      state.isLogin = false;
      state.user=undefined
      localStorage.removeItem("token_jwt");
    },
    getToken(state, action) {
      return state.token;
    },
    getIsLogin(state, action) {
      return state.isLogin;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    getUser(state, action) {
      return state.user;
    },
  },
});
export default authSlice.reducer;
export const { setToken, removeToken, getIsLogin, getToken, getUser, setUser } =
  authSlice.actions;
export function fetchUser() {
  return async function fetchUserData(dispatch, getState) {
    try {
      const token = getState().authData.token;
      //   console.log(token)
      axios
        .get("/api/auth/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setUser(res.data));
          console.log(getState().authData.user);
          return res.data
        })
        

      //   const response = await fetch("/api/auth/user", {

      //     method: "GET",
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   });
      // //   const relt= await response.json();

      //   console.log("gettn", response);

      //   if (response.status==200) {
      //     const userData = await response.json();
      //     dispatch(setUser(userData));
      //
      //   }
    } catch (error) {
      console.log("cant get user", error);
    }
  };
}
