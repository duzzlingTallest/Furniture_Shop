import axios from "axios";
import React, { useState } from "react";
import { BE_URL } from "../../../config";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../../Redux/features/productSlice";
import { toast } from "react-toastify";

export default function Form() {
  const intialFormData = {
    thumbnail: "",
    title: "",
    brand: "",
    price: "",
    discountPercentage: "",
    availableStock: "",
    color: "",
    description: "",
  };

  const [formData, setFormData] = useState(intialFormData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    let normalToken = JSON.parse(token);

    axios({
      method: "post",
      url: `${BE_URL}/product/create`,
      data: formData,
      headers: {
        authorization: `Bearer ${normalToken}`,
        // authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => {
        console.log("🚀 ~ .then ~ res:", res);
        dispatch(addProduct(res?.data?.data));
      })
      .catch((err) => {
        toast.error(err.message);
      });

    setFormData(intialFormData);
    navigate("/products");
    console.log("Form JSX", { ...formData, setFormData });
  };
  console.log("🚀 ~ formData._id:", formData?._id);

  const updateHandler = () => {
    axios({
      method: "put",
      url: `${BE_URL}/product/update/${formData?._id}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => {
        console.log("🚀 ~ updateHandler ~ res:", res);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <>
      <div className=" box-border w-[800px] p-4 border-4 my-[100px] ml-[450px]">
        <h2 className="text-6xl font-bold mb-2text-xl font-bold mb-2">
          Add Product
        </h2>
        <hr className="mb-9" />

        <form className="w-[500px] ml-[140px]">
          <input
            onChange={(e) =>
              setFormData({ ...formData, thumbnail: e?.target?.value })
            }
            className="mt-9 p-3"
            type="text"
            placeholder="Products IMG"
          />

          <input
            onChange={(e) =>
              setFormData({ ...formData, title: e?.target?.value })
            }
            className="mt-9 p-3"
            type="text"
            placeholder="Products Name"
          />

          <input
            onChange={(e) =>
              setFormData({ ...formData, brand: e?.target?.value })
            }
            className="mt-9 p-3"
            type="text"
            placeholder="Brand Name"
          />

          <input
            onChange={(e) =>
              setFormData({ ...formData, price: e?.target?.value })
            }
            className="mt-9 p-3"
            type="text"
            placeholder="Price"
          />

          <input
            onChange={(e) =>
              setFormData({ ...formData, discountPercentage: e?.target?.value })
            }
            className="mt-9 p-3"
            type="text"
            placeholder="Discount Percentage"
          />

          <input
            onChange={(e) =>
              setFormData({ ...formData, availableStock: e?.target?.value })
            }
            className="mt-9 p-3"
            type="number"
            placeholder="QTY"
          />

          <input
            onChange={(e) =>
              setFormData({ ...formData, color: e?.target?.value })
            }
            className="mt-9 p-3"
            type="text"
            placeholder="Color"
          />

          <input
            onChange={(e) =>
              setFormData({ ...formData, description: e?.target?.value })
            }
            className="mt-9 p-3"
            type="text"
            placeholder="Description"
          />

          <button
            onClick={(e) => onSubmit(e)}
            className="submit bg-[#D4AF7A] text-white mb-9"
          >
            Submit
          </button>

          <button
            onClick={(e) => updateHandler(e)}
            className="submit bg-[#D4AF7A] text-white mb-9"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
}
