import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

function Itemcard({ id, name, qty, price, img }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3 relative">
        {/* Delete button to remove item from cart */}
        <MdDelete
          onClick={() => {
            dispatch(removeFromCart({ id, img, name, price, qty }));
            toast(`${name} Removed!`);
          }}
          className="absolute right-7 text-gray-600 cursor-pointer"
        />

        {/* Product image */}
        <img className="w-[50px] h-[50px]" src={img} alt="item-img" />

        <div className="leading-5 flex-1">
          {/* Product name */}
          <h2 className="font-bold text-gray-800">{name}</h2>

          <div className="flex justify-between items-center">
            {/* Price display */}
            <span className="text-green-500 font-bold">₹{price}</span>

            {/* Quantity adjustment controls */}
            <div className="flex items-center gap-2 absolute right-7">
              <AiOutlineMinus
                onClick={() =>
                  qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
                }
                className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              />
              <span>{qty}</span>
              <AiOutlinePlus
                onClick={() =>
                  qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
                }
                className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Itemcard;
