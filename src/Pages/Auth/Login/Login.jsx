import React, { useEffect, useState } from "react";
import "./main.css";
import { NavLink } from "react-router-dom";

export default function Login() {
  let [data, setData] = useState({});

  return (
    <>
      <div className="cont mr-[500px]">
        <div className="form sign-in">
          <h2 className="text-6xl font-bold">Welcome</h2>
          <div className="text-black">
            <label>
              <span>Email</span>
              <input type="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
          </div>
          <p className="forgot-pass">Forgot password?</p>
          <div className="forgot-pass mt-5 d-flex justify-content-center">
            New To SHOP.
            <NavLink to={"/registration"}>  Create an Account</NavLink>
          </div>

          <button type="button" className="submit bg-[#D4AF7A] text-white">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}
