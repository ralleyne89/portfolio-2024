import React from "react";
import Navbar from "./Navbar";
import {Footer} from "./Footer";

const Layout = ({ children, style }) => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={{ ...style }}
    >
      <Navbar />
     {children}
     <Footer />
    </div>
  );
};

export default Layout;