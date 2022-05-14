import React from "react";
import chair from "../../assets/images/chair.png";
import treatment from "../../assets/images/treatment.png";

import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Footer from "../Shared/Footer";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner
        img={chair}
        bannerTitle="Your New Smile Starts Here"
        bannerText=" Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi."
      />
      <Info />
      <Services />
      <Banner
        img={treatment}
        bannerTitle="Exceptional Dental Care, on Your Terms"
        bannerText=" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page"
      />
      <MakeAppointment />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Home;
