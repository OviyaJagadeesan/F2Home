import React from 'react';
import "../Styles/CustomerSupport.css"

const CustomerSupport = () => {
  return (
    <div className="right-div-csupport">
      <p className="name">Customer Support</p>
      <div className="card personal-details">
        <p className="text">How can we help you today?</p>
        <textarea
          type="password"
          className="input-personal-details2"
          placeholder="Please type your questions, comments or suggestions here."
        ></textarea>
        <div style={{ display: "flex", flexDirection: "row" }} className="div-buttons">
        <div className='cancel-button'>Cancel</div>
        <button className="buttons">Update</button>
        </div>
      </div>
    </div>
  )
}

export default CustomerSupport
