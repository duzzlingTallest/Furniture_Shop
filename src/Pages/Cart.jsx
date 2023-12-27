import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Cart() {
  return (
    <div>
      <section className="section-pagetop bg text-6xl mb-[20px]">
        <div className="container">
          <h2 className="title-page">Shopping cart</h2>
        </div>
      </section>

      <section className="section-content padding-y ">
        <div className="container">
          <div className="row">
            <main className="col-md-9 box-border border-2 p-5 rounded-lg mb-10">
              <div className="card">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase ">
                      <th scope="col" className="text-3xl">
                        Product
                      </th>
                      <th scope="col" className="text-3xl " width="120">
                        Quantity
                      </th>
                      <th scope="col" className="text-3xl " width="120">
                        Price
                      </th>
                      <th scope="col" className="text-right" width="200">
                        {' '}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <figure className="flex items-center">
                          <div className="aside ">
                            <img
                              src="https://www.ikea.com/in/en/images/products/friheten-corner-sofa-bed-with-storage-hyllie-beige__0690253_pe723174_s5.jpg?f=xl"
                              className="w-[100px] h-[100px]"
                            />
                          </div>
                          <figcaption className="info">
                            <a href="#" className="title text-dark  ml-[40px]">
                              Some name of item goes here nice
                            </a>
                            <p className="text-muted small ml-[40px]">
                              Size: XL, Color: blue, <br /> Brand: Gucci
                            </p>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </td>
                      <td>
                        <div className="price-wrap">
                          <var className="price">$1156.00</var>
                          <small className="text-muted"> $315.20 each </small>
                        </div>
                      </td>
                      <td className="text-right">
                        <a
                          data-original-title="Save to Wishlist"
                          title=""
                          href=""
                          className="btn btn-light mr-2 "
                          data-toggle="tooltip"
                        >
                          <FontAwesomeIcon icon={faHeart} size='2x'/>
                        </a>
                        <a href="" className="btn btn-light">
                          {' '}
                          Remove
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr className="mb-6" />
                <div className="card-body border-top flex space-x-[839px]">
                  <button className=" transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... text-white p-4 rounded-lg font-bold">
                    Continue shopping
                  </button>
                  <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... text-white p-4 rounded-lg font-bold">
                    Make Purchase
                  </button>
                </div>
              </div>

              <div className="alert alert-success mt-3">
                <p className="icontext">
                <FontAwesomeIcon icon={faTruck} /> Free
                  Delivery within 1-2 weeks
                </p>
              </div>
            </main>
            <aside className="col-md-3">
              <div className="card mb-3">
                <div className="card-body">
                  <form>
                    <div className="form-group text-3xl box-border border-2 p-5 rounded-lg">
                      <label>Have coupon?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name=""
                          placeholder="Coupon code"
                        />
                        <span className="input-group-append">
                          <button className="btn btn-primary text-3xl mt-[15px]">
                            Apply
                          </button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="box-border border-2 p-5 rounded-lg">
                <div className="mb-[10px]">
                  <a className="mr-[30px]">Total Price :</a>
                  <a className="ml-[30px]"> USD 2568</a>
                </div>
                <div className="mb-[10px]">
                  <a className="mr-[30px]">Discount :</a>
                  <a className="ml-[30px]"> USD 658</a>
                </div>
                <hr />
                <div className="mb-[10px] mt-[10px]">
                  <a className="mr-[30px]">Total :</a>
                  <a className="ml-[30px] text-5xl text-black text-bold font-bold">
                    {' '}
                    $1,910
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
