import React from "react";
import quote from "../../../assets/icons/quote.svg";
import TitleAndSubtitle from "../../Shared/TitleAndSubtitle";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people1.png";
import people3 from "../../../assets/images/people1.png";
import Reviews from "./Reviews";
const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      location: "California",
    },
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      location: "California",
    },
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      location: "California",
    },
  ];
  return (
    <section>
      <div className="flex px-4 lg:px-32 justify-center">
        <div className="flex-1">
          <TitleAndSubtitle
            subTitle="Testimonial"
            title="What Our Patients Says"
          />
        </div>
        <div className="flex-1 justify-end ">
          <figure className="w-24 lg:w-48 float-right">
            <img src={quote} alt="quote" />
          </figure>
        </div>
      </div>
      <div className="container justify-items-center gap-5 lg:gap-0 lg:justify-center mx-auto py-20 lg:px-32  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <Reviews key={index} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
