import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <main>
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointment date={date} setDate={setDate} />
    </main>
  );
};

export default Appointment;
