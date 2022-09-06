import React, { useState } from "react";
import ButtonContained from "../../../components/common/ButtonContained";
import Player from "./Player";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

function Product() {
  const [play, setPlay] = useState(false);
  const togglePlay = () => setPlay((v) => !v);

  return (
    <section className="mb-28 md:mb-40">
      <div className="container md:grid md:grid-cols-2 items-center">
        <div className="flex flex-col gap-4 sm:w-[80%] mb-20 md:mb-0" data-aos="fade-right">
          <h2 className="font-semibold text-xl text-primary-850">Exposure Basket</h2>
          <div>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <ButtonContained to="/">Read More</ButtonContained>
          </div>
        </div>
        <div className="relative" data-aos="fade-left">
          <img
            src="/images/Group 56 (5).svg"
            className="scale-[1.3] md:scale-[1.55] -translate-y-[12%]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Product;
