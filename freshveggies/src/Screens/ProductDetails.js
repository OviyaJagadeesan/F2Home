import React, { useState } from "react";
// import farms from "../Data/farms";
import { Card } from "react-bootstrap";
import "../Styles/ProductDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { additem } from "../Redux/Action";
import Header from "../Screens/Header";
import Footer from "../Screens/Footer";
import grayBg from "../Images/GrayBG.png";
import redBg from "../Images/RedBG.png";
import Farms from "../Data/farms";

const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [productdetails, setProductDetails] = useState(location.state);
  const [farms, setFarms] = useState(Farms);
  const dispatch = useDispatch();
  const MyCartHandler = (name, farm, weight, notkd, kd) => {
    const data = { name, farm, weight, notkd, kd };
    dispatch(additem(data));
  };
  console.log(farms);

  return (
    <div>
      <Header />
      <div className="fluid" style={{ marginTop: "90px", overflow: "hidden" }}>
        <div className="row" style={{ margin: "0px 20px 0px 20px" }}>
          <div className="col-md-1  small-image" style={{ marginTop: "20px" }}>
            <img
              src={require(`../Images/${productdetails.image}`)}
              className="img-fluid"
            />
          </div>

          <div
            className="col-md-3 col-sm-6 col-xs-12 big-image"
            style={{ marginTop: "20px" }}
          >
            <center>
              <img
                src={require(`../Images/${productdetails.image}`)}
                className="img-fluid"
              />
            </center>
          </div>
          <div
            className="col-md-8 col-sm-6 col-xs-12"
            style={{ marginTop: "20px" }}
          >
            <h5 className="col product-name">{productdetails.productname}</h5>
            <p className="col farm-name">{productdetails.farm}</p>
            <p className="col description-details">
              {productdetails.description}
            </p>
            <p className="col descript-details">{productdetails.descript}</p>
            <div className="center">
              <div className="col deal-off">
                <div>
                  <img
                    src={grayBg}
                    style={{ width: "132px" }}
                    className="grayBG"
                  ></img>
                  <p
                    style={{
                      marginTop: "-30px",
                      marginLeft: "22px",
                      color: "white",
                    }}
                  >
                    Deal Day
                  </p>
                </div>
                <div>
                  <img
                    src={redBg}
                    style={{ width: "118px" }}
                    className="redBG"
                  ></img>
                  <p style={{ marginTop: "-30px", color: "white" }}>30% OFF</p>
                </div>
              </div>
              <div className="col item-weight">{productdetails.weight}</div>
              <div className="col item-kds">
                <p className="col-md-3 col-sm-12 item-notkd">
                  {productdetails.notkd}
                </p>
                <p className="col-md-3 col-sm-12 item-kd">
                  {productdetails.kd}
                </p>
              </div>
              
              <div
                className="add-remove-buy-now"
                style={{ display: "flex", flexDirection: "row", width: "42vw" }}
              >
                <div
                  className="add-remove"
                  style={{
                    marginLeft: "5px",
                    border: "1px solid #80B435",
                    width: "21vw",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      width: "7vw",
                      textAlign: "center",
                      backgroundColor: "#80B435",
                      color: "white",
                    }}
                  >
                    -
                  </div>
                  <div style={{ width: "7vw", textAlign: "center" }}>1</div>
                  <div
                    style={{
                      width: "7vw",
                      textAlign: "center",
                      backgroundColor: "#80B435",
                      color: "white",
                    }}
                  >
                    +
                  </div>
                </div>
                <div
                  className="buy-now"
                  style={{
                    marginLeft: "5px",
                    border: "1px solid #80B435",
                    width: "21vw",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: "4px",
                  }}
                >
                  <div className="button-buy-now"
                    style={{
                      backgroundColor: "#80B435",
                      width: "21vw",
                      textAlign: "center",
                      color: "white ",
                    }}
                  >
                    BUY NOW
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{
            padding: "20px 20px 20px 20px",
          }}
        >
          <div
            style={{ padding: "10px 20px 20px 30px", border: "2px solid grey" }}
          >
            <div className="col farm-about">{Farms[0].farmabout}</div>
            <div className="imageandname">
              <img
                className="col img-fluid farm-image"
                src={require(`../Images/${Farms[0].farmimage}`)}
              ></img>
              <div className="col farm-names">{Farms[0].farmname}</div>
            </div>
            <div className="description-farm">{Farms[0].description}</div>
            <center>
              <div>
                <img
                  className="col"
                  style={{ margin: "20px" }}
                  src={require(`../Images/${Farms[0].image1}`)}
                ></img>
                <img
                  className="col"
                  style={{ margin: "20px" }}
                  src={require(`../Images/${Farms[0].image2}`)}
                ></img>
                <img
                  className="col"
                  style={{ margin: "20px" }}
                  src={require(`../Images/${Farms[0].image3}`)}
                ></img>
                <img
                  className="col"
                  style={{ margin: "20px" }}
                  src={require(`../Images/${Farms[0].image4}`)}
                ></img>
              </div>
            </center>
            <div className="row previous-continue">
              <div className="col-md-2 previous-page">
                {Farms[0].previouspage}
              </div>
              <div className="col-md-3 continue-shopping">{Farms[0].shop}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
