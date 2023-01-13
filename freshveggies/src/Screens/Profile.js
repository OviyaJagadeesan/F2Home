import React, { useState, useRef } from "react";
import "../Styles/Profile.css";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { SlEnvolope } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function Profile() {
  const navigate = useNavigate();

  const [logEmail, setLogEmail] = useState("");
  const [errorLogEmail, setErrorLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [errorLogPassword, setErrorLogPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [errorRegEmail, setErrorRegEmail] = useState("");
  const [basicActive, setBasicActive] = useState("tab1");


  const LoginButton = () => {
    setErrorLogEmail("");
    setErrorLogPassword("");

    if (!logEmail) {
      setErrorLogEmail("Enter email address");
    } else if (
      !/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(logEmail)
    ) {
      setErrorLogEmail("Enter the proper email id");
    } else if (!logPassword) {
      setErrorLogPassword("Enter password");
    } else {
      navigate("/home");
    }
  };

  const RegisterButton = () => {
    setErrorLogEmail("");
    setErrorLogPassword("");

    if (!regEmail) {
      setErrorRegEmail("Enter email address");
    } else if (
      !/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(regEmail)
    ) {
      setErrorRegEmail("Enter the proper email id");
    } else {
      navigate("/home");
    }
  };

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <div>
      <Header/>
      <div row style={{ overflow: "hidden",marginLeft:"auto", marginRight:"auto", width:"100vw"}}>
        <div className="col profile-div" style={{width:"800px",marginLeft:"auto",marginRight:"auto"}}>
          <div className="app-download"></div>
          <div className="col login-register">
            <MDBTabs className="mb-3">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab1")}
                  active={basicActive === "tab1"}
                >
                  LOGIN
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab2")}
                  active={basicActive === "tab2"}
                >
                  REGISTER
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
            <MDBTabsContent>
              <MDBTabsPane show={basicActive === "tab1"}>
                <div className="login">
                  <div className="login-text">
                    Please enter your registered email and password to login to
                    your account.
                  </div>
                  <div className="email-div">
                    <SlEnvolope />
                    <input
                      type="email"
                      className="email-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      onChange={(e) => {
                        setLogEmail(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="password-div">
                    <SlEnvolope />
                    <input
                      type="password"
                      className="password-input"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={(e) => {
                        setLogPassword(e.target.value);
                      }}
                    ></input>
                  </div>
                  <button className="login-btn" onClick={LoginButton}>
                    LOGIN
                  </button>
                  <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                  <div className="checkbox-div">
                    <input type="checkbox" className="checkbox-img" />
                    <label className="signed-in">Keep me signed in</label>
                  </div>
                  <div className="forgot-password">Forgot Password?</div>
                  </div>
                  <div className="error-view">
                    {errorLogEmail !== "" ? <p>{errorLogEmail}</p> : null}
                    {errorLogPassword !== "" ? <p>{errorLogPassword}</p> : null}
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive === "tab2"}>
                <div className="register-text">
                  Create your Farm2Home account using your email id.
                </div>
                <div className="email-div">
                  <SlEnvolope />
                  <input
                    type="email"
                    className="email-input"
                    id="exampleInputEmail1"
                    aria-describedby="emailInputPassword1"
                    placeholder="Your email ID"
                  ></input>
                </div>
                <p className="send-code">We will send a code to validate.</p>
                <div className="proceed-btn">PROCEED</div>
              </MDBTabsPane>
            </MDBTabsContent>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Profile;
