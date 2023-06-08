import { Route, Routes } from "react-router-dom";
import {
  CartPage,
  DashbaordPage,
  HomePage,
  Login,
  OrderPage,
  ProductDetail,
  ProductsList,
  Register,
} from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const Allroutes = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductDetail />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="order-summary"
          element={
            <ProtectedRoute>
              <OrderPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashbaordPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};
