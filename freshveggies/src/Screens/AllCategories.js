import React from "react";
import "../Styles/AllCategories.css";
import Header from "../Screens/Header";
import Footer from "../Screens/Footer";
import { useNavigate } from "react-router-dom";

const AllCategories = () => {
  const navigate = useNavigate();

  const dairyHandler = () => {
    navigate("/dairy");
  };

  const PoultryHandler = (e) => {
    navigate("/poultry", { state: { productType: e.target.id } });
  };

  const seaFoodHandler = () => {
    navigate("/seafood");
  };
  const vegetablesHandler = () => {
    navigate("/dairy");
  };
  const freshFruitsHandler = () => {
    navigate("/dairy");
  };
  const flowersHandler = () => {
    navigate("/dairy");
  };
  const herbsHandler = () => {
    navigate("/dairy");
  };
  const seasoningHandler = () => {
    navigate("/dairy");
  };

  const goHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{marginTop: "100px",marginLeft: "75px",}}>
        <nav aria-label="breadcrumb" style={{ marginTop: "20px" }}>
          <ol class="breadcrumb">
            <li
              class="breadcrumb-item"
              style={{ color: "#6B7885",cursor:"pointer" }}
              onClick={goHome}
            >
              Home
            </li>
            <li
              class="breadcrumb-item active"
              style={{ color: "#80B435",cursor:"pointer" }}
              aria-current="page"
            >
              Categories
            </li>
          </ol>
        </nav>
      </div>
      <p
        style={{
          marginLeft: "75px",
          fontSize: "26px",
          fontFamily: "Open-Sans",
          fontWeight: 500,
        }}
      >
        Categories
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "-20px 65px 65px 65px",
        }}
      >
        <div className="dairy-promo" onClick={dairyHandler}>
          <div className="promo-text">Dairy</div>
        </div>
        <div className="poultry-promo" onClick={PoultryHandler}>
          <div className="promo-text">Poultry</div>
        </div>
        <div className="seafood-promo" onClick={seaFoodHandler}>
          <div className="promo-text">Sea Food</div>
        </div>
        <div className="vegetables-promo" onClick={vegetablesHandler}>
          <div className="promo-text">Vegetables</div>
        </div>
        <div className="fresh-fruits-promo" onClick={freshFruitsHandler}>
          <div className="promo-text">Fresh Fruits</div>
        </div>
        <div className="flowers-promo" onClick={flowersHandler}>
          <div className="promo-text">Flowers</div>
        </div>
        <div className="herbs-promo" onClick={herbsHandler}>
          <div className="promo-text">Herbs</div>
        </div>
        <div className="seasoning-promo" onClick={seasoningHandler}>
          <div className="promo-text">Seasoning</div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AllCategories;
