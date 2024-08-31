import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  // Custom hook
  useGetOtherUsers();

  const { otherUsers = [] } = useSelector(store => store.user); // Default to empty array

  console.log(typeof otherUsers); // Debug: check the type
  console.log(Array.isArray(otherUsers)); // Debug: check if it's an array

  if (!Array.isArray(otherUsers)) {
    return; // Fallback UI if not an array
  }

  return (
    <div className="overflow-auto flex-1">
      {otherUsers.map(user => (
        <OtherUser key={user._id} user={user} />
      ))}
    </div>
  );
};

export default OtherUsers;
