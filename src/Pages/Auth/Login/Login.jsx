import React, { useEffect } from "react";
import "./main.css";
import { Modal, ModalBody } from "reactstrap";

export default function Login(props) {
  useEffect(() => {
    const handleButtonClick = () => {
      document.querySelector(".cont").classList.toggle("s--signup");
    };

    // Check if the element with the class "img__btn" exists before adding the event listener
    const imgBtn = document.querySelector(".img__btn");
    if (imgBtn) {
      imgBtn.addEventListener("click", handleButtonClick);

      // Cleanup the event listener when the component unmounts
      return () => {
        imgBtn.removeEventListener("click", handleButtonClick);
      };
    }

    // Return an empty cleanup function if the element is not found
    return () => {};
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

  return (
    <Modal isOpen={props.modal} toggle={props.toggle} {...props}>
      <ModalBody>
        <div className="cont">
          <div className="form sign-in">
            <h2 className="text-6xl font-bold">Welcome</h2>
            <label>
              <span>Email</span>
              <input type="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
            <p className="forgot-pass">Forgot password?</p>
            <button type="button" className="submit bg-[#D4AF7A] text-white">
              Sign In
            </button>
          </div>
          <div className="sub-cont">
            <div className="img">
              <div className="img__text m--up">
                <h3 className="font-bold text-white">
                  Don't have an account? Please Sign up!
                </h3>
              </div>
              <div className="img__text m--in text-white">
                <h3 className="font-bold text-white">
                  If you already has an account, just sign in.
                </h3>
              </div>
              <div className="img__btn">
                <span className="m--up">Sign Up</span>
                <span className="m--in">Sign In</span>
              </div>
            </div>
            <div className="form sign-up">
              <h2 className="text-6xl font-bold">Create your Account</h2>
              <label>
                <span>Name</span>
                <input type="text" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" />
              </label>
              <label>
                <span>Password</span>
                <input type="password" />
              </label>
              <button type="button" className="submit bg-[#D4AF7A] text-white">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}
