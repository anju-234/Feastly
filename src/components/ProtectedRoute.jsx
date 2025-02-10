import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element }) {
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.cart);

  // If the cart has items, allow access to the protected route
  // Otherwise, redirect the user to the home page
  return cartItems.length > 0 ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
