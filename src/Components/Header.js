import React from "react";
import "../App.css";

const Header = () => {
  const Header = "Shop Bazar";
  
const handleToCartModal = (e) => {
  e.preventDefault();
}

  return (
    <>
      <div className="Header">
        <div className="Cart_Logo">
          <img
            alt="Logo"
            src="https://www.pngall.com/wp-content/uploads/5/Empty-Red-Shopping-Cart-PNG.png"
            className="Image_Add_To_cart"
          />
          <a   href="/" className="Count" name="Add_to_cart" addToCart={handleToCartModal}>
            0
          </a>
          
          <img className="shop" 
          src="https://static.vecteezy.com/system/resources/previews/019/787/139/original/store-icon-in-flat-design-style-retail-shop-signs-illustration-png.png" />
        </div>
        <h2 className="shop_Bazar">{Header}</h2>
      </div>
    </>
  );
};

export default Header;
