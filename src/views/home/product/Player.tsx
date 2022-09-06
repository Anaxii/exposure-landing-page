import React from "react";

function Player({ toggle }: { toggle: () => void }) {
  return (
    <div
      className="rounded-xl w-full flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(51, 54, 106, 0.85) 100%, black), url('/images/Rectangle 181.jpg')",
        aspectRatio: "480 / 334",
      }}
    >
      <div className="">
        <button type="button" onClick={toggle} className="play-button relative z-10">
          <img
            src="/images/Group 57.svg"
            className="w-[94px] h-[94px] hover:bg-primary-50 hover:bg-opacity-25 rounded-full duration-150"
            alt=""
          />
        </button>
      </div>
      <div data-aos="fade-right">
          <img className="w-full mx-auto md:mx-0 max-w-[500px]" src="/images/Group 52.svg" alt="" />
        </div>
    </div>
  );
}

export default Player;
