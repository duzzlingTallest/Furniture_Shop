import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Login from "../../Pages/Auth/Login/Login";

export default function Navbar() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <nav className="fh5co-nav p-10 h-[3px]">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-2">
              <div id="fh5co-logo">
                <NavLink to={"/"} className="text-5xl">
                  Shop.
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 col-xs-6 text-center menu-1 text-5xl">
              <ul>
                <li className="has-dropdown">
                  <NavLink to={"/shop"}>Shop</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li className="has-dropdown">
                  <NavLink to={"/services"}>Services</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-xs-4 text-right hidden-xs menu-2">
              <ul className="d-flex align-items-center">
                <div className="">
                  <div className="">
                    <Link to="/cart" className="">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </Link>
                    <Link to="/" className="">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </Link>
                    <li className="">
                      <Link onClick={toggle} to="/login">
                        Login
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
