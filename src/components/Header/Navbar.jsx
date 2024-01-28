import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const userData = useSelector((state) => state?.auth?.user);

  return (
    <>
      <nav className="fh5co-nav p-10 h-[30px]">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-2">
              <div id="fh5co-logo">
                <NavLink to={"/"} className="text-5xl">
                  Shop.
                </NavLink>
              </div>
            </div>
            <div>
              {userData?.userType === "admin" ? (
                <div>
                  <div className="col-md-6 col-xs-6 text-center menu-1 text-5xl mb-5">
                    <ul>
                      <li className="has-dropdown">
                        <NavLink
                          to={"/shop"}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/products"}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          Products
                        </NavLink>
                      </li>
                      <li className="has-dropdown">
                        <NavLink
                          to={"/services"}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          Orders
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/contact"}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          Customers
                        </NavLink>
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
                          {JSON.stringify(userData) !== "{}" ? (
                            <li>
                              <NavLink to="/profile">Profile</NavLink>
                            </li>
                          ) : (
                            <li>
                              <NavLink to="/login">Login</NavLink>
                            </li>
                          )}
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="col-md-6 col-xs-6 text-center menu-1 text-5xl mb-5">
                    <ul>
                      <li className="has-dropdown">
                        <NavLink
                          to={"/shop"}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          Shop
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/about"}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          About
                        </NavLink>
                      </li>
                      <li className="has-dropdown">
                        <NavLink
                          to={"/services"}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/contact"}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          Contact
                        </NavLink>
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
                          {JSON.stringify(userData) !== "{}" ? (
                            <li>
                              <NavLink to="/profile">Profile</NavLink>
                            </li>
                          ) : (
                            <li>
                              <NavLink to="/login">Login</NavLink>
                            </li>
                          )}
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
