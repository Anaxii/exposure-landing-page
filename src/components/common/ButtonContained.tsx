import React from "react";
import { Link, To } from "react-router-dom";

interface ButtonContainedProps {
  to: To;
  children: string | JSX.Element | JSX.Element[];
  variant?: "navbar";
}

function ButtonContained({ to, children, variant }: ButtonContainedProps) {
  let px = "px-7";
  if (variant === "navbar") {
    px = "px-12";
  }

  return (
    <Link
      to={to}
      className={`bg-linear hover:bg-hover-linear text-white rounded-[30px] py-3 text-sm inline-block hover:no-underline focus:ring-4 ring-primary-700 ring-opacity-40 duration-150 ${px}`}
    >
      {children}
    </Link>
  );
}

export default ButtonContained;
