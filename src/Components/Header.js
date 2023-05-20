//Header Component ........................




import React, { useContext } from "react";
import { cartProduct } from "./ProductList";


const Header = () => {
  const Heading = "Shopping Bazar";

  const {cartList, setCartList} = useContext(cartProduct)


  return (
    <>
      <cartProduct.Provider value={{ cartList, setCartList }}>
        <div className="Header">
          <div
            className="Cart_Logo"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <img
              alt="Logo"
              src="https://www.pngall.com/wp-content/uploads/5/Empty-Red-Shopping-Cart-PNG.png"
              className="Image_Add_To_cart"
            />

            <button href="/" className="Count">
              {cartList.length}
            </button>
            <img
              alt="title"
              className="shop"
              src="https://static.vecteezy.com/system/resources/previews/019/787/139/original/store-icon-in-flat-design-style-retail-shop-signs-illustration-png.png"
            />
          </div>
          <h2 className="shop_Bazar">{Heading}</h2>
        </div>
      </cartProduct.Provider>
    </>
  );
};

export default Header;
