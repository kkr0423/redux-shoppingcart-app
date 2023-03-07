import { configureStore } from "@reduxjs/toolkit";
import cartRducer from "./features/cart/CartSlice";
import modalRducer from "./features/modal/ModalSlice";

export const store = configureStore({
  reducer: {
    cart: cartRducer,
    modal: modalRducer,
  },
});
