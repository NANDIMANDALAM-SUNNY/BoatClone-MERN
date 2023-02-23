import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";



const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate()
  const [cart, setCart] = useCart();
  return (
    <Layout title={"Search results"}>
      <div className="container containerwidth">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ?<> <h3>currently we have not added poducts that you are looking for 🥲🥲🥲🥲🥲🥲" </h3><p>
                <Link to='/'>Go to Home Page</Link>
              </p></>
              : `Found ${values?.results.length} found`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
             
              <div className="card m-2 align-items-center" key={p._id} style={{height:"490px",borderRadius:"10px",border:"none",width:"17.35rem",paddingTop:"10px",backgroundColor:"rgba(128, 128, 128, 0.097)"}}>
                {/* <img style={{height:"200px",width:"80%"}}  onClick={() => navigate(`/product/${p.slug}`)}
                  src={p.image}
                  className="card-img-top"
                  alt={p.name}
                /> */}
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  onClick={() => navigate(`/product/${p.slug}`)}
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
        </div>
      </div>
    </Layout>
  );
};

export default Search;



//  {/* <div className="card m-2" style={{ width: "18rem" }}>
//                 <img
//                   src={`/api/v1/product/product-photo/${p._id}`}
//                   className="card-img-top"
//                   alt={p.name}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{p.name}</h5>
//                   <p className="card-text">
//                     {p.description.substring(0, 30)}...
//                   </p>
//                   <p className="card-text"> $ {p.price}</p>
//                   <button class="btn btn-primary ms-1">More Details</button>
//                   <button class="btn btn-secondary ms-1">ADD TO CART</button>
//                 </div>
//               </div> */}