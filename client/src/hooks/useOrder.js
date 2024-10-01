import { useState } from "react";
import toast from "react-hot-toast";

const useOrder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const order = async ({ name, toppings, quantity, customerNo }) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/order/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          toppings,
          quantity,
          customerNo,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to place the order");
      }
      
      setSuccess(data.message); 
      toast.success("Order placed successfully!");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    order,
    loading,
    error,
    success,
  };
};

export default useOrder;
