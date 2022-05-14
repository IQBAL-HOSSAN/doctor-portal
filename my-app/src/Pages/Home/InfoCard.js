import React from "react";

const InfoCard = ({ img, infoTitle, infoText, bgClass }) => {
  return (
    <div
      className={`card card-side  shadow-xl text-white py-5 px-6 ${bgClass}`}
    >
      <figure className="">
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{infoTitle}</h2>
        <p>{infoText}</p>
      </div>
    </div>
  );
};

export default InfoCard;
