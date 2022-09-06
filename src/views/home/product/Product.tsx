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
              Market baskets are traditionally an investment instrument that enables one to trade a portfolio of assets
              in a single transaction.
            </p>
            <p className="mb-2">
              Exposure baskets are hosted on-chain and governed by the Exposure DAO. After the DAO sets the rules for
              a basket, anyone can help manage the basket as long as they are following its rules.
            </p>
            <p className="mb-2">
              A basket share is created by sending a basket's underlying assets to the basket.
              Shares can be redeemed at any time to get those underlying assets back.
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
