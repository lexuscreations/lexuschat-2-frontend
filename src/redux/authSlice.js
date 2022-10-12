const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: false,
  },
  reducers: {
    login(state, action) {
      state.isLogged = true;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
