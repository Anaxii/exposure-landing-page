import React from "react";
import ButtonContained from "../../components/common/ButtonContained";

function About() {
  return (
    <section className="container mt-28 mb-32">
      <div className="md:grid flex flex-col-reverse md:grid-cols-2 text-center md:text-left gap-10 items-center">
        <div data-aos="fade-right">
          <img className="w-full mx-auto md:mx-0 max-w-[500px]" src="/images/Group 52.svg" alt="" />
        </div>
        <div data-aos="fade-left" className="flex flex-col gap-2 -mt-7">
          <h2 className="font-semibold text-xl text-primary-850">Exposure Principles</h2>
          <p className="mb-2 lg:w-[85%]">
          Exposure prides itself on promoting three key components Market Sustainability, Instant Diversification, and uniquely Investor Education.
          </p>
          <div>
            <ButtonContained to="gitbook">Read More</ButtonContained>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
