import React from "react";
import { NavLink } from "react-router-dom";

export default function Registration() {
  return (
    <>
      <div className="cont mr-[500px]">
        <div className="form sign-in">
          <h2 className="text-6xl font-bold">Create your Account</h2>
          <div className="text-black">
            <label>
              <span>Name</span>
              <input type="name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
            <label>
              <span>Confirm Password</span>
              <input type="confirmPassword" />
            </label>

            <div className="forgot-pass text-3xl mt-5 d-flex justify-content-center">
              Exisiting User ?<NavLink to={"/login"}>Log in</NavLink>
            </div>
          </div>
          <button type="button" className="submit bg-[#D4AF7A] text-white">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
