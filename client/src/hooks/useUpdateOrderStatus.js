import { useState } from "react";

const useUpdateOrderStatus = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateOrderStatus = async (orderId, newStatus) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://pizza-ordering-service-api.vercel.app/api/order/update-order/${orderId}`, {
        method: "PATCH", // PATCH to update part of the resource
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update order status");
      }

      const updatedOrder = await response.json();
      return updatedOrder;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { updateOrderStatus, loading, error };
};

export default useUpdateOrderStatus;
