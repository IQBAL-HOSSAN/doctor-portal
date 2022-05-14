import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <section className="container lg:justify-center mx-auto py-20 lg:px-32 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <InfoCard
        infoTitle="Opening hour"
        infoText="Lorem Ipsum is simply dummy text of the pri"
        bgClass=" bg-gradient-to-r from-primary to-secondary"
        img={clock}
      />
      <InfoCard
        infoTitle="Location"
        infoText="Lorem Ipsum is simply dummy text of the pri"
        bgClass="bg-neutral"
        img={marker}
      />
      <InfoCard
        infoTitle="Phone"
        infoText="Lorem Ipsum is simply dummy text of the pri"
        bgClass=" bg-gradient-to-r from-primary to-secondary"
        img={phone}
      />
    </section>
  );
};

export default Info;
