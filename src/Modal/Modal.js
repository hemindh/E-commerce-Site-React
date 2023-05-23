import React, { useContext, useState } from "react";
import "../App.css";
import { cartProduct } from "../Components/ProductList";
import AmountToggle from "../AmountToggle/AmountToggle";
import TotalAmount from "../AmountToggle/TotalAmount";

const Modal = () => {
  const { cartList, setCartList } = useContext(cartProduct);
  const [amount, setAmount] = useState(1);
  let totalPrice = 0;

  const DeleteItem = (id) => {
    console.log("cartList", cartList);
    console.log("id", id);
    const NewArray = cartList.filter((items) => items.id !== id);
    console.log("newArray", NewArray);
    setCartList(NewArray);
  };

  const setIncrease = (product) => {
    console.log("clicking the product" , product.id)
    setAmount(amount + 1);
  };

  const setDecrease = (product) => {
    console.log("clicking - product" , product.id)
    setAmount(amount > 1 ? amount - 1 : amount);
  };

  return (
    
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h3 style={{ color: "black", fontWeight: "bold" }}>Cart_Items</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ color: "black" }}>
              <table>
                <thead className="table_head">
                  <th style={{ padding: "5px" }}>Id</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th style={{ width: "175px", color: "black" }}>
                    Remove the Product
                  </th>
                </thead>

                {cartList &&
                  cartList.map((product, i) => {
                    totalPrice += product.price * amount
                  return (
                    
                    
                      <tr key={i + 1} className="table_container">
                        <td className="P_id">{i + 1}</td>
                        <img
                          className="P_image"
                          src={product.image}
                          alt="title"
                        />
                        <td className="title">{product.title}</td>
                        <td>
                          <td>
                            <AmountToggle
                              amount={amount}
                              setDecrease={() => setDecrease(product)}
                              setIncrease={() => setIncrease(product)}
                            />
                          </td>
                        </td>
                        <td className="P_price_value">
                          ${product.price.toFixed(2) * amount}
                        </td>
                        <td>
                          <button
                            onClick={() => DeleteItem(product.id)}
                            type="button"
                            className="btn btn-danger"
                          >
                            Remove to cart
                          </button>
                        </td>
                      </tr>
                    
                    )})}
              </table>

                    <hr />
             
              <TotalAmount   totalPrice={totalPrice}  />
              
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
