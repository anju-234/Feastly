// import React from 'react'
// import { AiFillStar } from "react-icons/ai";
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/slices/CartSlice';



// function FoodCard({id,img,name,price,desc,rating,handleToast}) {

//   const dispatch=useDispatch();


//   return (
//     <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2'>
//      <img className='w-auto h-[130px]  
//        hover:scale-110 cursor-grab transition-all duration-500 ease-in-out ' src={img} alt="food image" />
//      <div className='text-sm flex justify-between'>
//         <h2>{name}</h2>
//         <span className='text-green-500'> ₹ {price}</span>
//      </div>
//      <p className='text-sm font-normal '>{desc.slice(0,50)}...</p>
//      <div className='flex justify-between'>
//         <span className='flex justify-center items-center '>
//         <AiFillStar  className='mr-1 text-yellow-400'/> {rating}
//         </span>
//         <button onClick={()=>{dispatch(addToCart({id,name,price,rating,img,qty:1}));
//       handleToast(name);}} className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>Add to cart</button>
//      </div>
//     </div>
//   )
// }

// export default FoodCard
import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';

function FoodCard({ id, img, name, price, desc, rating, handleToast }) {
  const dispatch = useDispatch();

  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2 shadow-md h-[320px] overflow-hidden'>
      {/* Adjusted image to remove extra background */}
      <div className="w-full h-[150px] rounded-md overflow-hidden">
        <img 
          className='w-full h-full object-cover hover:scale-110 cursor-pointer transition-transform duration-500 ease-in-out' 
          src={img} 
          alt="food image" 
        />
      </div>

      <div className='text-sm flex justify-between items-center'>
        <h2 className='text-base'>{name}</h2>
        <span className='text-green-500 text-sm font-semibold whitespace-nowrap'>₹ {price}</span>
      </div>
      
      {/* Fixed height for description to ensure consistent card height */}
      <p className='text-sm font-normal text-gray-600 h-[48px] overflow-hidden'>{desc.slice(0, 50)}...</p>
      
      {/* Ensuring price and button align properly */}
      <div className='flex justify-between items-center mt-auto'>
        <span className='flex items-center text-sm'>
          <AiFillStar className='mr-1 text-yellow-400'/> {rating}
        </span>
        <button 
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
            handleToast(name);
          }} 
          className='p-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;

