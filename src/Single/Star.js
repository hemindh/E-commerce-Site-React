import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ value }) => {
  // console.log("val" , value)  //Here we get the star rating value in console

  const ratingStar = Array.from({ length: 5 }, (ele, index) => {
    let number = index + 0.5; //suppose number is 2.4 , 3.4 then increase the 0.5
    //  debugger;  //using debugger can understand the star rating code...............
    return (
      <span key={index}>
        {value >= index + 1 ? (
          <FaStar className="icon" />
        ) : value >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });

  //Array.Form() :-
  // Generate a sequence of numbers
  // Since the array is initialized with `undefined` on each position,
  // the value of `v` below will be `undefined`
  // Array.from({ length: 5 }, (v, i) => i);
  // [0, 1, 2, 3, 4]

  return (
    <>
      <h5 className="star_icon">Rating : {ratingStar}</h5>
    </>
  );
};

export default Star;
