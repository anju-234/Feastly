import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

function FoodCard({ id, img, name, price, desc, rating, handleToast }) {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2 shadow-md h-[320px] overflow-hidden">
      {/* Image container to prevent extra background and maintain aspect ratio */}
      <div className="w-full h-[150px] rounded-md overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-110 cursor-pointer transition-transform duration-500 ease-in-out"
          src={img}
          alt="food image"
        />
      </div>

      {/* Food name and price section */}
      <div className="text-sm flex justify-between items-center">
        <h2 className="text-base">{name}</h2>
        <span className="text-green-500 text-sm font-semibold whitespace-nowrap">
          ₹ {price}
        </span>
      </div>

      {/* Fixed height for description to ensure all cards have uniform height */}
      <p className="text-sm font-normal text-gray-600 h-[48px] overflow-hidden">
        {desc.slice(0, 50)}...
      </p>

      {/* Rating and Add to Cart button section */}
      <div className="flex justify-between items-center mt-auto">
        {/* Displaying rating with a star icon */}
        <span className="flex items-center text-sm">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>

        {/* Add to Cart button with Redux dispatch */}
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
            handleToast(name); // Show toast notification
          }}
          className="p-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
