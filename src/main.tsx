import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/Landing/HomePage.tsx';
import UsersContextProvider from './context/UsersContext.tsx';
import UsersProfilePage from './pages/Landing/UserProfilesPage.tsx';
import PostsContextProvider from './context/PostsContext.tsx';
import PostsPage from './pages/Landing/PostsPage.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <HomePage />,
    
  },
  {
    path: '/users',
    element: <UsersProfilePage />
    },
    {
      path: '/posts',
      element: <PostsPage />
      }

  
]);
















createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UsersContextProvider>
      <PostsContextProvider>
    <RouterProvider router={router}/>
    </PostsContextProvider>
    </UsersContextProvider>
  </StrictMode>,
)
