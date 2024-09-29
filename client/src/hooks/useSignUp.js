import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();

  const signUp = async ({
    fullName,
    email,
    password,
    confirmPassword,
    location,
    phoneNo,
    restaurantId,
  }) => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    setLoading(true);
    try {
      const res = await fetch("/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          password,
          confirmPassword,
          location,
          phoneNo,
          restaurantId,
        }),
      });

      const data = await res.json();
      if(data.error){
        throw new Error(data.error)
      }
      localStorage.setItem("user", JSON.stringify(data))
      setAuthUser(data)
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {loading, signUp};
};

export default useSignUp;
