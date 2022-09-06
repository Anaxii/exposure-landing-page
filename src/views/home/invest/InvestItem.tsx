import React from "react";

export interface InvestItemProps {
  icon: string;
  title: string;
  content: string;
  even: boolean;
}

function InvestItem({ content, icon, title, even }: InvestItemProps) {
  return (
    <div
      data-aos={even ? "fade-down" : "fade-up"}
      className="text-center flex flex-col items-center before:content-[''] sm:before:w-0.5 before:h-[85%] before:translate-y-[7.5%] before:bg-primary-150 relative before:absolute before:-left-8 before:bg-opacity-20 sm:odd:before:w-0 lg:odd:before:w-0.5 first:before:w-0"
    >
      <img src={icon} alt={title} />
      <h4 className="text-semibold text-lg font-semibold text-primary-850">{title}</h4>
      <p>{content}</p>
    </div>
  );
}

export default InvestItem;
