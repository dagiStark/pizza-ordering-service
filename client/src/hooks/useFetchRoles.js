import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useFetchRoles = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRoles = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/role/get-roles"); // Fetch from your backend API
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch roles");
      }

      setRoles(data); // Assume the API returns an array of roles
    } catch (error: any) {
      toast.error(error.message || "An error occurred while fetching roles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles(); // Fetch roles when the component mounts
  }, []);

  return { roles, loading, fetchRoles };
};

export default useFetchRoles;
