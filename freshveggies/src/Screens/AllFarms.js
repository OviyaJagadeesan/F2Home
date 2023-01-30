import React, { useState, useEffect } from "react";
import Header from "./Header";
import "../Styles/Poultry.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "../Styles/AllFarms.css";

const AllFarms = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
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
    <div style={{ overflow: "hidden" }}>
      <Header />
      <div className="fluid">
        <img src={require("../Images/FarmsLogo.png")} className="img-fluid" />
        <div
          className="row center-align"
          style={{ margin: "0px 20px 0px 20px" }}
        >
          <div style={{ marginTop: "0px" }}></div>
          <div
            className="col-md-2 sidebar"
            style={{ marginTop: "22px", boxShadow: "0px 3px 6px #000" }}
          >
            <div style={{}}>
              <div
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginLeft: "-10px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "#F7F7F7",
                  width: "210px",
                  marginTop: "20px",
                  height: "50px",
                }}
              >
                <p style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                  Category
                </p>
                <img
                  style={{
                    height: "20px",
                    width: "20px",
                    marginTop: 'auto',
                    marginBottom: 'auto',
                  }}
                  src={require("../Images/Filter.png")}
                  alt="DownArrow"
                />
              </div>

              <div
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginLeft: "-10px",
                  width: "216px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ marginTop: "20px" }}>Dairy</p>
                <input
                  style={{
                    marginBottom: "12px",
                    height: "20px",
                    width: "20px",
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                  type="checkbox"
                  value="Dairy"
                />
              </div>
              <div
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginLeft: "-10px",
                  width: "216px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p>Poultry</p>
                <input
                  style={{
                    marginBottom: "12px",
                    height: "20px",
                    width: "20px",
                    cursor: "pointer",
                  }}
                  type="checkbox"
                  value="Poultry"
                />
              </div>
              <div
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginLeft: "-10px",
                  width: "216px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p>Sea Food</p>
                <input
                  style={{
                    marginBottom: "12px",
                    height: "20px",
                    width: "20px",
                    cursor: "pointer",
                  }}
                  type="checkbox"
                  value="Seafood"
                />
              </div>
              <div
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginLeft: "-10px",
                  width: "216px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p>Vegetables</p>
                <input
                  style={{
                    marginBottom: "12px",
                    height: "20px",
                    width: "20px",
                    cursor: "pointer",
                  }}
                  type="checkbox"
                  value="Vegetables"
                />
              </div>
              <div
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginLeft: "-10px",
                  width: "216px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p>Fresh Fruits</p>
                <input
                  style={{
                    marginBottom: "12px",
                    height: "20px",
                    width: "20px",
                    cursor: "pointer",
                  }}
                  type="checkbox"
                  value="Freshfruits"
                />
              </div>
              <div
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginLeft: "-10px",
                  width: "216px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p>Flowers</p>
                <input
                  style={{
                    marginBottom: "12px",
                    height: "20px",
                    width: "20px",
                    cursor: "pointer",
                  }}
                  type="checkbox"
                  value="Flowers"
                />
              </div>
            </div>
          </div>
          <div className="col-md-10 align-center">
            <nav aria-label="breadcrumb" style={{ marginTop: "20px" }}>
              <ol class="breadcrumb">
                <li
                  class="breadcrumb-item"
                  style={{ color: "#6B7885", cursor: "pointer" }}
                  onClick={goHome}
                >
                  Home
                </li>
                <li
                  class="breadcrumb-item active"
                  style={{ color: "#80B435", cursor: "pointer" }}
                  aria-current="page"
                >
                  Farms
                </li>
              </ol>
            </nav>
            <h1 style={{ color: "#415162", fontSize: "26px" }}>
              Explore Farms
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <div className="all-farms-space">
                <img
                  className="farm1-promo"
                  src={require("../Images/Farm1.png")}
                ></img>
                <div className="farms-text">George Farm</div>
              </div>
              <div className="all-farms-space">
                <img
                  className="farm2-promo"
                  src={require("../Images/Farm2.png")}
                ></img>
                <div className="farms-text">Martha's Farm</div>
              </div>
              <div className="all-farms-space">
                <img
                  className="farm3-promo"
                  src={require("../Images/Farm3.png")}
                ></img>
                <div className="farms-text">Mathew Farm</div>
              </div>
              <div className="all-farms-space">
                <img
                  className="farm4-promo"
                  src={require("../Images/Farm4.png")}
                ></img>
                <div className="farms-text">Joseph Farm</div>
              </div>
              <div className="all-farms-space">
                <img
                  className="farm5-promo"
                  src={require("../Images/Farm5.png")}
                ></img>
                <div className="farms-text">Kay's Chick Farm</div>
              </div>
              <div className="all-farms-space">
                <img
                  className="farm6-promo"
                  src={require("../Images/Farm6.png")}
                ></img>
                <div className="farms-text">AI-Orgo Farm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllFarms;
