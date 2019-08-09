import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <Hero>
      <Banner
        title="Luxurious and confortable rooms"
        subtitle="deluxe room starting at $199"
      >
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default home;