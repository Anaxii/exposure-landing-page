import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="w-12 h-12 md:w-[72px] md:h-[72px]">
      <Link to="/">
        <img className="w-12 h-12 md:w-[72px] md:h-[72px]" src="/images/logo.svg" alt="" />
      </Link>
    </div>
  );
}

export default Logo;
