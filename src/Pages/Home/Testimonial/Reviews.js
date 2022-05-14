import React from "react";

const Reviews = ({ review }) => {
  //   const { img, name, review } = review;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review.review}</p>
        <div className="flex items-center mt-5">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} />
            </div>
          </div>
          <div className="ml-5">
            <h3 className="text-xl font-semibold">{review.name}</h3>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
