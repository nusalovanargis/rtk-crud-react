import { createSlice } from "@reduxjs/toolkit";

import { UsersData } from "../FakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value = [...state.value, action.payload];
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;
