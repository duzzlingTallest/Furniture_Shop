import React from 'react';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faWallet } from '@fortawesome/free-solid-svg-icons';

export default function Features() {
  return (
    <>
      <div id="fh5co-services" className="fh5co-bg-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 text-center">
              <div
                className="feature-center animate-box"
                data-animate-effect="fadeIn"
              >
                <span className="icon">
                  <div className="mt-[30px]">
                    <FontAwesomeIcon className="" icon={faCreditCard} size='2x'/>
                  </div>
                </span>
                <h3>Credit Card</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove
                </p>
                <p>
                  <a href="#" className="btn btn-primary btn-outline">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 text-center">
              <div
                className="feature-center animate-box"
                data-animate-effect="fadeIn"
              >
                <span className="icon">
                  <div className="mt-[30px]">
                    <FontAwesomeIcon icon={faWallet} size='2x'/>
                  </div>
                </span>
                <h3>Save Money</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove
                </p>
                <p>
                  <a href="#" className="btn btn-primary btn-outline">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 text-center">
              <div
                className="feature-center animate-box"
                data-animate-effect="fadeIn"
              >
                <span className="icon">
                  <div className="mt-[30px]">
                    <FontAwesomeIcon icon={faTruckFast} size='2x'/>
                  </div>
                </span>
                <h3>Free Delivery</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove
                </p>
                <p>
                  <a href="#" className="btn btn-primary btn-outline">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
