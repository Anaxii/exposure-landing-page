import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../global/footer/Footer";

function Layout() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-hidden">
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
