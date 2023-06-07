import React from "react";
import { CartList } from "./components/CartList";
import { CartEmpty } from "./components/CartEmpty";

export const CartPage = () => {
  const cartlistLength = 2;
  return <main>{cartlistLength ? <CartList /> : <CartEmpty />}</main>;
};
