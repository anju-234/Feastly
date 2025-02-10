import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import Itemcard from './Itemcard';
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full md:w-[50vw] lg:w-[30vw] xl:w-[25vw] h-full p-5 bg-white shadow-lg transform ${activeCart ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 z-50`}
      >
        <div className='flex justify-between items-center my-3'>
          <span className='text-xl font-bold text-gray-800'>My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer'
          />
        </div>

        <div className='overflow-y-auto max-h-[70vh] px-2'>
          {cartItems.length > 0 ? (
            cartItems.map((food) => <Itemcard key={food.id} {...food} qty={food.qty} />)
          ) : (
            <h2 className='text-center text-xl font-bold text-gray-400 '>Your cart is empty</h2>
          )}
        </div>

        <div className='absolute bottom-0 w-full bg-white p-4 shadow-md'>
          <h3 className='font-semibold text-gray-800 '>Items: {totalQty}</h3>
          <h3 className='font-semibold text-gray-800 '>Total Amount: ${totalPrice.toFixed(2)}</h3>
          <hr className='my-2' />
          <button
            onClick={() => navigate('/success')}
            className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-full hover:bg-green-600 transition'
          >
            Checkout
          </button>
        </div>
      </div>

      <FaCartShopping
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 cursor-pointer ${totalQty > 0 ? "animate-bounce delay-500 transition-all duration-500" : ""}`}
      />
    </>
  );
}

export default Cart;
