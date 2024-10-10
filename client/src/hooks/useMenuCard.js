import { useState } from "react";
import toast from "react-hot-toast";

const useMenuCard = () => {
  const [loading, setLoading] = useState(false);

  const addMenuItem = async ({ name, price, toppings, image }) => {
    setLoading(true);
    try {
      // Retrieve user data from localStorage
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user || !user.restaurantId) {
        console.log(user);
        throw new Error("Restaurant ID not found in localStorage");
      }

      const restaurantId = user.restaurantId; // Extract restaurantId

      console.log("Restaurant ID: ", restaurantId); // Log to ensure it's being retrieved correctly

      // Create FormData object to handle image file and other data
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("restaurantId", restaurantId);
      toppings.forEach((topping) => {
        formData.append("topping[]", topping);
      });
      if (image) {
        formData.append("image", image); // Append image if available
      }

      // Send the data to the server
      const res = await fetch("https://pizza-ordering-service-api.vercel.app/api/pizza/upload-pizza", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Pizza added successfully!");
    } catch (error) {
      console.error("Error adding pizza: ", error);
      toast.error(error.message || "Failed to add pizza");
    } finally {
      setLoading(false);
    }
  };

  return { loading, addMenuItem };
};

export default useMenuCard;
