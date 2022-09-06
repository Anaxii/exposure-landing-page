import React from "react";
import { Link } from "react-router-dom";
import pages from "./pages.json";

function Pages() {
  return (
    <ul className="flex md:flex-row flex-col  md:items-center gap-4 md:gap-12">
      {pages.map(({ name, url }, index) => (
        <li key={index}>
          <Link className="text-sm text-primary-800" to={url}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Pages;
