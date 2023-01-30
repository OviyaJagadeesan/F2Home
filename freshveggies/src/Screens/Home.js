import React from "react";
import "../Styles/Home.css";
import Header from "../Screens/Header";
import Carousel from "react-elastic-carousel";
import Footer from "./Footer";
import Poultry from "./Poultry";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import img from "../../src/Images/Dairy-Promo.png";

const Home = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/allcategories")
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("e", err);
      });
  }, []);

  const [farms, setFarms] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/allfarms")
      .then((res) => {
        setFarms(res.data);
      })
      .catch((err) => {
        console.log("e", err);
      });
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 1000, itemsToShow: 2 },
  ];

  const breakPoints2 = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 1000, itemsToShow: 5 },
  ];

  const breakPoints3 = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 800, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  const productDetailsHandler = (e) => {
    console.log("e",e);
    if(e.id==1){
      navigate("/dairy");
    }else if(e.id==2){
      navigate("/poultry", { state: { productType: e.target.id } });
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    }
  };

  const DairyHandler = () => {
    navigate("/dairy");
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const allCategoriesHandler = () => {
    navigate("/allcategories");
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const allFarmsHandler=()=>{
    navigate("/allfarms"); 
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const poultryHandlerProduct=(e)=>{
      navigate("/poultry", { state: { productType: e.target.id } }); 
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });

  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, []);


  return (
    <div style={{ backgroundColor: "white",overflow:"hidden" }}>
      <Header />
      <div className="fluid">
        <div className="veg-products-div">
          <img
            className="img-fluid"
            src={require("../Images/FruitsVeg.png")}
            alt="vegFrame"
            style={{ width: "100%",cursor:"pointer" }}
            onClick={allFarmsHandler}
          ></img>
        </div>
        <div
          className="headings"
          style={{
            display: "flex",
            marginTop: "20px",
            flexDirection: "row",
            width: "fit-content",
            marginLeft: "100px",
            justifyContent: "space-evenly",
            height: "fit-content",
          }}
        >
          <p
            style={{
              fontSize: "26px",
              margin: 'auto',
              fontFamily: "Open-Sans",
            }}
          >
            Featured Promos
          </p>
          <p
            style={{
              fontSize: "16px",
              marginLeft: "10px",
              marginTop: "10px",
              marginBottom: 'auto',
              fontFamily: "Open-Sans",
              color: "red",
              cursor:"pointer"
            }}
          >
            View All
          </p>
        </div>
        <Carousel
          className="row"
          style={{ height: "fit-content" }}
          breakPoints={breakPoints}
        >
          <img
            className="col-md-10 col-sm-10 img-fluid"
            src={require("../Images/OrganicVegitables.png")}
            style={{ margin: "20px" }}
          ></img>
          <img
            className="col-md-10 col-sm-10 img-fluid"
            src={require("../Images/Fruitilicious.png")}
            style={{ margin: "20px" }}
          ></img>
          <img
            className="col-md-10 col-sm-10 img-fluid"
            src={require("../Images/Sweetness.png")}
            style={{ margin: "20px" }}
          ></img>
          <img
            className="col-md-10 col-sm-10 img-fluid"
            src={require("../Images/Sweetness.png")}
            style={{ margin: "20px" }}
          ></img>
          <img
            className="col-md-10 col-sm-10 img-fluid"
            src={require("../Images/Fruitilicious.png")}
            style={{ margin: "20px" }}
          ></img>
          <img
            className="col-md-10 col-sm-10 img-fluid"
            src={require("../Images/OrganicVegitables.png")}
            style={{ margin: "20px" }}
          ></img>
          <img
            className="col-md-10 col-sm-10 img-fluid"
            src={require("../Images/Sweetness.png")}
            style={{ margin: "20px" }}
          ></img>
        </Carousel>
        <img className="img-fluid" src={require("../Images/Yoghurt.png")}></img>
        <div
          className="headings"
          style={{
            display: "flex",
            marginTop: "20px",
            flexDirection: "row",
            width: "fit-content",
            marginLeft: "100px",
            justifyContent: "space-evenly",
            height: "fit-content",
          }} onClick={allCategoriesHandler}
        >
          <p
            style={{
              fontSize: "26px",
              margin: 'auto',
              fontFamily: "Open-Sans",
            }}
          >
            Top Categories
          </p>
          <p
            style={{
              fontSize: "16px",
              marginLeft: "10px",
              marginTop: "10px",
              marginBottom: 'auto',
              fontFamily: "Open-Sans",
              color: "red",
              cursor:"pointer"
            }}
          >
            View All
          </p>
        </div>
        <div>
          <Carousel breakPoints={breakPoints2}>
            {categories &&
              categories.map((item) => {
                console.log("images", item.image);
                return (
                  <div style={{ cursor: "pointer" }} onClick={()=>productDetailsHandler(item)}>
                    <img
                      src={require(`../Images/${item.image}`)}
                      className="col-md-10 col-sm-10 img-fluid"
                      style={{ margin: "20px" }}
                    />
                    <div className="promo-texts" value={item.id} onClick={item.productname==="Poultry"?poultryHandlerProduct:null}>{item.productname}</div>
                  </div>
                );
              })}
          </Carousel>
        </div>
        <div
          className="headings"
          style={{
            display: "flex",
            marginTop: "20px",
            flexDirection: "row",
            width: "fit-content",
            marginLeft: "100px",
            justifyContent: "space-evenly",
            height: "fit-content",
          }} onClick={allFarmsHandler}
        >
          <p
            style={{
              fontSize: "26px",
              margin: 'auto',
              fontFamily: "Open-Sans",
            }}
          >
            Explore Farms
          </p>
          <p
            style={{
              fontSize: "16px",
              marginLeft: "10px",
              marginTop: "10px",
              marginBottom: 'auto',
              fontFamily: "Open-Sans",
              color: "red",
              cursor:"pointer"
            }}
          >
            View All
          </p>
        </div>
        <Carousel breakPoints={breakPoints3} style={{ marginBottom: "40px" }}>
          {farms &&
            farms.map((farmsDetails) => {
              console.log("farms", farmsDetails);
              return (
                <div
                  style={{
                    textAlign: "center",
                    padding: 'auto',
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={require(`../Images/${farmsDetails.farmimage}`)}
                    className="col-md-6 col-sm-10 img-fluid "
                    style={{
                      margin: 'auto',
                      display: "flex",
                      width: "150px",
                      paddingTop: "20px",
                    }}
                  />
                  <p className="name-farm">{farmsDetails.farmname}</p>
                </div>
              );
            })}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
