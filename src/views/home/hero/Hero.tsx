import React from "react";
import ButtonOutline from "../../../components/common/ButtonOutline";
import TrustBrand from "./trust-brand/TrustBrand";

function Hero() {
  return (
    <main className="container">
      <div className="flex md:flex-row md:gap-0 gap-4 flex-col-reverse items-center py-5">
        <div className="md:w-[55%] text-center md:text-left" data-aos="fade-right">
          <h1 className="font-bold text-[40px] sm:text-[50px] leading-[1.2] lg:text-2xl text-primary-850 mb-3">
          <span className="bg-linear linear-text">Asset</span> and <span className="bg-linear linear-text">liquidity</span> management
          </h1>
          <p className="mb-4 md:w-[80%]">
          Unlock a new world of decentralized finance utilizing on-chain indexes to create fully collateralized baskets, making it easy for anyone to trade an entire portfolio in a single transaction.
          </p>
          <ButtonOutline to="gitbook">Learn More</ButtonOutline>
        </div>
        <div className="md:w-[45%]" data-aos="fade-left">
          <div style={{padding: "10%"}}>
            <img className="md:scale-[1.2575]" src="/images/Group 51.png" alt="" />
          </div>
        </div>
      </div>
      <div className="mt-12 pb-10">
        {/*<TrustBrand />*/}
      </div>
    </main>
  );
}

export default Hero;
