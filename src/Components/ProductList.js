import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Modal from "../Modal/Modal";
import Header from "./Header";
import Star from "../Single/Star";

export const cartProduct = createContext()







const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [cartList, setCartList] = useState([]);


  // const Heading = "Shopping Bazar";


  

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);



  const addToCart = (product) => {
    // console.log("Product Id :-" , id );
    const temp = [...cartList]
    temp.push(product)
    setCartList(temp)
  };

  


  return (
    <>


<cartProduct.Provider value={{cartList, setCartList}}>
      <Header />

      <div className="App">
        <div className="p_heading">
          {loading && <div>❤️‍🔥↻ Loading......</div>}
        </div>

        {error && (
          <div
          style={{ color: "red" }}
          >{`There is a problem fetching the post data - ${error}`}</div>
          )}

        <ul className="Product_main_container">
          {data &&
            data.map((product) => (
              <>
                <div className="P_main_container" key={product.id}>
                  <div className="Products_List">
                    <h4 className="P_category">{product.category}</h4>
          
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="title"
                      id="P_image"
                    />

                    <div className="card-body">
                      {/* <h5 className="P_rate">Rating : {product.rating.rate}</h5> */}
                      <Star value={product.rating.rate} />
                      <h5 className="card-title">{product.title}</h5>
                      <span className="P_price">Price : ${product.price} </span>
                      <br />
                     

                      <button 
                        className="btn btn-success"
                        onClick={() => addToCart( product )}
                      >
                        Add To Cart
                      </button> 


                       <Modal  />
                      
                      
                    </div>
                  </div>
                </div>
              </>
            ))}
        </ul>
      </div>
      </cartProduct.Provider>
    </>
  );
};
export default ProductList;
