import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = ({ img, bannerTitle, bannerText }) => {
  return (
    <section className="hero min-h-screen bg-[url('/src/assets/images/bg.png')]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img} className="w-1/2 h-2/3 rounded-lg shadow-2xl" />

        <div>
          <h1 className="text-5xl font-bold">{bannerTitle}</h1>
          <p className="py-6">{bannerText}</p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Banner;
