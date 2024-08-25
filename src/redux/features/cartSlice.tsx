import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TProduct = {
  discount?: number;
  _id: string;
  name: string;
  category: string;
  quantity: number;
  rating: number;
  brand: string;
  description: string;
  price: number;
  image: string;
  inStock: boolean;
};

type TInitialState = {
  products: TProduct[];
};

const initialState: TInitialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      //   state.products.push({ ...action.payload });
      const existingItem = state.products.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        if (existingItem?.quantity < action.payload.quantity) {
          existingItem.quantity += 1;
        }
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action: PayloadAction<TProduct>) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item && item.quantity < action.payload.quantity) {
        item.quantity += 1;
      }
    },
    decrement: (state, action: PayloadAction<TProduct>) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeProduct: (state, action: PayloadAction<TProduct>) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload?._id
      );
    },
    removeCartProducts: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  increment,
  decrement,
  removeProduct,
  removeCartProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
