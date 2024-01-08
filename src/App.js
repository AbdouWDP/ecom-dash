import "./App.css";
import Home from "./comp/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./comp/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Shop from "./comp/Shop";
import AddProductFrom from "./comp/AddProductFrom";
import EditProduct from "./comp/EditProduct";
import Product from "./comp/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product" element={<Outlet />}>
          <Route path="" element={<Product />} />
          <Route path="add" element={<AddProductFrom />} />
          <Route path="edit/:productId" element={<EditProduct />} />
        </Route>
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
