import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <h2 style={{ color: "red" }}>Layout Loaded ✅</h2>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
