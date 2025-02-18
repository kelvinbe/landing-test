import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Landing/HomePage.tsx";
import UsersContextProvider from "./context/UsersContext.tsx";
import UsersProfilePage from "./pages/Landing/UserProfilesPage.tsx";
import PostsContextProvider from "./context/PostsContext.tsx";
import PostsPage from "./pages/Landing/PostsPage.tsx";
import CommentViewPage from "./pages/Landing/CommentsViewPage.tsx";
import Register from "./pages/Auth/Register.tsx";

// Browser router creation to aid with navigation in the application

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/users",
    element: <UsersProfilePage />,
  },
  {
    path: "/posts",
    element: <PostsPage />,
  },
  {
    path: "posts/:postsId",
    element: <CommentViewPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UsersContextProvider>
      <PostsContextProvider>
        <RouterProvider router={router} />
      </PostsContextProvider>
    </UsersContextProvider>
  </StrictMode>
);
