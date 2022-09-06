import React from "react";
import { Link, To } from "react-router-dom";

interface ButtonOutlineProps {
  to: To;
  children: string | JSX.Element | JSX.Element[];
}

function ButtonOutline({ to, children }: ButtonOutlineProps) {
  if (to == "gitbook") {
    return (
        <a
            href={"https://anaxii.gitbook.io/exposure/overview/introduction-to-exposure"}
            target={"_blank"}
            className={`border-2 border-primary-700 rounded-full text-sm py-3 px-7 inline-block text-primary-700 hover:no-underline focus:ring-4 ring-primary-700 ring-opacity-40 duration-150 hover:bg-primary-700 hover:bg-opacity-10`}
        >
          {children}
        </a>
    )
  }
  return (
    <Link
      to={to}
      className={`border-2 border-primary-700 rounded-full text-sm py-3 px-7 inline-block text-primary-700 hover:no-underline focus:ring-4 ring-primary-700 ring-opacity-40 duration-150 hover:bg-primary-700 hover:bg-opacity-10`}
    >
      {children}
    </Link>
  );
}

export default ButtonOutline;
