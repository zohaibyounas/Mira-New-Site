import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Testimonials.css";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t("Mira Elektronikentwicklung UG delivered high-quality V5 firmware and sleep monitoring solutions with precision, innovation, and reliability."),
      rating: 4.5,
      name: t("Rustam Ismailov"),
      designation: t("Managing Director"),
      image: "/images/partner4.png",
    },
    {
      quote: t("Mira Elektronikentwicklung excels in Embedded Systems and FPGA technology, delivering outstanding results with expertise and dedication."),
      rating: 4.5,
      name: t("Hans Wegener"),
      designation: t("Sr. Software Engineer"),
      image: "/images/partner5.png",
    },
    {
      quote: t("Sypheon Online's team brought our vision to life with expertise in web-based multiplayer gaming and blockchain integration, ensuring smooth gameplay."),
      rating: 4.5,
      name: t("Ferruh Danaci"),
      designation: t("Product Owner"),
      image: "/images/partner1.png",
    },
  ];

  return (
    <section className="testimonials">
      <h3 className="testimonials-heading">{t("TESTIMONIALS")}</h3>
      <h2 className="testimonials-subheading">{t("Our successful clients")}</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-card">
            <div className="quote-icon">“</div>
            <p className="testimonial-text">{testimonial.quote}</p>
            <div className="testimonial-rating">
              {"★".repeat(Math.floor(testimonial.rating))}
              {testimonial.rating % 1 !== 0 && "☆"}
            </div>
            <div className="testimonial-profile">
              <img src={testimonial.image} alt={testimonial.name} />
              <h4>{testimonial.name}</h4>
              <p>{testimonial.designation}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
