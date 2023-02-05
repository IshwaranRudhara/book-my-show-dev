import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar.Component";
// import Footer from "../components/Footer/Footer.component";
const DefaultLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default DefaultLayoutHoc;
