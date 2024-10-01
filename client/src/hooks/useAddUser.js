import { useState } from "react";
import toast from "react-hot-toast";

const useAddUser = () => {
  const [loading, setLoading] = useState(false); // Initialize loading as false

  const addUser = async (userDetails) => {
    const {
      fullName,
      email,
      password,
      confirmPassword,
      location,
      phoneNo,
      role,
      restaurantId,
    } = userDetails;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    setLoading(true); // Set loading to true at the start
    try {
      const res = await fetch("/api/user/add", {
        // Use relative path
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          password,
          confirmPassword,
          location,
          phoneNo,
          role,
          restaurantId: Number(restaurantId), // Ensure restaurantId is a number
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        // Check if response is not ok
        throw new Error(data.error || "Something went wrong");
      }
      toast.success("User added successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false); // Set loading to false after processing
    }
  };

  return { loading, addUser };
};

export default useAddUser;
