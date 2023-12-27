import { faClock, faEye } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Counting() {
  return (
    <>
      <div
        id="fh5co-counter"
        className="fh5co-bg fh5co-counter"
        style={{ backgroundImage: 'url(../../images/img_bg_5.jpg)' }}
      >
        <div className="container">
          <div className="row">
            <div className="display-t">
              <div className="display-tc">
                <div className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="mt-[20px]"
                        size="2x"
                      />
                    </span>

                    <span
                      className="counter js-counter"
                      data-from="0"
                      data-to="22070"
                      data-speed="5000"
                      data-refresh-interval="50"
                    >
                      22070
                    </span>
                    <span className="counter-label">Creativity Fuel</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="mt-[20px]"
                        size="2x"
                      />
                    </span>

                    <span
                      className="counter js-counter"
                      data-from="0"
                      data-to="450"
                      data-speed="5000"
                      data-refresh-interval="50"
                    >
                      450
                    </span>
                    <span className="counter-label">Happy Clients</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                      <FontAwesomeIcon
                        icon={faShop}
                        className="mt-[20px]"
                        size="2x"
                      />
                    </span>
                    <span
                      className="counter js-counter"
                      data-from="0"
                      data-to="700"
                      data-speed="5000"
                      data-refresh-interval="50"
                    >
                      700
                    </span>
                    <span className="counter-label">All Products</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="mt-[20px]"
                      size="2x"
                    />
                    </span>
                   
                    <span
                      className="counter js-counter"
                      data-from="0"
                      data-to="5605"
                      data-speed="5000"
                      data-refresh-interval="50"
                    >
                      5605
                    </span>
                    <span className="counter-label">Hours Spent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
