import React, { useEffect, useContext } from "react";
import Header from "../../Components/Organisms/Header";
import { PostsComponent } from "../../Components/styles/Header.styled";
import { PostsContext } from "../../context/PostsContext";
import { useLocation } from "react-router-dom";

const CommentViewPage = () => {

    // Pulling values from posts context and calling useLoacation so i can use it in getting state key to filter
  const { posts, getPosts } = useContext(PostsContext);
  let location = useLocation();



  useEffect(() => {}, [location]);

  // Logging posts and location for data break down

  console.log("posts", posts);
  console.log("location", location);

  // Displaying specific post and filtering by specific location sate.

  return (
    <div
      style={{
        backgroundColor: "#6A1B9A",
        width: "100%",
        height: "100vh",
        overflow: "scroll",
        // padding: '15px 20px'
      }}
    >
      <Header />
      <div
        style={{ display: "flex", justifyContent: "center", color: "white" }}
      >
        <h2>Posts Detailed View</h2>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", color: "white" }}
      >
        <h2>Posts Belonging to user {location?.state?.key}</h2>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        
        {posts
          ?.filter((po) => po.userId === location?.state?.key)
          .map((post) => {
            return (
              <PostsComponent key={post.userId}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ color: "white" }}>Title: {post?.title}</div>
                </div>
              </PostsComponent>
            );
          })}
      </div>
    </div>
  );
};

export default CommentViewPage;
