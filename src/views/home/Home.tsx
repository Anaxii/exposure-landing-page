import React from "react";
import Footer from "../../components/global/footer/Footer";
import Navbar from "../../components/global/navbar/Navbar";
import About from "./About";
import Hero from "./hero/Hero";
import Invest from "./invest/Invest";
import Product from "./product/Product";
import Tools from "./tools/Tools";

function Home() {
  return (
    <div>
      <div className="bg-home-hero pt-32 md:pt-[168px]">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tools />
      <Product />
      <Invest />
    </div>
  );
}

export default Home;
