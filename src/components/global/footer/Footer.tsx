import React from "react";
import Copyright from "./Copyright";
import FooterLogo from "./FooterLogo";
import FooterPages from "./FooterPages";
import Social from "./social/Social";
import TermNPrivacy from "./TermNPrivacy";

function Footer() {
  return (
    <footer className="container">
      <div style={{padding: "2rem"}}/>

      <div className="px-3 sm:px-10">
        <div className="flex md:flex-row flex-col md:justify-between gap-3 md:gap-10">
          <div>
            <FooterLogo />
            <FooterPages />
          </div>
          <Social />
        </div>
        <hr className="border-primary-0 my-3 md:my-5" />
        <div className="md:flex justify-between gap-10 pb-3">
          <Copyright />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
