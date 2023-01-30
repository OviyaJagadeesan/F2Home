
import React, { useState } from "react";
import { useTransition } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/EditProfile.css";

const ProfileChange = () => {
  const navigate = useNavigate();

  const [uname, setUName] = useState("");
  const [ErrorUName, setErrorUName] = useState("");
  const [upno, setUPNo] = useState("");
  const [ErrorUPNo, setErrorUPNo] = useState("");
  const [uemail, setUEmail] = useState("");
  const [ErrorUEmail, setErrorUEmail] = useState("");

  const [udefaultAddress,setUDefaultAddress]=useState("");
  const [ErrorUDefaultAddress,setErrorUDefaultAddress]=useState("");

  const UpdateButton = () => {
    setErrorUName("");
    setErrorUPNo("");
    setErrorUEmail("");

    if (!uname) {
      setErrorUName("Please Enter your updated name");
    } else if (!upno) {
      setErrorUPNo("Please Enter your updated phone number");
    } else if (!uemail) {
      setErrorUEmail("Enter your updated email address");
    } else if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(uemail)) {
      setErrorUEmail("Enter your updated the proper email id");
    } else {
      alert("Personal Details Updated Sucessfully!!!");
    }
  };

  const AddressUpdateButton=()=>{
    setErrorUDefaultAddress("");
    if(!udefaultAddress){
      setErrorUDefaultAddress("Please enter your updated address")
    }else{
      alert("Address Updated Successfully!!!")
    }
  }
  return (
    <div className="right-div-profile">
      <p className="name">Hello XYZ</p>
      <div className="card personal-details">
        <p className="text">Personal Details</p>
        <input
          type="text"
          className="input-personal-details"
          placeholder="Name"
          onChange={(e) => {
            setUName(e.target.value);
          }}
        ></input>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            type="tel"
            className="input-personal-details"
            placeholder="Mobile Number"
            onChange={(e) => {
              setUPNo(e.target.value);
            }}
          ></input>
          <input
            type="email"
            className="input-personal-details"
            id="exampleInputEmail1"
            placeholder="Email address"
            onChange={(e) => {
              setUEmail(e.target.value);
            }}
          ></input>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
        <button className="buttons" onClick={UpdateButton}>Update</button>
        <div className="error-view">
          {ErrorUName !== "" ? <p>{ErrorUName}</p> : null}
          {ErrorUPNo !== "" ? <p>{ErrorUPNo}</p> : null}
          {ErrorUEmail !== "" ? <p>{ErrorUEmail}</p> : null}
        </div>
        </div>
      </div>
      <div className="card personal-details">
        <p className="text">Default Delivery Address</p>
        <input
          type="text"
          className="input-personal-details"
          placeholder="Enter Address"
          onChange={(e) => {
            setUDefaultAddress(e.target.value);
          }}
        ></input>
        <div style={{display:"flex",flexDirection:"row"}}>
        <button className="buttons" onClick={AddressUpdateButton}>
          Change Default Address
        </button>
        <div className="error-view">
          {ErrorUDefaultAddress !== "" ? <p>{ErrorUDefaultAddress}</p> : null}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileChange;
