import { useState } from "react";
import toast from "react-hot-toast";

const useOrder = () => {
  const [loading, setLoading] = useState(false);

  const order = async ({ customerId, pizzaId, restaurantId, status }) => {
    setLoading(true);
    try {
      const res = await fetch("api/order/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerId,
          pizzaId,
          restaurantId,
          status
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, order };
};

export default useOrder;
