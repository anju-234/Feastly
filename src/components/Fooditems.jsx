import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/fooddata";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function Fooditems() {
  // Get selected category from Redux store
  const categories = useSelector((state) => state.category.category);

  // Get search query from Redux store
  const search = useSelector((state) => state.search.search);

  // Function to show a toast notification when an item is added to the cart
  const handleToast = (name) => {
    toast.success(`Added ${name} to cart`);
  };

  return (
    <>
      {/* Toaster component for displaying toast notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Container for food items, ensuring responsive layout */}
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {
          // Filtering food data based on selected category and search query
          FoodData.filter((food) => {
            if (categories === "All") {
              return food.name.toLowerCase().includes(search.toLowerCase());
            } else {
              return (
                categories === food.category &&
                food.name.toLowerCase().includes(search.toLowerCase())
              );
            }
          }).map((food) => (
            // Rendering FoodCard component for each filtered food item
            <FoodCard key={food.id} {...food} handleToast={handleToast} />
          ))
        }
      </div>
    </>
  );
}

export default Fooditems;
