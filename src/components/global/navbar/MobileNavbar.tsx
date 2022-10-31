import React from "react";
import ButtonContained from "../../common/ButtonContained";
import Copyright from "../footer/Copyright";
import FooterLogo from "../footer/FooterLogo";
import Social from "../footer/social/Social";
import TermNPrivacy from "../footer/TermNPrivacy";
import Pages from "./pages/Pages";

function MobileNavbar({ toggle }: { toggle: () => void }) {
  return (
    <div className="h-screen p-6 flex flex-col justify-between">
      <div className="">
        <div className="flex justify-between items-center mb-12">
          <FooterLogo />
          <button type="button" onClick={toggle}>
            <img src="/images/xmark-solid.svg" className="w-3" alt="" />
          </button>
        </div>
        <div className="px-2 mb-6">
          <Pages />
        </div>
      </div>
      <div>
        <div className="mb-2.5">
          <Social />
        </div>
        <div className="mb-1">
          <TermNPrivacy />
        </div>
        <div>
          <Copyright />
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
