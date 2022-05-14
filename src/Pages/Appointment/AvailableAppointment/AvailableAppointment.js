import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import TitleAndSubtitle from "../../Shared/TitleAndSubtitle";
import BookingModal from "../BookingModal";
import AppointmentServices from "./AppointmentServices";

const AvailableAppointment = ({ date, setDate }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/treatment")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="py-20">
      <TitleAndSubtitle
        subTitle={`Available Appointments on ${format(date, "PP")}`}
        textAlign="text-center"
      />

      <div className="container gap-y-8 md:gap-x-8  justify-items-center mx-auto py-20 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <AppointmentServices
            key={index}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </section>
  );
};

export default AvailableAppointment;
