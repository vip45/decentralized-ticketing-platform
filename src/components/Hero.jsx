import React from "react";
import HeroImg from "../assets/con6.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="hero-section d-flex justify-content-center align-items-center text-center"
      style={{
        backgroundImage: `url(${HeroImg})`,
        height: "600px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content">
        <h1 className="text-white ">Discover & Book Amazing Events</h1>
        <p className="text-white ">
          Explore concerts, meetups, workshops, and more. Your next experience
          starts here.
        </p>
        <button onClick={() => navigate("/events")}>Explore Events</button>
      </div>
    </div>
  );
};

export default Hero;
