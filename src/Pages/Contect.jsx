import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Contect() {
  return (
    <>
      <div id="fh5co-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-md-push-1 animate-box">
              <div className="fh5co-contact-info">
                <h3 className="text-4xl mb-[30px]">Contact Information</h3>
                <ul>
                  <li>
                    198 West 21th Street, <br></br> Suite 721 New York NY 10016
                  </li>
                  <li>
                    <a href="tel://1234567920">+ 1235 2355 98</a>
                  </li>
                  <li>
                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </li>
                  <li>
                    <a href="http://gettemplates.co">gettemplates.co</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 animate-box">
              <h3 className="text-4xl mb-[30px]">Get In Touch</h3>
              <form action="#">
                <div className="row form-group">
                  <div className="col-md-6">
                    {/* <!-- <label for="fname">First Name</label> --> */}
                    <input
                      type="text"
                      id="fname"
                      className="form-control"
                      placeholder="Your firstname"
                    />
                  </div>
                  <div className="col-md-6">
                    {/* <!-- <label for="lname">Last Name</label> --> */}
                    <input
                      type="text"
                      id="lname"
                      className="form-control"
                      placeholder="Your lastname"
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    {/* <!-- <label for="email">Email</label> --> */}
                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    {/* <!-- <label for="subject">Subject</label> --> */}
                    <input
                      type="text"
                      id="subject"
                      className="form-control"
                      placeholder="Your subject of this message"
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    {/* <!-- <label for="message">Message</label> --> */}
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      className="form-control"
                      placeholder="Say something about us"
                    ></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary bg-[#D8CB97]"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
