import React, { createContext, useState } from "react";

/**
 * Create Users Context to aid with pulling users data from the api
 */

export const UsersContext = createContext();

const url = "https://randomuser.me/api/";


// Fetch user from API
// Endpoint: GET /api/posts
// Users Context Provider creation

export default function UsersContextProvider({ children }) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        console.log("error", response.status);
      }
      const users = await response.json();

      setUsers(users?.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <UsersContext.Provider value={{ users, getUsers }}>
      {children}
    </UsersContext.Provider>
  );
}
