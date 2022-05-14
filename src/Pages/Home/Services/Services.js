import React from "react";
import ServiceCart from "./ServiceCart";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import TitleAndSubtitle from "../../Shared/TitleAndSubtitle";
const Services = () => {
  return (
    <div>
      <TitleAndSubtitle
        subTitle=" Our Services"
        title=" Services We Provide "
        textAlign="text-center"
      />
      <div className="container justify-items-center mx-auto py-20 gap-5 lg:gap-0 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCart
          img={fluoride}
          serviceTitle="Cavity Filling"
          serviceText="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        />
        <ServiceCart
          img={cavity}
          serviceTitle="Teeth Whitening"
          serviceText="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        />
        <ServiceCart
          img={whitening}
          serviceTitle="Fluoride Treatment"
          serviceText="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        />
      </div>
    </div>
  );
};

export default Services;
