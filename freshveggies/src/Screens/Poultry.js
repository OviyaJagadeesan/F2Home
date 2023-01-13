import React, { useState, useEffect } from "react";
import Header from "./Header";
import "../Styles/Poultry.css";
import Footer from "./Footer";
import { Card } from "react-bootstrap";
import ProductDetails from "./ProductDetails";
import { additem } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ReadMore from "../Screens/ReadMore";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { AiOutlineDown } from "react-icons/ai";

const Poultry = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [product, setProduct] = useState();
  const [addCartProduct, setAddCartProduct] = useState();
  const [show, setShow] = useState(false);

  let dataGet = useSelector((payload) => payload);
  console.log("Payload", dataGet);

  const cartHandler = (e) => {
    if (setAddCartProduct(e) === addCartProduct) {
      setAddCartProduct(e);
    }
  };

  const productDetailsHandler = (e) => {
    setProduct(e);
    setShow(true);
  };

  const goHome = () => {
    navigate("/home");
  };



  // const [pFilter, setPFilter] = useState("");
  // const [egg,setEgg]=useState(false);
  // const [chicken,setChicken]=useState(false);
  // const [selection,setSelection]=useState(false);

  // const EggsHandler=()=>{
  //   setEgg(!egg);
  //   setSelection(!selection);
  //   console.log("egg",egg);
  //   if(egg===true){
  //     setPFilter("Eggs");
  //     console.log("eggf",pFilter);
  //   }
  // };

  // useEffect(()=>{

  // },[egg]);

  // useEffect(()=>{

  // },[chicken]);

  // const ChickenHandler=()=>{
  //   setChicken(!chicken);
  //   setSelection(!selection);
  //   console.log("chicken",chicken);
  //   if(chicken===true){
  //     setPFilter("Chicken");
  //     console.log("chicken",pFilter);
  //   }
  // };


  let filterProduct;
  const [filterProducts, setFilterProducts] = useState();
  const [selection, setSelection] = useState(false);
  const [pFilter, setPFilter] = useState("");

  const FilterHandler = (e) => {
    console.log("e", e);
    console.log("e.target.value", e.target.value);
    // setPFilter(e.target.value);
    // setSelection(!selection);
    if (e.target.checked) {
      console.log("checked",e.target.value,e.target.checked)
      setPFilter((prevState) => [...prevState, e.target.value]);
      setSelection(true);
    } else {
      let filterArray = pFilter.filter((item) => {
        if (item !== e.target.value) {
          return item;
        }
      });
      if(filterArray.length===0){
        setSelection(false)
      }
      setPFilter(filterArray);
    }
  };
  console.log("pFilter", pFilter);
  useEffect(() => {
    if (addCartProduct) {
      console.log("dispatched");
      dispatch(additem(addCartProduct));
    }
  }, [addCartProduct]);

  useEffect(() => {
    if (pFilter) {
      for(let i=0;i<pFilter.length;i++){
        filterProduct = allproducts.filter((product) => {
          if(product.name.includes(pFilter[i]))
          return product;
        })
      }
      setFilterProducts(filterProduct)
    }
  }, [pFilter]);
  product && navigate("/product-details", { state: product });

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const [allproducts, setAllProducts] = useState();
  let [pageNumber, setPageNumber] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  let perPage = 8;

  const [count, setCount] = useState();
  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/allproducts/?page=${currentPage}&limit=${perPage}`
      )
      .then((res) => {
        setAllProducts(res.data.product);
        setCount(res.data);
        console.log("alllll", res.data.product);
      })
      .catch((err) => {});
  }, [currentPage]);

  console.log("allproductssss", allproducts);
  let totalCount = count ? count.total : 0;
  console.log("total", totalCount);

  pageNumber = Math.ceil(totalCount / perPage);
  console.log("pageNumber", pageNumber);
  const handlePageClick = (d) => {
    console.log(";", d.selected);
    setCurrentPage(d.selected + 1);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <div className="fluid">
        <img src={require("../Images/Poultry.png")} className="img-fluid" />
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
                  width: "111%",
                  marginTop: "20px",
                  height: "50px",
                }}
              >
                <p style={{ marginTop: "auto", marginBottom: "auto" }}>
                  Category
                </p>
                <img
                  style={{
                    height: "20px",
                    width: "20px",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                  src={require("../Images/Menu.png")}
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
                <p style={{ marginTop: "20px" }}>Poultry</p>
                <AiOutlineDown
                  style={{ height: "10px", width: "20px", marginTop: "30px" }}
                  src={require("../Images/DownArrow.png")}
                  alt="DownArrow"
                />
              </div>
              <div
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginLeft: "-10px",
                  width: "111%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "#F7F7F7",
                  height: "50px",
                  marginTop: "20px",
                }}
              >
                <p style={{ marginTop: "auto", marginbottom: "auto" }}>
                  Sub-Category
                </p>
                <img
                  style={{
                    height: "20px",
                    width: "20px",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                  src={require("../Images/Filter.png")}
                  alt="filter-img"
                />
              </div>
              <div
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginLeft: "-10px",
                  display: "flex",
                  width: "216px",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ marginTop: "20px" }}>Eggs</p>
                <input
                  style={{
                    marginBottom: "12px",
                    height: "20px",
                    width: "20px",
                    marginTop: "20px",
                  }}
                  type="checkbox"
                  value="Eggs"
                  onClick={FilterHandler}
                />
              </div>
              <div
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginLeft: "-10px",
                  display: "flex",
                  flexDirection: "row",
                  width: "216px",
                  justifyContent: "space-between",
                }}
              >
                <p>Chicken</p>
                <input
                  style={{
                    marginBottom: "12px",
                    height: "20px",
                    width: "20px",
                  }}
                  type="checkbox"
                  value="Chicken"
                  onClick={FilterHandler}
                />
              </div>
              <div
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginLeft: "-10px",
                  display: "flex",
                  flexDirection: "row",
                  width: "216px",
                  justifyContent: "space-between",
                }}
              >
                <p>Turkey</p>
                <input
                  style={{
                    marginBottom: "12px",
                    height: "20px",
                    width: "20px",
                  }}
                  type="checkbox"
                  value="Turkey"
                />
              </div>
              <div
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginLeft: "-10px",
                  display: "flex",
                  flexDirection: "row",
                  width: "216px",
                  justifyContent: "space-between",
                }}
              >
                <p>Duck</p>
                <input
                  style={{
                    marginBottom: "12px",
                    height: "20px",
                    width: "20px",
                  }}
                  type="checkbox"
                  value="Duck"
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
                  Poultry
                </li>
              </ol>
            </nav>
            <h1 style={{ color: "#415162", fontSize: "26px" }}>Poultry</h1>
            <div className="row">
              {selection
                ? filterProducts &&
                  filterProducts.map((product) => {
                    return (
                      <div
                        className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
                        style={{ marginBottom: "20px" }}
                      >
                        <div
                          style={{
                            cursor: "pointer",
                            border: "1px solid gainsboro",
                            borderRadius: "10px",
                          }}
                        >
                          <center>
                            <img
                              src={require(`../Images/${product.image}`)}
                              className="img-fluid"
                              onClick={() => productDetailsHandler(product)}
                            />
                          </center>
                          <div style={{ padding: "10px", height: "220px" }}>
                            <h6>{product.name}</h6>
                            <p className="farm-text">{product.farm}</p>
                            <ReadMore style={{ height: "20%" }} length={40}>
                              {product.description}
                            </ReadMore>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                bottom: "20px",
                              }}
                            >
                              <p style={{ color: "#6B7885" }}>
                                {product.weight}
                              </p>
                              <p
                                style={{
                                  marginLeft: "10px",
                                  color: "#6B7885",
                                  textDecoration: "line-through",
                                }}
                              >
                                {product.notkd}
                              </p>
                              <p
                                style={{
                                  marginLeft: "10px",
                                  color: "#415162",
                                }}
                              >
                                {product.kd}
                              </p>
                            </div>
                          </div>
                          <button
                            // className="cart-buttons"
                            className={`${
                              product.stack === "Add to Cart"
                                ? "greenBG"
                                : "grayBG"
                            }`}
                            onClick={() => cartHandler(product)}
                          >
                            {product.stack}
                          </button>
                        </div>
                      </div>
                    );
                  })
                : allproducts &&
                  allproducts.map((product) => {
                    return (
                      <div
                        className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
                        style={{ marginBottom: "20px" }}
                      >
                        <div
                          style={{
                            cursor: "pointer",
                            border: "1px solid gainsboro",
                            borderRadius: "10px",
                          }}
                        >
                          <center>
                            <img
                              src={require(`../Images/${product.image}`)}
                              className="img-fluid"
                              onClick={() => productDetailsHandler(product)}
                            />
                          </center>
                          <div style={{ padding: "10px", height: "220px" }}>
                            <h6>
                              {product.name}
                              {/* <ReadMore length={20}></ReadMore> */}
                            </h6>
                            <p className="farm-text">{product.farm}</p>
                            <ReadMore style={{ height: "20%" }} length={40}>
                              {product.description}
                            </ReadMore>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                bottom: "20px",
                              }}
                            >
                              <p style={{ color: "#6B7885" }}>
                                {product.weight}
                              </p>
                              <p
                                style={{
                                  marginLeft: "10px",
                                  color: "#6B7885",
                                  textDecoration: "line-through",
                                }}
                              >
                                {product.notkd}
                              </p>
                              <p
                                style={{ marginLeft: "10px", color: "#415162" }}
                              >
                                {product.kd}
                              </p>
                            </div>
                          </div>
                          <div
                            className={`${
                              product.stack === "Add to Cart"
                                ? "greenBG"
                                : "grayBG"
                            }`}
                          />
                          {console.log("productstack", product.stack)}
                          <button
                            className={`${
                              product.stack === "Add to Cart"
                                ? "greenBG"
                                : "grayBG"
                            }`}
                            onClick={() => cartHandler(product)}
                          >
                            {product.stack}
                          </button>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageNumber}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Poultry;
