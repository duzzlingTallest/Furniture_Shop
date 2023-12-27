import {
  faCalendar,
  faCreditCard,
  faHardDrive,
} from "@fortawesome/free-regular-svg-icons";
import {
  faClapperboard,
  faTruckFast,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Services() {
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
                  <i class="fa-regular fa-credit-card"></i>
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
                  <i class="fa-solid fa-wallet"></i>
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
                  <i class="fa-solid fa-truck-fast"></i>
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
            <div className="col-md-4 col-sm-4 text-center">
              <div
                className="feature-center animate-box"
                data-animate-effect="fadeIn"
              >
                <span className="icon">
                  <i class="fa-regular fa-calendar"></i>
                </span>
                <h3>Lifetime Warranty</h3>
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
                  <i class="fa-solid fa-clapperboard"></i>
                </span>
                <h3>Branded Model</h3>
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
                  <i class="fa-solid fa-hard-drive"></i>
                </span>
                <h3>Affordable</h3>
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
