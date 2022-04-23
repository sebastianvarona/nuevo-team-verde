import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function LandingLayout(props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
