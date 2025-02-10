import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

function Success() {
  // State to manage loading animation
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating order processing delay
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Show loader while processing */}
      {loading ? (
        <PropagateLoader color="rgba(69, 42, 69, 1)" />
      ) : (
        // Success message after loading completes
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Order Successfully Placed!
          </h2>
          <p className="text-lg text-gray-600">
            Thank you for your purchase. Your order has been confirmed.
          </p>
        </div>
      )}
    </div>
  );
}

export default Success;
