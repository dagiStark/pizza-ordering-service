import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useAddUser = () => {
  const [loading, setLoading] = useState(true);

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

    setLoading(true);
    try {
      const res = await fetch("api/user/add", {
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
          restaurantId,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      toast.success("User added successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, addUser };
};

export default useAddUser;
