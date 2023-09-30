import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
}

const loggedInSlice = createSlice({
  name: "isLoggedIn",
  initialState,
  reducers: {
    logIn: state =>{
      state.loggedIn = true
    },
    logOut: state => {
      state.loggedIn = false
    }
  }
})

export const { logIn, logOut } = loggedInSlice.actions;

export default loggedInSlice.reducer