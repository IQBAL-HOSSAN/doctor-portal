import React from "react";

const AppointmentServices = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card text-center w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-xl text-secondary font-semibold justify-center">
          {name}
        </h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No slot available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            for="booking-modal"
            className="btn btn-primary text-base text-white text-bold bg-gradient-to-r from-primary to-secondary "
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentServices;
