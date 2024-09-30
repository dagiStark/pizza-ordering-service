import { useState } from "react";
import toast from "react-hot-toast";

const useAddRole = () => {
  const [loading, setLoading] = useState(false);

  const addRole = async ({ roleName, permissions }) => {
    setLoading(true);
    try {
      const res = await fetch("/api/roles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roleName,
          permissions,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      toast.success("Role added successfully");
      return data; // Return the added role data
    } catch (error) {
      toast.error(error.message);
      return null; // Return null in case of an error
    } finally {
      setLoading(false);
    }
  };

  return { loading, addRole };
};

export default useAddRole;
