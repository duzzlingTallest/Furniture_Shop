import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { fetchProduct } from "../../../Redux/features/productSlice";
import { Pencil, Trash } from "lucide-react";
import axios from "axios";
import { BE_URL } from "../../../config";

export default function Products() {
  const [productData, setProductData] = useState([]);
  const [data,setData] = useState({})
  const [index,setIndex] = useState()


  const dispatch = useDispatch();
  const fetchData = useSelector((state) => state.productReducer.product);
  const navigate = useNavigate()

  useEffect(() => {
    setProductData(fetchData);
  }, [fetchData]);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const deleteHandler = (e) => {
    axios({
      method: "delete",
      url: `${BE_URL}/product/delete/${e?._id}`,
      headers: {
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    }).then((res) => {
      console.log("🚀 ~ deleteHandler ~ res:", res);
      dispatch(fetchProduct());
    });
  };

const updateHandler = (e,i) => {
setData(e)
setIndex(i);
navigate("/addProducts")

} 

  return (
    <>
      <div className="my-[100px]">
        <div className="container mx-auto p-4">
          <h1 className="flex justify-center text-5xl text-[#3B82F6] font-bold mb-4 font-mono">
            Product CRUD
          </h1>
          <hr className="mb-[50px]" />

          {/* <!-- Add Product Form --> */}
          <div className="mb-4">
            <form action="#" method="post" className="flex" >
              <input
                type="text"
                name="productName"
                placeholder="Product Name"
                className="py-2 px-4 border rounded-l mr-2"
              />
              <input
                type="number"
                name="productPrice"
                placeholder="Price"
                className="py-2 px-4 border mr-2"
              />
              <NavLink to={"/addProducts"}>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-r"
                >
                  Add
                </button>
              </NavLink>
            </form>
          </div>

          {/* <!-- Product Table --> */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className>
                <th className="py-2 px-4 border-b text-center">ID</th>
                <th className="py-2 px-4 border-b text-center">Product IMG</th>
                <th className="py-2 px-4 border-b text-center">Product Name</th>
                <th className="py-2 px-4 border-b text-center">Description</th>
                <th className="py-2 px-4 border-b text-center">Brand</th>
                <th className="py-2 px-4 border-b text-center">Price</th>
                <th className="py-2 px-4 border-b text-center">
                  Discount Percentage
                </th>
                <th className="py-2 px-4 border-b text-center">QTY</th>
                <th className="py-2 px-4 border-b text-center">Color</th>
                <th className="py-2 px-4 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {productData?.map?.((ele, i) => {
                return (
                  <tr key={ele?._id}>
                    <td className="py-2 px-4 border-b text-center">{i + 1}</td>
                    <td className="py-2 px-4 border-b text-center">
                      <img src={ele?.thumbnail} alt="" />
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {ele?.title}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {ele?.description}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {ele?.brand}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      ${ele?.price}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {ele?.discountPercentage}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {ele?.availableStock}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {ele?.color}
                    </td>
                    <td className="py-2 px-4 border-b w-[100px] text-center">
                      <div className="flex flex-nowrap flex-row-reverse gap-3 mr-5">
                        <Pencil
                          color="#000000"
                          onClick={() => updateHandler(ele, i)}
                        />
                        <Trash
                          type="submit"
                          color="#f20707"
                          onClick={() => deleteHandler(ele)}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
              {/* <!-- Sample data, replace with dynamic data from your backend --> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
