import React, { useEffect } from "react";
import Swiper from "swiper";
import "../node_modules/swiper/swiper-bundle.min.css";

const Slider = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src="/AdobeStock_297058565 (1).jpeg"
            alt="Slide 1"
          />
        </div>
        <div className="swiper-slide">
          <img
            src="/DALLEkitchen2.png"
            alt="Slide 2"
          />
        </div>
        <div className="swiper-slide">
          <img
            src="/AdobeStock_693350129.jpeg"
            alt="Slide 3"
          />
        </div>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Slider;
