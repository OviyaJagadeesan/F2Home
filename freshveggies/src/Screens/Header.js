import React, { useState, useEffect } from "react";
import "../Styles/Header.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import Categories from "./Categories";
import EditProfile from "./EditProfile";
import ProfileChange from "./ProfileChange";
import Badge from "react-bootstrap/Badge";
import { FilterContextProvider } from "./context";

const Header = () => {
  let cartlen = useSelector((payload) => payload);
  const [show, setShow] = useState(false);
  const [category1, setCategory1] = useState(false);
  const handleClick = () => {
    console.log("click");
    setShow(!show);
  };

  const navigate = useNavigate();
  const onclick = () => {
    navigate("/editprofile");
    window.scroll(0, 0);
  };

  const goHome = () => {
    navigate("/home");
    window.scroll(0, 0);
  };

  const goCart = () => {
    navigate("/mycart");
    window.scroll(0, 0);
  };

  const CategoriesHandler = () => {
    setCategory1(!category1);
  };

  const farmsHandler = () => {
    navigate("/allfarms");
    window.scroll(0, 0);
  };

  console.log("View", category1);

  return (
    <div>
      <div className="whole-home-div">
        <div
          className="header"
          style={{ boxShadow: "0 0.1rem 1.2rem rgba(0, 0, 0, 0.15)" }}
        >
          <img
            src={require("../Images/Logo.png")}
            className="img-fluid"
            style={{ margin: "10px", cursor: "pointer" }}
            onClick={goHome}
          />
          <div className="other-sec1" onClick={handleClick}>
            {show && (
              <div className="demo">
                <div className="demo-card">Search</div>
                <div className="demo-card">Trichy</div>
                <div className="demo-card" onClick={onclick}>
                  Profile
                </div>
                <div className="demo-card">Notification</div>
                <div className="demo-card" onClick={goCart}>
                  Cart
                </div>
              </div>
            )}
          </div>
          <p class="col shop-by-category" onClick={() => CategoriesHandler()}>
            Shop By Category
            <RiArrowDropDownLine style={{ height: "30px", width: "30px" }} />
          </p>
          <p className="col farms" onClick={farmsHandler}>
            Explore Farms
          </p>
          <div className="other-sec" style={{ width: "370px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly ",
                width: "300px",
                marginRight: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100px",
                  justifyContent: "space-evenly",
                  cursor: "pointer",
                }}
              >
                <img
                  style={{
                    height: "20px",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                  src={require("../Images/Search.png")}
                />
                <p
                  style={{
                    height: "20px",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  Search
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100px",
                  justifyContent: "space-evenly",
                  cursor: "pointer",
                }}
              >
                <img
                  style={{
                    height: "20px",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                  src={require("../Images/Location.png")}
                />
                <p
                  style={{
                    height: "20px",
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: "-7px",
                  }}
                >
                  Trichy
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100px",
                  justifyContent: "space-around",
                }}
              >
                <img
                  onClick={onclick}
                  style={{
                    height: "20px",
                    marginTop: "auto",
                    marginBottom: "auto",
                    cursor: "pointer",
                    marginLeft: "40px",
                  }}
                  src={require("../Images/Profile.png")}
                />
                <div style={{ cursor: "pointer" }}>
                  <img
                    style={{
                      height: "20px",
                      marginTop: "30px",
                      marginBottom: "auto",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                    src={require("../Images/Notification.png")}
                  />
                  <span class="badge badge-light">
                    <p
                      style={{
                        marginTop: "-3px",
                        marginLeft: "-2px",
                        fontSize: "10px",
                      }}
                    >
                      3
                    </p>
                  </span>
                </div>
                {/* <img src={require("../Images/Notification.png")}>
        <Badge bg="secondary" style={{color:"black"}}>New</Badge>
      </img> */}
                <img
                  onClick={goCart}
                  style={{
                    height: "20px",
                    marginTop: "auto",
                    marginBottom: "auto",
                    cursor: "pointer",
                    marginLeft: "30px",
                  }}
                  src={require("../Images/Cart.png")}
                />
                {cartlen.length >= 1 && (
                  <span
                    class="badge rounded-pill badge-notification bg-success"
                    style={{
                      marginTop: "57px",
                      marginLeft: "-39px",
                      cursor: "pointer",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        marginTop: "-3px",
                        marginLeft: "-3px",
                      }}
                    >
                      {cartlen.length}
                    </p>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {category1 && (
        <FilterContextProvider>
          <Categories />
        </FilterContextProvider>
      )}
    </div>
  );
};

export default Header;
