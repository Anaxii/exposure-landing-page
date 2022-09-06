import React from "react";
import { Link } from "react-router-dom";
import trusts from "./trust-brand.json";

function TrustBrand() {
  return (
    <div className="flex flex-wrap gap-5 justify-evenly lg:justify-between py-6 md:py-9 px-6 md:px-14 lg:px-16 xl:px-24 bg-white rounded-[64px] md:rounded-[80px] lg:rounded-full shadow-100 items-center">
      {trusts.map(({ icon, id, url }, index) => (
        <Link key={id} to={url} className="hover:scale-110 focus:scale-90 duration-100">
          <img
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            className=""
            src={icon}
            alt=""
          />
        </Link>
      ))}
    </div>
  );
}

export default TrustBrand;
