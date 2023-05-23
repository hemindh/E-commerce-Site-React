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
            
          >
            <img
              alt="Logo"
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2VzL3dlYnNpdGUvMjAyMy0wNC92OTMyLW5pbmctNTEucG5n.png?s=OjEaGbUsid6O2_ExVefK4f8xzZ03nj1DClhzKt_keR8"
              className="Image_Add_To_cart"
             
            />

            <button href="/" className="Count"  data-bs-toggle="modal"
            data-bs-target="#exampleModal">
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
