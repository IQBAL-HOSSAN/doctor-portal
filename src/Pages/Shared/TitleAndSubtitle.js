import React from "react";

const TitleAndSubtitle = ({ title, subTitle, textAlign, textColor }) => {
  return (
    <div>
      <h3 className={`text-primary text-xl font-bold ${textAlign}`}>
        {subTitle}
      </h3>
      <h2 className={`text-4xl   mt-2 mb-10 ${textAlign} ${textColor}`}>
        {title}
      </h2>
    </div>
  );
};

export default TitleAndSubtitle;
