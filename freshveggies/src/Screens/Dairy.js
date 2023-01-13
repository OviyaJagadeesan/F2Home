import React, { useState } from "react";
import Header from "./Header";
import "../Styles/Dairy.css";
import Footer from "./Footer";
import { Card } from "react-bootstrap";
import dairy from "../Data/DairyProducts";
import ProductDetails from "./ProductDetails";
import { useNavigate } from "react-router-dom";

const Dairy = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="dairy-promo-img"></div>
      <div className="">

      </div>
      {/* <div className="dairy-home-div">
        <div className="card poultry-left-div">
          <div className="category-div">
            <div className="category-text">Category</div>
            <div className="menu-category"></div>
          </div>
          <div className="poultry-div">
            <div className="poultry-text">Dairy</div>
            <div className="poultry-img"></div>
          </div>
          <div className="sub-category-div">
            <div className="sub-category-text">Sub-Category</div>
            <div className="sub-category-img"></div>
          </div>
          <div className="eggs-div">
            <div className="eggs-text">Eggs</div>
            <input type="checkbox" className="eggs-img" />
          </div>
          <div className="chicken-div">
            <div className="chicken-text">Chicken</div>
            <input type="checkbox" className="chicken-img" />
          </div>
          <div className="turkey-div">
            <div className="turkey-text">Turkey</div>
            <input type="checkbox" className="turkey-img" />
          </div>
          <div className="duck-div">
            <div className="duck-text">Duck</div>
            <input type="checkbox" className="duck-img" />
          </div>
        </div>
        <div className="poultry-right-div">
          <div className="head">Poultry</div>
          <div className="poultry-img-details">
            {dairy.map((user) => {
              return (
                <Card className="card-style">
                  <Card.Img
                    varient="top"
                    src={require(`../Images/${user.image}`)}
                  />
                  <Card.Body>
                    <Card.Title className="title-text">{user.name}</Card.Title>
                    <Card.Text className="farm-text">{user.farm}</Card.Text>
                    <Card.Text className="description-text">
                      {user.description}
                    </Card.Text>
                    <div className="weight-text">
                      <Card.Text className="weight">{user.weight}</Card.Text>
                      <Card.Text className="notkd">{user.notkd}</Card.Text>
                      <Card.Text className="kd">{user.kd}</Card.Text>
                    </div>
                  </Card.Body>
                  <button
                    className="cart-button"
                    onClick={() => cartHandler(user)}
                  >
                    {user.stack}
                  </button>
                </Card>
              );
            })}
          </div>
        </div>
      </div> */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Dairy;
