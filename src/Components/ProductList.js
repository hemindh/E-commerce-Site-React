import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const ProductList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        //    console.log(err);
      });
  }, []);


  const addToCart = (id) => {
    
    console.log("Product Id :-" , id);
    
    
  }

  return (
    <>
      <div className="App">
        <div className="p_heading">
          {loading && <div>❤️‍🔥↻ Loading......</div>}
        </div>

        {error && (
          <div style={{color:"red"}}>{`There is a problem fetching the post data - ${error}`}</div>
        )}

        <ul className="Product_main_container">
          {data &&
            data.map((product) => (
              <>
                <div className="P_main_container">
                  <div key={product.id} className="Products_List">
                    <h4 className="P_category">{product.category}</h4>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="title"
                      id="P_image"
                    />
                    <div className="card-body">
                      <h5 className="P_rate">Rating : {product.rating.rate}</h5>
                      <h5 className="card-title">{product.title}</h5>
                      <span className="P_price">Price : {product.price} $</span>
                      <br />
                      <button
                        className="btn btn-success"
                        onClick={() => addToCart(product)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </ul>
      </div>
    </>
  );
};
export default ProductList;
