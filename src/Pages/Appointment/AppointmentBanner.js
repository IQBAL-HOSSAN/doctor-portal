import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <section className="hero min-h-screen bg-[url('/src/assets/images/bg.png')]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="w-1/2 h-2/3 rounded-lg shadow-2xl" />

        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <p>You have selected: {format(date, "PP")}</p>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
