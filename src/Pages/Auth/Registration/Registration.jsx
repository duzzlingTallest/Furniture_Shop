import axios from "axios";
import { MDBRadio } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Select from "react-select";
import { BE_URL } from "../../../config";
import { toast } from "react-toastify";

const options = [
  { value: "Gujarat", label: "Gujarat" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Rajsthan", label: "Rajsthan" },
];
const options2 = [
  { value: "Surat", label: "Surat" },
  { value: "Mumbai", label: "Mumbai" },
  { value: "Jaipur", label: "Jaipur" },
];

export default function Registration() {
  const [selectedOption, setSelectedOption] = useState(null);

  const [data, setData] = useState({
    name: "",
    email: "",
    pass: "",
    number: "",
    gender: "",
  });

  const [address, setAddress] = useState({
    add: "",
    city: "",
    state: "",
    pincode: "",
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${BE_URL}/user/signUp`, { ...data, address: [address] })
      .then((res) => {
        console.log(res.data);
        console.log("🚀 ~ res.data:", res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log("🚀 ~ file: Registration.jsx:48 ~ .then ~ err:", err);
        toast.error(err.message);
      });

    console.log({ ...data, address: [address] });
  };

  return (
    <>
      <div className="cont mr-[500px] mt-[60px]">
        <div className=" mt-9">
          <h2 className="text-6xl font-bold mt-[30px] text-[#D4AF7A]">
            Create your Account
          </h2>
          <div className="text-black">
            <label>
              <span>Name</span>
              <input
                type="name"
                onChange={(e) => setData({ ...data, name: e?.target?.value })}
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                onChange={(e) => setData({ ...data, email: e?.target?.value })}
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                onChange={(e) =>
                  setData({ ...data, password: e?.target?.value })
                }
              />
            </label>
            <label>
              <span>Phone</span>
              <input
                type="phone"
                onChange={(e) => setData({ ...data, number: e?.target?.value })}
              />
            </label>
            <div className="flex flex-row mt-6 justify-center space-x-7 text-[#CFCFCF]">
              <span>Gender :</span>
              <div className="form-check">
                <input
                  className="form-check-input w-[50px]"
                  type="radio"
                  name="gender"
                  id="exampleRadios1"
                  value="option1"
                  onChange={(e) => setData({ ...data, gender: "female" })}
                />
                <span
                  className="form-check-label ml-[10px]"
                  htmlFor="exampleRadios1"
                >
                  Male
                </span>
              </div>
              <div className="form-check ">
                <input
                  className="form-check-input w-[60px]"
                  type="radio"
                  name="gender"
                  id="exampleRadios2"
                  value="option2"
                  onChange={(e) => setData({ ...data, gender: "male" })}
                />
                <span
                  className="form-check-label ml-[7px]"
                  htmlFor="exampleRadios2"
                >
                  Female
                </span>
              </div>
            </div>
            <label>
              <span>Street Name</span>
              <input
                type="street name"
                onChange={(e) =>
                  setAddress({ ...address, add: e?.target?.value })
                }
              />
            </label>

            <div className="flex justify-center space-x-4 mt-6">
              <Select
                className="w-[150px]"
                defaultValue={selectedOption}
                options={options}
                onChange={(e) => setAddress({ ...address, state: e?.value })}
              />
              <Select
                className="w-[150px]"
                defaultValue={selectedOption}
                options={options2}
                onChange={(e) => setAddress({ ...address, city: e?.value })}
              />
            </div>

            <label className="mb-9">
              <span>Zip Code </span>
              <input
                type="street name"
                onChange={(e) =>
                  setAddress({ ...address, pincode: e?.target?.value })
                }
              />
            </label>

            <div className="forgot-pass text-3xl mt-5 d-flex justify-content-center">
              Exisiting User ?
              <br />
              <NavLink to={"/login"}> Log in</NavLink>
            </div>
          </div>
          <div className="mb-[40px]">
            <button
              type="button"
              className="submit bg-[#D4AF7A] text-white"
              onClick={(e) => onSubmit(e)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// name:  "urvish",
// email: "uv@gmail.com",
// number: "7575083084",
// password: "123456",
// age: 23,
// address: [
//   {
//     add:"A-308 abc",
//     city: "surat",
//     state: "gujrat",
//     pinCode: "395007",
//   },
// ],
