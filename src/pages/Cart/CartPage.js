import React from "react";
import { CartList } from "./components/CartList";
import { CartEmpty } from "./components/CartEmpty";
import { useCart } from "../../context/CartContext";

export const CartPage = () => {
  const { cartList } = useCart();

  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};
