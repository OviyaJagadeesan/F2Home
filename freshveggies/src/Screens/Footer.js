import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const homeHandler = () => {
    navigate("/home");
  };

  const dairyHandler = () => {
    navigate("/dairy");
  };

  const poultryHandler = () => {
    navigate("/poultry");
  };

  const seaFoodHandler = () => {
    navigate("/seafood");
  };

  return (
    <div>
      <div className="footer-div">
        <div className="row" style={{width:"100%"}}>
          <div className="col-lg-4 col-md-6 col-sm-12 app-logo-div">
            <div className="app-logo"></div>
            <div className="text-login3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 app-logo-div1">
            <div className="text-login3">Shop By Category</div>
            <div className="text-login2">Dairy</div>
            <div className="text-login2" onClick={poultryHandler}>Poultry</div>
            <div className="text-login2">Sea Food</div>
            <div className="text-login2">Vegetables</div>
            <div className="text-login2">Fresh Fruits</div>
            <div className="text-login2">Flowers</div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 app-logo-div2">
            <div className="text-login3">Quick Links</div>
            <div className="text-login2" onClick={homeHandler}>Home</div>
            <div className="text-login2">About Us</div>
            <div className="text-login2">FAQs</div>
            <div className="text-login2">Sell with Us</div>
            <div className="text-login2">Privacy Policy</div>
            <div className="text-login2">Terms & Conditions</div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 app-logo-div3">
            <div className="text-login">Login to your account</div>
            <div className="text-login">Register with Us</div>
            <div className="app-download-img">
              <div className="apple-store"></div>
              <div className="play-store"></div>
            </div>
            <div className="text-login">Follow Us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
