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

export default function router() {
  return (
    <>
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

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
