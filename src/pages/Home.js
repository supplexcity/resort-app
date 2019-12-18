import React from "react";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Hero from "../components/Hero";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services title="services" />
      <FeaturedRooms />
    </React.Fragment>
  );
};

export default Home;
