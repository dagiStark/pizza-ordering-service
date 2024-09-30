import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useFetchRoles = () => {
  const [roles, setRoles] = useState([]); // Remove TypeScript type definition
  const [loading, setLoading] = useState(true);

  const fetchRoles = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/role/get-roles");
      const data = await response.json(); // Remove TypeScript type definition

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch roles");
      }

      setRoles(data);
    } catch (error) {
      toast.error(error.message || "An error occurred while fetching roles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return { roles, loading, fetchRoles };
};

export default useFetchRoles;
