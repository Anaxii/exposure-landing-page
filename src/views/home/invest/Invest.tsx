import React from "react";
import EmailForm from "./EmailForm";
import invest from "./invest.json";
import InvestItem from "./InvestItem";
import ButtonOutline from "../../../components/common/ButtonOutline";

function Invest() {
  return (
    <section className="bg-section-invest">
      <div className="container">
        <header className="text-center mb-20 md:mb-[106px]">
          <h2 className="mb-5 font-semibold text-xl text-primary-850">How to invest</h2>
          <p className="mx-auto sm:w-[55%]">
            Exposure baskets are represented by basket shares. You can create, redeem, or trade basket shares at any time.
          </p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {invest.map(({ id, ...rest }, index) => (
            <InvestItem key={id} {...rest} even={index % 2 === 0} />
          ))}
        </div>
        <div style={{padding: "2rem"}}/>
        {/*<div className="sm:translate-y-[50%] translate-y-[30%] mb-48 sm:mb-56 md:mb-[270px]">*/}
          {/*<div className="bg-email-subscription bg-center bg-cover rounded-[30px] text-white pt-12 md:pt-[76px] pb-12 md:pb-[69px] px-4">*/}
          {/*  <div className="text-center">*/}
          {/*    <h2 data-aos="fade-up" className="mb-2 text-xl font-semibold">*/}
          {/*      Want to get involved?*/}
          {/*    </h2>*/}
          {/*    <p*/}
          {/*      data-aos="fade-up"*/}
          {/*      data-aos-duration="700"*/}
          {/*      className="mb-9 mx-auto md:w-[75%] lg:w-[55%]"*/}
          {/*    >*/}
          {/*      Contact our team through any of our social media channels.*/}
          {/*    </p>*/}
          {/*  </div>*/}
            {/*<div data-aos="fade-up" data-aos-duration="900">*/}
            {/*  <EmailForm />*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}

export default Invest;
