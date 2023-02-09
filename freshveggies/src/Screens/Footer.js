import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const dairyHandler = () => {
    navigate("/dairy");
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const poultryHandler = (e) => {
    navigate("/poultry", { state: { productType: e.target.id } });
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };
  const homeHandler = () => {
    navigate('/home');
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const LoginHandler = (tab2) => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const RegHandler = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, []);
  return (
    <div>
      <div></div>
      <div className="footer-div" style={{ width: "100%" }}>
        <div className="row">
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
            <div className="text-login2" onClick={poultryHandler}>
              Poultry
            </div>
            <div className="text-login2">Sea Food</div>
            <div className="text-login2">Vegetables</div>
            <div className="text-login2">Fresh Fruits</div>
            <div className="text-login2">Flowers</div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 app-logo-div2">
            <div className="text-login3">Quick Links</div>
            <div className="text-login2" onClick={homeHandler}>
              Home
            </div>
            <div className="text-login2">About Us</div>
            <div className="text-login2">FAQs</div>
            <div className="text-login2">Sell with Us</div>
            <div className="text-login2">Privacy Policy</div>
            <div className="text-login2">Terms & Conditions</div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 app-logo-div3">
            <div className="text-login" onClick={LoginHandler}>
              Login to your account
            </div>
            <div className="text-login" onClick={RegHandler}>
              Register with Us
            </div>
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
