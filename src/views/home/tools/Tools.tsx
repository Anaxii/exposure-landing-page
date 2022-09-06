import React from "react";
import ToolsItem from "./ToolsItem";
import tools from "./tools.json";

function Tools() {
  return (
    <section className="bg-section-tools bg-cover section-tools relative pt-[70px] pb-24 mb-28 md:mb-40">
      <div className="container">
        <header className="text-white text-center mb-14">
          <h2 className="font-semibold text-xl mb-7">Our Ecosystem</h2>
          <p className="sm:w-[55%] mx-auto">
SUmmary          </p>
        </header>
        <div className="grid lg:grid-cols-3 gap-7">
          {tools.map(({ id, ...rest }, index) => (
            <ToolsItem {...rest} key={id} even={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;
