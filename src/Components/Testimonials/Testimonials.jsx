import React from "react";
import "./Testimonials.css";
import Me1 from "../../Assets/p7.jpeg";
import Me2 from "../../Assets/p13.jpeg";
import Me3 from "../../Assets/p10.jpeg";
import Me4 from "../../Assets/p4.jpeg";
import Me5 from "../../Assets/p1.jpeg";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Me1,
    name: "Sarah Johnson, CEO of FreshStart Fitness",
    review:
      "Working with Oluwatobi Daniel on our new website was a fantastic experience. They understood our vision and brought it to life with a clean, user-friendly design that our clients love. The integration of our booking system was seamless, and we've seen a significant increase in online engagement. Highly professional and responsive throughout the project!",
  },
  {
    avatar: Me2,
    name: "Michael Brown, Founder of TravelBuddy",
    review:
      "I hired Oluwatobi Daniel to develop a mobile app for our travel startup, and the results exceeded my expectations. The app is intuitive, visually appealing, and packed with features that our users appreciate. The project was delivered on time and within budget. I highly recommend Oluwatobi Daniel for any development needs!",
  },
  {
    avatar: Me3,
    name: "Emily Davis, Marketing Manager at TechSolutions Inc.",
    review:
      "Oluwatobi Daniel was instrumental in redesigning our corporate website. They provided valuable insights into improving the user experience and implemented a modern design that aligns with our brand. Communication was excellent, and any issues were promptly addressed. The only minor downside was a slight delay due to unforeseen challenges, but overall, we are very satisfied with the outcome.",
  },
  {
    avatar: Me4,
    name: "John Smith, Owner of Gourmet Bistro",
    review:
      "We needed a reservation system for our restaurant, and Oluwatobi Daniel delivered a fantastic solution. The system is easy to use for both our staff and customers, and it has streamlined our operations significantly. The attention to detail and commitment to quality were evident throughout the project. We couldn't be happier with the service provided.",
  },
  {
    avatar: Me5,
    name: "John Smith, CEO at Tech Innovations",
    review:
      "Working with Oluwatobi Daniel was a fantastic experience. They delivered a top-notch e-commerce platform that exceeded our expectations. Their attention to detail, creativity, and technical expertise were evident throughout the project. The site is user-friendly, responsive, and has significantly boosted our online sales. I highly recommend Oluwatobi Daniel for any web development needs.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Client </h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review, i }) => {
          return (
            <SwiperSlide key={i} className="testimonials">
              <div className="client_avatar">
                <img src={avatar} alt="img" />
              </div>
              <h5 className="client_review">{name}</h5>
              <small className="cleint_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
