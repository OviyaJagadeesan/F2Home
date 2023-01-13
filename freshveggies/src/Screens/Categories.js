import React from "react";
import Header from "./Header";
import "../Styles/Categories.css";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const dairyHandler = () => {
    navigate("/dairy");
  };

  const allPoultryProductHandler = () => {
    navigate("/poultry");
  };

  const allCategoriesHandler = () => {
    navigate("/allcategories");
  };
  return (
    <div>
      <div className="categories-wrapper">
        <div className="categories-div">
          <div className="products-div">
            <p className="head-margin-div">Dairy</p>
            <p className="margin-div">Milk</p>
            <p className="margin-div">Butter</p>
            <p className="margin-div">Cheese</p>
            <p className="view-all-div" onClick={dairyHandler}>
              View all
            </p>
          </div>
          <div className="products-div">
            <p className="head-margin-div">Poultry</p>
            <p className="margin-div">Egg</p>
            <p className="margin-div">Chicken</p>
            <p className="margin-div">Turkey</p>
            <p className="view-all-div" onClick={allPoultryProductHandler}>
              View all
            </p>
          </div>
          <div className="products-div">
            <p className="head-margin-div">Sea Food</p>
            <p className="margin-div">Shrimps</p>
            <p className="margin-div">Fish</p>
            <p className="margin-div">Lobster</p>
            <p className="view-all-div">View all</p>
          </div>
          <div className="products-div">
            <p className="head-margin-div">Vegetables</p>
            <p className="margin-div">Leafy</p>
            <p className="margin-div">Roots</p>
            <p className="margin-div">Seasoning</p>
            <p className="view-all-div">View all</p>
          </div>
          <div className="products-div">
            <p className="head-margin-div">Fresh Fruits</p>
            <p className="margin-div">Apples</p>
            <p className="margin-div">Citrus</p>
            <p className="margin-div">Exotic</p>
            <p className="view-all-div">View all</p>
          </div>
          <div className="products-div">
            <p className="head-margin-div">Flowers</p>
            <p className="margin-div">Roses</p>
            <p className="margin-div">Blue and Blush</p>
            <p className="margin-div">Festive</p>
            <p className="view-all-div">View all</p>
          </div>
        </div>
        <button className="view-all-categories" onClick={allCategoriesHandler}>
          View All Categories
        </button>
      </div>
    </div>
  );
};

export default Categories;
