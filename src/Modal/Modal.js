import React, { useContext } from "react";
import "../App.css";
import { cartProduct } from "../Components/ProductList";


const Modal = () => {

  
  
  const {cartList, setCartList} = useContext(cartProduct)
  
  const DeleteItem = (id) => {
    console.log({cartList, id});
    const NewArray = cartList.filter(items => items.id !== id);
    console.log("newArray", NewArray
    );
    setCartList(NewArray);
   }


  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h5 style={{color : "black" , fontWeight : "bold"}}> Price :</h5> <h3 className="modal-title" style={{color:"red" , fontWeight : "bold"}}>$0.00</h3> */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ color: "black" }}>
           

             <table>
          <thead
            style={{
              width: "100%",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <th style={{padding : "5px"}}>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th style={{width : "175px" , color : "red"}}>Remove the Product</th>
          </thead>
          
            {cartList &&
            cartList.map((product, i) => (
              
              
              <tr key={product.id} style={{backgroundColor : "Lightgray" }}>
              <td style={{padding : '16px' , textAlign : "center"}}>{product.id}</td>
              <td style={{padding : '16px' , textAlign : "center"}}>{product.title}</td>
              <td style={{padding : '16px' , textAlign : "center" , color : "red" , fontWeight : "900"}}>${product.price}</td>
              <td>

              <button onClick={() => DeleteItem(product.id)} type="button" className="btn btn-danger">Remove to cart</button>
              </td>
              </tr>
              
              ))}
            </table> 
          
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
