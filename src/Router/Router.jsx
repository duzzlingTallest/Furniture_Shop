import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contect from "../Pages/Contect";
import ProductsDetails from "../Pages/ProductsDetails";
import Cart from "../Pages/Cart";
import Login from "../Pages/Auth/Login/Login";
import Registration from "../Pages/Auth/Registration/Registration";
import { Provider } from "react-redux";
import { store } from "../Redux/app/store";
import Profile from "../Pages/Profile/Profile";
import Products from "../Pages/Admin/Products/Products";
import Form from "../Pages/Admin/AddProducts/Form";

export default function router() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contact" element={<Contect />} />
            <Route exact path="/details" element={<ProductsDetails />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/addProducts" element={<Form />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}
