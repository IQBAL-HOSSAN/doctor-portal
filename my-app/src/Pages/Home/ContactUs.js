import React from "react";
import { useForm } from "react-hook-form";
import TitleAndSubtitle from "../Shared/TitleAndSubtitle";

const ContactUs = () => {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const email = getValues("email");

  const handleSubmitBtn = (data) => {
    console.log("enter your email");
  };
  return (
    <section className={`py-20 bg-[url('/src/assets/images/appointment.png')]`}>
      <TitleAndSubtitle
        subTitle="Contact us"
        title="Stay connected with us"
        textAlign="text-center"
        textColor="text-white"
      />
      <form
        className=" px-4 md:px-20 lg:px-0 lg:w-2/6 mx-auto"
        onSubmit={handleSubmit(handleSubmitBtn)}
      >
        <input
          className="w-full py-2 px-3 rounded"
          placeholder="Email address"
          {...register("email", {
            required: "This input is required.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: `Please include an '@' in the email address. '${email}' is missing an '@`,
            },
          })}
        />
        {errors?.email && (
          <p className="error-text text-red-600  text-start">
            {errors?.email?.message}
          </p>
        )}
        <input
          className="w-full py-2 px-3 mt-5 rounded"
          placeholder="Subject"
          {...register("subject", {
            required: "This input is required.",
          })}
        />
        {errors?.subject && (
          <p className="error-text  text-red-600  text-start">
            {errors?.email?.message}
          </p>
        )}

        <textarea
          className="w-full py-2 px-3 mt-5 rounded"
          placeholder="Your message"
          {...register("message", {
            required: "This input is required.",
          })}
        />
        {errors?.message && (
          <p className="error-text  text-red-600  text-start">
            {errors?.message?.message}
          </p>
        )}
        <div className="text-center mt-8">
          <input
            className="btn btn-primary  text-base text-white text-bold bg-gradient-to-r from-primary to-secondary "
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
