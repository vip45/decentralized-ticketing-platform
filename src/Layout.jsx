import React, { useState } from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div>
        <Outlet context={{isLoggedIn}} />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
