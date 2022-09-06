import React from "react";

function EmailForm() {
  return (
    <div className="flex items-center justify-between bg-white rounded-full w-full max-w-[374px] mx-auto">
      <input
        type="text"
        placeholder="Email"
        className="text-primary-850 bg-transparent placeholder:text-primary-850 px-5 py-2 flex-grow"
      />
      <button type="button" className="px-5">
        <img src="/images/Group.svg" className="w-[17px]" alt="" />
      </button>
    </div>
  );
}

export default EmailForm;
