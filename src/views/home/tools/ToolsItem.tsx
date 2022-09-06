import React from "react";

export interface ToolsItemProps {
  icon: string;
  title: string;
  content: string;
  even: boolean;
}

function ToolsItem({ content, icon, title, even }: ToolsItemProps) {
  return (
    <div className="bg-white rounded-[20px] p-6 sm:p-10" data-aos={even ? "fade-down" : "fade-up"}>
      <img className="w-[75px] h-[75px] inline-block mb-2.5" src={icon} alt="" />
      <h5 className="font-semibold text-md text-primary-900 mb-0.5">{title}</h5>
      <p>{content}</p>
    </div>
  );
}

export default ToolsItem;
