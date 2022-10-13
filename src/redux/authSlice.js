const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: false,
  },
  reducers: {
    login(state, action) {
      action.payload && localStorage.setItem("userUUID", action.payload);
      state.isLogged = true;
    },
    logout(state, action) {
      localStorage.removeItem("userUUID");
      state.isLogged = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
