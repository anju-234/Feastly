import React, { useEffect, useState } from 'react'
import FoodData from '../data/fooddata';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';




function Category() {

  const [categories, setCategories] = useState([]);

  const listUniqueCategories=()=>{
      const uniqueCategories=[
        ...new Set(FoodData.map((food)=>food.category))
      ]
      setCategories(uniqueCategories);
      console.log(uniqueCategories); ['Lunch','Breakfast','Dinner','Snacks']
  }


  useEffect(() => {
     listUniqueCategories();
  }, [])

  const dispatch=useDispatch();
  const selectedCategory=useSelector((state)=>state.category.category);
  


  return (
    <div className='mx-4 md:mx-6 lg:mx-8 xl:mx-10 '>
    <h3 className='text-lg md:text-xl font-semibold'>Find the best food</h3>
    <div className='my-5 flex gap-3 overflow-x-auto md:overflow-x-hidden whitespace-nowrap scrollbar-hide '>
    <button onClick={()=>dispatch(setCategory('All'))}  className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory==="All" && "bg-green-500 text-white" }`}>
        All
      </button>
       
       {
        categories.map((category,index)=>(
          <button onClick={()=>dispatch(setCategory(category))} key={index} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory===category && "bg-green-500 text-white" }`}>
         {category}
      </button>
        ))
       }
    </div>

    </div>
  )
}

export default Category