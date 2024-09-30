import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useUserOperations = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  // Fetch users from the database
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/user/get-users");
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch users");
      }
      setUsers(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Add a new user
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
      // Add user to the existing list of users
      setUsers((prevUsers) => [...prevUsers, data]);

      toast.success("User added successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Delete a user
  const deleteUser = async (userId) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/user/delete/${userId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to delete user");
      }

      // Update the users state after deletion
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users on component mount
  }, []);

  return { loading, users, addUser, deleteUser };
};

export default useUserOperations;
