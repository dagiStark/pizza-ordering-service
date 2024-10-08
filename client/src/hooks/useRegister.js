import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const register = async ({
    name,
    location,
    superAdmin,
    email,
    password,
    confirmPassword,
    phoneNo,
  }) => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    setLoading(true);
    try {
      const res = await fetch("https://pizza-ordering-service-api.vercel.app/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          location,
          superAdmin,
          email,
          password,
          confirmPassword,
          phoneNo,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("user", JSON.stringify(data));
      setAuthUser(data);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, register };
};

export default useRegister;
