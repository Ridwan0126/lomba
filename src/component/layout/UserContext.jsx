import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    firstName: "Ahmad",
    lastName: "Mulyono",
    role: "Admin",
    profileImage: "/Avatar.svg?height=96&width=96",
  });

  const updateUserProfile = (newData) => {
    setUserProfile((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <UserContext.Provider value={{ userProfile, updateUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
