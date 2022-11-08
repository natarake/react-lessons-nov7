import React from "react";
import image1 from "../assets/aot.jpg";
import image2 from "../assets/dbz.jpg";
import image3 from "../assets/naruto.jpg";
import image4 from "../assets/onepiece.jpg";
import image5 from "../assets/shaman.jpg";
import image6 from "../assets/jujutsu.jpg";

const HeroCarousel = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center my-3">
      <div
        id="imageSlides"
        className="carousel slide"
        data-bs-interval="3000"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#imageSlides"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#imageSlides"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#imageSlides"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#imageSlides"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#imageSlides"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#imageSlides"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={image4} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={image5} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={image6} className="d-block w-100" alt="" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#imageSlides"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#imageSlides"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
