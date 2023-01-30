import React, { useState, useRef, useEffect } from "react";
import "../Styles/Profile.css";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { SlEnvolope } from "react-icons/sl";
import { AiOutlineLock } from "react-icons/ai";
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
       window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
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
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, []);

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <div>
      <Header />
      <div row style={{ marginLeft: "10px", marginRight: "10px" }}>
        <div
          className="col profile-div"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 sizes"
                      style={{
                        stroke: "#80B435",
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    {/* <SlEnvolope className="envolope"/> */}
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
                    {/* <AiOutlineLock className="envolope"/> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 sizes"
                      style={{
                        stroke: "#80B435",
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
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
                  <div
                    className="divv"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width:"100%"
                    }}
                  >
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
                  {/* <SlEnvolope className="envolope"/> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 sizes"
                    style={{ stroke: "#80B435", height: "20px", width: "20px" }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
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
      <Footer />
    </div>
  );
}

export default Profile;
