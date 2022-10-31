import React, { useState } from "react";
import useNavbarEffect from "../../../hooks/useNavbarEffect";
import ButtonContained from "../../common/ButtonContained";
import Logo from "./Logo";
import Pages from "./pages/Pages";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => setDrawer((v) => !v);
  const nav = useNavbarEffect("py-8 md:py-12", "py-3 bg-white shadow-200", 100);

  return (
    <div>
      <nav className={`fixed left-0 right-0 top-0 duration-150 z-[99] ${nav}`}>
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-10 md:mr-[112px]">
              <Logo />
            </div>
            <div className="hidden md:block">
              <Pages />
            </div>
          </div>
        </div>
      </nav>
      <div className="md:hidden">
        <Drawer
          style={{ zIndex: 1021, width: 260 }}
          direction="left"
          open={drawer}
          onClose={toggleDrawer}
        >
          <MobileNavbar toggle={toggleDrawer} />
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
