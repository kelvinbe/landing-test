import React, { createContext, useState } from "react";

/**
 * Create Posts Context to aid with pulling the data from the api
 */
export const PostsContext = createContext();

const url = "https://jsonplaceholder.typicode.com/posts";

// Fetch user posts from API
// Endpoint: GET /api/posts
// Posts Context Provider creation

export default function PostsContextProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const posts = await response.json();

      setPosts(posts);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <PostsContext.Provider value={{ getPosts, posts }}>
      {children}
    </PostsContext.Provider>
  );
}
