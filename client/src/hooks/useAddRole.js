import { useState } from "react";
import toast from "react-hot-toast";

const useAddRole = () => {
  const [loading, setLoading] = useState(false);

  const addRole = async ({ roleName, permissions, active = true }) => {
    setLoading(true);
    try {
      const res = await fetch("https://pizza-ordering-service-api.vercel.app/api/role/create-role", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roleName,
          permissions,
          active,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to add role");
      }

      toast.success("Role added successfully");
      return data;
    } catch (error) {
      toast.error(error.message || "An error occurred while adding role");
    } finally {
      setLoading(false);
    }
  };

  return { addRole, loading };
};

export default useAddRole;
