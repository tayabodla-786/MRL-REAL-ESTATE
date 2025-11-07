import React from 'react';
import {Outlet} from "react-router-dom";
import ScrollRestoration from './ScrollRestoration.jsx';

const MainLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default MainLayout
