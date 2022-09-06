import React from "react";

function Copyright() {
  const current = new Date().getFullYear();
  return (
    <p className="md:text-base text-[11px] leading-[1.2]">
      Copyright &copy; {current} - all rights reserved
    </p>
  );
}

export default Copyright;
