import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  // Custom hook
  useGetOtherUsers();

  const { OtherUsers = [] } = useSelector(store => store.user); // Default to empty array

  console.log(typeof OtherUsers); // Debug: check the type
  console.log(Array.isArray(OtherUsers)); // Debug: check if it's an array

  if (!Array.isArray(OtherUsers)) {
    return; // Fallback UI if not an array
  }

  return (
    <div className="overflow-auto flex-1">
      {OtherUsers.map(user => (
        <OtherUser key={user._id} user={user} />
      ))}
    </div>
  );
};

export default OtherUsers;
