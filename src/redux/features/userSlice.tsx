import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TUser = {
  name: string;
  email: string;
  phone: string;
  address: string;
  price: number;
};

type TInitialState = {
  users: TUser[];
};

const initialState: TInitialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<TUser>) => {
      state.users.push({ ...action.payload });
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
