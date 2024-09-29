import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext"; // Import your auth context for authUser

const useMenuCard = () => {
  const { authUser } = useAuthContext(); // Fetch logged-in user data
  const [loading, setLoading] = useState(false);

  const uploadPizza = async ({ name, price, toppings, image }) => {
    setLoading(true);
    try {
      const restaurantId = authUser?.restaurantId; // Extract restaurantId from the logged-in user

      if (!restaurantId) {
        throw new Error("Restaurant ID not found.");
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("restaurantId", restaurantId);
      formData.append("topping", JSON.stringify(toppings));

      if (image) {
        formData.append("image", image); // Add image to form data
      }

      const res = await fetch("/api/pizza/upload-pizza", {
        method: "POST",
        body: formData, // Send as form data
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      toast.success("Pizza added successfully!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { uploadPizza, loading };
};

export default useMenuCard;
