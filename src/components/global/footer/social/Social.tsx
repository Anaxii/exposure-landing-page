import React from "react";
import { Link } from "react-router-dom";
import social from "./social.json";

function Social() {
  return (
    <div className="md:self-end">
      <h4 className="text-primary-800 font-semibold text-base md:text-md">Join the Community</h4>
      <div className="flex items-center gap-3">
        {social.map(({ id, icon, url }) => (
          <Link key={id} to={url}>
            <img className="w-6 md:w-9" src={icon} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Social;
