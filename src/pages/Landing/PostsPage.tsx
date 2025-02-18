import React, { useEffect, useContext, useState } from "react";
import Header from "../../Components/Organisms/Header";
import { UsersContext } from "../../context/UsersContext";
import { PostsComponent } from "../../Components/styles/Header.styled";
import { PostsContext } from "../../context/PostsContext";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

const PostsPage = () => {
  const { posts, getPosts } = useContext(PostsContext);
  const navigate = useNavigate();
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    if (posts.length < 1) {
      getPosts();
    } else {
      console.log(posts);
      setLoading(false);
    }
  }, [posts]);

  console.log("posts", posts);

  const handleClickedPost = (id) => {
    navigate(`/posts/${id}`, { state: { key: id } });
  };

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
        <h2>All Posts</h2>
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
          posts.map((post) => {
            return (
              <PostsComponent onClick={() => handleClickedPost(post.userId)}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                  }}
                >
                  <div>Gender: {post?.title}</div>
                </div>
              </PostsComponent>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PostsPage;
