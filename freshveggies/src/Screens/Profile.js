import React, { useState, useRef, useEffect } from "react";
import "../Styles/Profile.css";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { postCall } from "../API/requestCalls";
// import { postData } from "../API/axiosCalls";
function Profile() {
  const navigate = useNavigate();

  const [logEmail, setLogEmail] = useState("");
  const [errorLogEmail, setErrorLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [errorLogPassword, setErrorLogPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [errorRegEmail, setErrorRegEmail] = useState("");
  const [basicActive, setBasicActive] = useState("tab1");

  const [fullNameReg, setFullNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [pNoReg, setPNoReg] = useState("");

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
      console.log("Succes");
      loginHandler();
    }
  };

  const loginHandler = () => {
    console.log("Loginn", logEmail, logPassword);
    axios
      .post("http://localhost:4000/log", {
        emailIdReg: logEmail,
        passwordIdReg: logPassword,
      })
      .then((response) => {
        console.log("res", response);
        console.log("sucee", response.data.success);
        if (!response.data.success) {
          console.log("RES", response.data.success);
          console.log("Invalid username");
          toast.error("Invalid username or password", {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          navigate("/home");
          window.scrollTo({
            top: 0,
            behavior: "auto",
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
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
      console.log("Registered successfully...");
      toast.error("Registered successfully...", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  const regButton = async () => {
    console.log("Registerr", fullNameReg, emailReg, passwordReg, pNoReg);
    const res = await postCall({
      nameReg: fullNameReg,
      emailIdReg: emailReg,
      passwordIdReg: passwordReg,
      phonenoReg: pNoReg,
    });
    handleBasicClick("tab1");
  };

  return (
    <div>
      <Header />
      <div row style={{ marginLeft: "10px", marginRight: "10px" }}>
        <div
          className="col profile-div"
          style={{ marginLeft: "auto", marginRight: "auto" }}
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
                      width: "100%",
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
                <div className="password-div">
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
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <input
                    type="text"
                    className="password-input"
                    placeholder="Name"
                    onChange={(e) => {
                      setFullNameReg(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="email-div">
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
                    onChange={(e) => {
                      setEmailReg(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="password-div">
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
                      setPasswordReg(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="password-div">
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <input
                    type="number"
                    className="password-input"
                    placeholder="Phone Number"
                    onChange={(e) => {
                      setPNoReg(e.target.value);
                    }}
                  ></input>
                </div>
                {/* <p className="send-code">We will send a code to validate.</p> */}
                <div className="proceed-btn" onClick={regButton}>
                  PROCEED
                </div>
              </MDBTabsPane>
            </MDBTabsContent>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Profile;
