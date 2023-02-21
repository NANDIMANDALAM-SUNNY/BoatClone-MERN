import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.css";
import Random  from 'rando-js'
import { api } from "../config/config";
import Offers from "../components/Layout/Offers";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${api}/api/v1/category/get-category`);
      if (data?.success) {
        setCategories(data?.category)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${api}/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get(`${api}/api/v1/product/product-count`);
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${api}/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`${api}/api/v1/product/product-filters`, {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Layout title={"ALl Products - Best offers "}>
    <Offers />
      {/* banner image */}
      {/* banner image */}
      <div className="container-fluid row mt-3 home-page">
        {/* <div className="col-md-3 filters">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div> */}
          {/* price filter */}
          {/* <h4 className="text-center mt-4">Filter By Price</h4> */}
          {/* <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div> */}
          {/* <div className="d-flex flex-column">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div> */}
        <div className="">
          <h1 className="text-center">All Products</h1>

          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2 align-items-center" key={p._id} style={{height:"450px",borderRadius:"10px",border:"none",width:"17.35rem",paddingTop:"10px"}}>
                <img style={{height:"200px",width:"80%"}}  onClick={() => navigate(`/product/${p.slug}`)}
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/back_300x.png?v=1668599490"
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body" style={{backgroundColor:"white",width:"96%",marginBottom:"10px",borderRadius:"10px"}}>
                  <div className="">
                    <h5 className="card-title" style={{fontSize:"16px"}}>{p.name}</h5>
                    <div className="d-flex justify-content-around" style={{borderBottom:"1px solid #E8EDF0"}}>
                      <h5 className="card-title" style={{fontSize:"15px",paddingRight:"30x !important"}}> ₹ {p.price.toLocaleString()}</h5>
                      <h5 className="card-title" style={{fontSize:"15px",color:"green"}}>{`${p.price/p.price*Math.floor(Math.random() *30 )}`}% off</h5>
                      <h5 className="card-title" style={{fontSize:"10px",textDecoration:"line-through",marginTop:"5px"}}> ₹ {`${ p.price + (p.price+1000 - p.price+ 1)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32 | 0}`}</h5>
                      <p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                    </div>
                    
                  </div>
                  <p className="card-text mt-1">
                    <div className="d-flex justify-content-around">
                      <p>
                        <span style={{fontSize:"10px",color:"red"}}>⭐ </span>
                        <span style={{fontSize:"15px",marginLeft:"10px"}}> 4.{Math.floor(Math.random() *9 )} | </span>
                      </p>
                      <p> {Math.floor(Math.random() *500)} reviews</p>
                    </div>
                  </p>
                  <div className="card-name-price">
                    <button
                      className="btn  ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                      style={{fontWeight:"bold",backgroundColor:"#f7c20a"}}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ...😊😊😊"
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
