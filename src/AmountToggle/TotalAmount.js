import React from "react";
import "../App.css";

const TotalAmount = ({totalPrice}) => {

  return (
    <>
        
            <>
            <div className="Total_amount_price">

              <h4 className="Product_price_total">
                Total Amount :
                <span className="Total_value">
                  ${totalPrice}
                </span>
              </h4>
            </div>
            </>
    </>
  );
};

export default TotalAmount;
