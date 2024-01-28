import React, { useState } from "react";
import "./main.css";
import { NavLink, useNavigate } from "react-router-dom";
import { BE_URL } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/features/authSlice";

export default function Login() {
  let [data, setData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();

    // console.log("🚀 ~ file: Login.jsx:25 ~ onSubmit ~ data:", data)
    axios
      .post(`${BE_URL}/user/signin`, data)
      .then((res) => {
        // console.log(res.data);
        dispatch(login(res.data));
        navigate("/");
        setData({ email: "", password: "" });
      })
      .catch((err) => {
        console.log("🚀 ~ file: Login.jsx:23 ~ axios.post ~ err:", err);
        toast(err.message);
      });

    // console.log("==> ", data);
  }

  return (
    <>
      <div className="cont mr-[550px] mt-[100px]">
        <div className="form sign-in">
          <h2 className="text-6xl font-bold">Welcome</h2>
          <div className="text-black">
            <label>
              <span>Email</span>
              <input
                type="email"
                onChange={(e) => setData({ ...data, email: e?.target?.value })}
                value={data.email}
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                onChange={(e) =>
                  setData({ ...data, password: e?.target?.value })
                }
                value={data.password}
              />
            </label>
          </div>
          <p className="forgot-pass">Forgot password?</p>
          <div className="forgot-pass mt-5 d-flex justify-content-center">
            New To SHOP.
            <NavLink to={"/registration"}> Create an Account</NavLink>
          </div>

          <button
            onClick={(e) => onSubmit(e)}
            type="button"
            className="submit bg-[#D4AF7A] text-white mb-9"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}
