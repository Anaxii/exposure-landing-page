import React from "react";
import { Link } from "react-router-dom";
import pages from "../navbar/pages/pages.json";

function FooterPages() {
  return (
    <ul className="flex items-center gap-3.5 sm:gap-6">
      {pages.map(({ name, url }, index) => (
        <li key={index}>
          <Link className="text-[12px] sm:text-sm" to={url}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FooterPages;
