import React from "react";
import { Link } from "react-router-dom";

function TermNPrivacy() {
  return (
    <div className="text-[12px] leading-[1.2]">
      <Link to="/" className="md:mr-4 mr-2">
        Terms &amp; Conditions
      </Link>
      <Link to="/">Privacy Policy</Link>
    </div>
  );
}

export default TermNPrivacy;
