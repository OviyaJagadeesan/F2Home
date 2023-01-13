import React from "react";
import "../Styles/EditProfile.css"

const ChangePassword = () => {
  return (
    <div className="right-div">
      <p className="name">Change Password</p>
      <div className="card personal-details">
        <p className="text">Personal Details</p>
        <input
          type="password"
          className="input-personal-details"
          placeholder="Old Password"
        ></input>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            type="password"
            className="input-personal-details"
            placeholder="New Password"
          ></input>
          <input
            type="email"
            className="input-personal-details"
            id="exampleInputEmail1"
            placeholder="Re-Enter Password"
          ></input>
        </div>
        <button className="buttons">Update</button>
      </div>
    </div>
  );
};

export default ChangePassword;
