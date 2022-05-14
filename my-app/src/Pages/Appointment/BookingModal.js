import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, setTreatment, date }) => {
  const [user] = useAuthState(auth);
  const { name, slots } = treatment;

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      fulName: "",
      email: "",
      phone: "",
    },
  });

  const email = getValues("email");

  const handleSubmitBtn = (data, event) => {
    const slot = event.target.slot.value;
    // setTreatment(data, slot);
    // console.log("enter your email", data, slot);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>

          <h3 className="text-lg font-bold text-secondary">
            Booking for: {name}
          </h3>
          <form onSubmit={handleSubmit(handleSubmitBtn)}>
            <input
              value={` ${format(date, "PP")}`}
              disabled
              className="w-full px-3 py-2 mt-5 font-semibold text-gray-600 border-2 rounded-lg"
              {...register("date")}
            />
            <select
              name="slot"
              className="w-full px-3 py-2 mt-5 border-2 rounded-lg"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              className="w-full px-3 py-2 mt-5 border-2 rounded-lg"
              disabled={user?.displayName}
              value={user?.displayName}
              {...register("fullName", {
                required: "This input is required.",
              })}
            />
            {errors?.fullName && (
              <p className="text-red-600 error-text text-start">
                {errors?.fullName?.message || ""}
              </p>
            )}
            <input
              className="w-full px-3 py-2 mt-5 border-2 rounded-lg"
              disabled
              value={user?.email}
              // {...register("email", {
              //   required: "This input is required.",
              //   pattern: {
              //     value: /\S+@\S+\.\S+/,
              //     message: `Please include an '@' in the email address. '${email}' is missing an '@`,
              //   },
              // })}
            />
            {errors?.email && (
              <p className="text-red-600 error-text text-start">
                {errors?.email?.message}
              </p>
            )}

            <input
              className="w-full px-3 py-2 mt-5 border-2 rounded-lg"
              placeholder="Phone Number"
              {...register("phone", {
                required: "This input is required.",
              })}
            />
            {errors?.phone && (
              <p className="text-red-600 error-text text-start">
                {errors?.phone?.message}
              </p>
            )}

            <input
              className="w-full mt-5 text-base text-white btn btn-primary bg-gradient-to-r from-primary to-secondary text-bold"
              type="submit"
              value="Submit"
            />
          </form>
          <div className="modal-action">
            <label for="booking-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
