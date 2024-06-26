import React from "react";
import Banner from "../../components/Banner/Banner";
import Testimonials from "./Testimonials";
import Contents from "./Contents";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <Testimonials />
      <Contents />
    </div>
  );
};

export default Home;
