import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary text-base text-white text-bold bg-gradient-to-r from-primary to-secondary ">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
