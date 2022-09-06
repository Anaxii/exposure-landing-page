import React from "react";
import { Link } from "react-router-dom";

function FooterLogo() {
  return (
    <div className="md:w-max">
      <Link to="/" className="flex md:flex-col gap-3.5 items-center hover:no-underline">
        <img className="w-12 h-12 md:w-20 md:h-20" src="/images/Union (1).svg" alt="" />
        <span className="font-semibold text-md text-primary-800">General</span>
      </Link>
    </div>
  );
}

export default FooterLogo;
