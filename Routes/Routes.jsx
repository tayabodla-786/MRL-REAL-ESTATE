import React from 'react'
import Home from '../src/pages/Home'
import Blogs from '../src/pages/Blogs'
import BlogDetails from '../src/pages/BlogDetails'
import Contact from '../src/pages/Contact'
import PageNotFound from '../src/pages/PageNotFound'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../src/components/MainLayout";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/blog", element: <Blogs /> },
        { path: "/blog/:id", element: <BlogDetails /> },
        { path: "/contact-us", element: <Contact /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
