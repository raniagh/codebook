import { Route, Routes } from "react-router-dom";
import { HomePage, ProductDetail, ProductsList } from "../pages";

export const Allroutes = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};
