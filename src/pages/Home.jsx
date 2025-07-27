import React from "react";
import Hero from "../components/Hero";
import Upcoming from "../components/Upcoming";
import Create from "../components/Create";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const {isLoggedIn} = useOutletContext();
  return (
    <div>
      <Hero />
      <Upcoming/>
      {isLoggedIn && <Create/>}
    </div>
  );
};

export default Home;
