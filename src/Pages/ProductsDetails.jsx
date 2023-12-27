import React from 'react';

import './detail.css';

export default function ProductsDetails() {
  return (
    <>
      <main className="flex place-content-center space-x-[100px] container mb-[50px]">
       
        <img
          src="https://www.ikea.com/in/en/images/products/ekeroe-armchair-skiftebo-yellow__0204753_pe359787_s5.jpg?f=xl"
          alt=""
          className="h-[560px]"
        />

        {/* <!-- Right Column --> */}
        <div className="right-column">
          {/* <!-- Product Description --> */}
          <div className="product-description">
            <span className='mb-4'>Headphones</span>
            <h1 className='mb-4'>Beats EP</h1>
            <p className='mb-4'>
              The preferred choice of a vast range of acclaimed DJs. Punchy,
              bass-focused sound and high isolation. Sturdy headband and on-ear
              cushions suitable for live performance
            </p>
          </div>

          {/* <!-- Product Configuration --> */}
          <div className="product-configuration">

          <div> <h1 className='text-6xl mb-4'>$148</h1></div>

            {/* <!-- Product Color --> */}
            <div className="product-color">
              <span>Color</span>

              <div className="color-choose">
                <div>
                  <input
                    data-image="red"
                    type="radio"
                    id="red"
                    name="color"
                    value="red"
                    checked
                  />
                  <label for="red">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input
                    data-image="blue"
                    type="radio"
                    id="blue"
                    name="color"
                    value="blue"
                  />
                  <label for="blue">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input
                    data-image="black"
                    type="radio"
                    id="black"
                    name="color"
                    value="black"
                  />
                  <label for="black">
                    <span></span>
                  </label>
                </div>
              </div>
            </div>

            {/* <!-- Cable Configuration --> */}
            <div className="cable-config">
              <span>Cable configuration</span>

              <div className="cable-choose flex space-x-4">
                <button>Straight</button>
                <button>Coiled</button>
                <button>Long-coiled</button>
              </div>

              <a href="#">How to configurate your headphones</a>
            </div>
          </div>

          {/* <!-- Product Pricing --> */}
          <div className="product-price">
            <a href="#" className="cart-btn">
              Add to cart
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
