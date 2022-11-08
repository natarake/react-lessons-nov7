import React from "react";
import { cardDetails } from "../data";
import image from "../assets/bleach.jpg";

const Cards = () => {
  // console.log({ cardDetails });
  return (
    <div className="container-fluid py-5">
      <div className="d-flex flex-wrap">
        {cardDetails.map((card) => (
          <div className="col-lg-3 col-sm-6 col-12 p-1" key={card.id}>
            <div className="card">
              <img src={image} className="card-img-top" height="300px" alt="" />
              <div className="card-img-overlay">
                <h5 className="card-title text-light">{card.title}</h5>
                <p className="card-text text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi, expedita. Lorem ipsum, dolor sit amet consectetur
                  adipisicing.
                </p>
                <button className="btn btn-warning mt-5" type="button">
                  <a
                    href="bleach.html"
                    className="text-decoration-none text-light"
                  >
                    Watch {card.title}
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
