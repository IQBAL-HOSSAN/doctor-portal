import React from "react";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../Shared/PrimaryButton";
import TitleAndSubtitle from "../../Shared/TitleAndSubtitle";

const MakeAppointment = () => {
  return (
    <section className=" mt-36 mb-20  text-white py-10 bg-[url('/src/assets/images/appointment.png')]">
      <div className="flex  items-center lg:px-32">
        <div className="flex-1 hidden lg:block">
          <figure className="mt-[-200px]">
            <img src={doctor} alt="doctor" />
          </figure>
        </div>
        <div className="flex-1 p-4 lg:p-0">
          <TitleAndSubtitle
            subTitle="Appointment"
            title="Make an appointment Today"
            textColor="text-white"
          />
          <p className="mb-6 text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
