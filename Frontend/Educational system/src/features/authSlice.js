import { createSlice } from "@reduxjs/toolkit";

const initialState={
  token: localStorage.getItem("token")||null,
  user: null,
  iserror: null,
  loading: false

}
const authslice=createSlice({
  
  name: "auth",
  initialState,
  reducers:{
    loginStart:(state)=>{
      state.loading=true;
      state.iserror=null
    },
    loginSuccess:(state,action)=>{
      state.loading=false,
      state.user=action.payload.user,
      state.token=action.payload.token
    },
    loginfailure:(state,action)=>{
      state.loading=false,
      state.error=action.payload
    },
    logout: (state,action)=>{
      state.loading= false,
      localStorage.removeItem("token")
      state.user= " "
    }
    
  }
})

export const {
  loginStart,
  loginSuccess,
  loginfailure,
  logout

}=authslice.actions

export default authslice.reducer