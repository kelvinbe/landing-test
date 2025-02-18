import React, { useEffect, useContext, useState } from "react";
import Header from "../../Components/Organisms/Header";
import { PostsComponent } from "../../Components/styles/Header.styled";
import { PostsContext } from "../../context/PostsContext";
import HashLoader from "react-spinners/HashLoader";

const HomePage = () => {

    // Loading state and pulling post values from PostsContext
  const { posts, getPosts } = useContext(PostsContext);
  let [loading, setLoading] = useState(true);

  // Using useEffect to aid with checking if posts have been loaded if not we simply call the getPosts function

  useEffect(() => {
    if (posts?.length < 1) {
      getPosts();
    } else {
      console.log(posts);
      setLoading(false);
    }
  }, [posts]);

  console.log("posts", posts);

  // Return the posts component and header aligning and stacking up the components as should be

  return (
    <div
      style={{
        backgroundColor: "#6A1B9A",
        width: "100%",
        height: "100vh",
        overflowX: "scroll",
        // overflowY: "hidden",
      }}
    >
      <Header />
      <div
        style={{ display: "flex", justifyContent: "center", color: "white" }}
      > 

        <h2>Welcome to the Landing</h2>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", color: "white" }}
      >
        <h3>Latest Posts</h3>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {loading ? (
          <HashLoader
            color={"white"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          posts.slice(0, 30).map((post) => {
            return (
              <PostsComponent>
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
          })
        )}
      </div>
    </div>
  );
};

export default HomePage;
