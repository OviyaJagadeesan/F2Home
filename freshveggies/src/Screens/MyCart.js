import React, { useEffect, useState } from "react";
import "../Styles/MyCart.css";
import { useSelector } from "react-redux";
import Header from "../Screens/Header";
import { useDispatch } from "react-redux";
import { additem } from "../Redux/Action";
import { removeitem } from "../Redux/Action";
import { deleteitem } from "../Redux/Action";
import Footer from "../Screens/Footer";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  const navigate=useNavigate();
  
  const [deleteHandler,setDeleteHandler]=useState(false);

  let value = useSelector((payload) => payload);
  const dispatch = useDispatch();
  
  const addItemHandler = (name, farm, weight, notkd, kd,stringKD) => {
    dispatch(additem({ name, farm, weight, notkd,kd,stringKD }));
  };

  const removeItemHandler = (name, farm, weight, notkd, kd,stringKD) => {
    dispatch(removeitem({ name, farm, weight, notkd, kd,stringKD }));
  };

  const deleteItemHandler = (name, farm, weight, notkd, kd,stringKD) => {
    dispatch(deleteitem({ name, farm, weight, notkd, kd,stringKD }));
    setDeleteHandler(true);
    console.log("deletehandler",deleteHandler);
  };


  const goHomeHandler=()=>{
    navigate("/home");
    window.scrollTo(0,0);
  }


  if (value.length>0) {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="cart-page-div">
          <div className="cart-header">
          <nav aria-label="breadcrumb" style={{ marginTop: "20px" }}>
              <ol class="breadcrumb">
                <li
                  class="breadcrumb-item"
                  style={{ color: "#6B7885", cursor: "pointer" }}
                  onClick={goHomeHandler}
                >
                  Home
                </li>
                <li
                  class="breadcrumb-item active"
                  style={{ color: "#80B435", cursor: "pointer" }}
                  aria-current="page"
                >
                  My Cart
                </li>
              </ol>
            </nav>
            <p style={{fontSize:"26px",fontWeight:"500",color:"#415162"}}>My Cart ({value.length})</p>
          </div>

          <div className="card page">
            <div className="card details-div-head">
              <div className="row cart-body">
                <div className="col-lg-3 item-details-header">
                  Item Description
                </div>
                <div className="col-lg-3 item-details-header">Qty</div>
                <div className="col-lg-2 item-details-header"></div>
                <div className="col-lg-4 item-details-header">Price(KD)</div>
              </div>
            </div>
            <div>
              {value.map((item) => {
                return (
                  <div className="card details-div">
                    <div className="row cart-details">
                      <div className="col-lg-3 col-md-12 col-sm-12 name-farmname">
                        <div className="col col-md-12 col-sm-12 item-name ">{item.name}</div>
                        <div className="col col-md-12 col-sm-6 farm-name">{item.farm}</div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 weight-item">{item.weight}</div>
                      <div className="col-lg-2 col-md-6 col-sm-6 delete-add-remove">
                        <div
                          className="col delete-item-img"
                          onClick={() =>
                            deleteItemHandler(
                              item.name,
                              item.farm,
                              item.weight,
                              item.notkd,
                              item.kd,
                              item.stringKD
                            )
                          }
                        ></div>
                        <div className="col add-remove-item-box">
                          <div
                            className="col remove-item"
                            onClick={() =>
                              removeItemHandler(
                                item.name,
                                item.farm,
                                item.weight,
                                item.notkd,
                                item.kd,
                                item.stringKD
                              )
                            }
                          >
                            -
                          </div>
                          <div className="col quantity-item">
                            {item.quantity}
                          </div>
                          <div
                            className="col add-item"
                            onClick={() =>
                              addItemHandler(
                                item.name,
                                item.farm,
                                item.weight,
                                item.notkd,
                                item.kd,
                                item.stringKD
                              )
                            }
                          >
                            +
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 price-item">
                        <div className="col item-notkd"><del>{(item.notkd*item.quantity).toFixed(3)}</del></div>
                        <div className="col item-kd">{(item.kd*item.quantity).toFixed(3)}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
else{
return (
  <div>
    <Header/>
    <div className="whole-empty-div">
      <div className="empty-cart-img"></div>
      <p className="empty-cart-text">Your Cart is Empty</p>
      <button className="go-home-button" onClick={goHomeHandler}>GO HOME</button>
    </div>
    <Footer/>
  </div>
);
}
}

export default MyCart;
