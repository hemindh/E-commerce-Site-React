import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

const Modal = () => {

     const [data , setData] = useState([]);

     useEffect(() => {
        axios
          .get("https://fakestoreapi.com/products")
          .then((res) => {
            console.log(res);
            setData(res.data);
          })
          
      }, []);

      const removeToCart = (id) => {
        const NewArray = data.filter(product => product.id !== id);
        setData(NewArray)
      }
    
  let message = "Your Ordered is Delivered Successfully !!!";

  const handleSuccess = () => {
    alert(`${message}`);
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
         <div className="modal-dialog"> 
           <div className="modal-content"> 
             <div className="modal-header"> 
              {/* <h5 style={{color : "black" , fontWeight : "bold"}}>Total Price :</h5> <h3 className="modal-title" style={{color:"red" , fontWeight : "bold"}}>$0.00</h3> */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{color : "black"}}>
            {data &&
            data.map((product) => (
              <>
                <div className="P_main_container" key={product.id}>
                    {/* <h4 className="P_category">{product.category}</h4>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="title"
                      id="P_image"
                    />
                    <div className="card-body">
                      <h5 className="P_rate">Rating : {product.rating.rate}</h5>
                      <h5 className="card-title">{product.title}</h5>
                      <span className="P_price">Price : ${product.price} </span>
                      <br />
                      <button
                        className="btn btn-success"
                        style={{backgroundColor : "red" , border : '3px solid white' , color : "black"}}
                        onClick={() => removeToCart(product.id)}
                      >
                        Remove to Cart
                      </button> */}
                    {/* </div> */}
                  </div>
              </>
            ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleSuccess}
              >
                Order
              </button>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default Modal;
