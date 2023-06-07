import { Route, Routes } from "react-router-dom";
import {
  CartPage,
  HomePage,
  Login,
  ProductDetail,
  ProductsList,
  Register,
} from "../pages";

export const Allroutes = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductDetail />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};
