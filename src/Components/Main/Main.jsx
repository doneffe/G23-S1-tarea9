import React from "react";

const Main = () => {
  return (
    <main className="main-container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./assets/img/1.jpg"
              className="d-block"
              alt="1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./assets/img/2.jpg"
              className="d-block"
              alt="2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./assets/img/3.jpg"
              className="d-block"
              alt="3"
            />
          </div>
          <div className="carousel-item">
            <img
              width="600px"
              src="./assets/img/4.jpg"
              className="d-block"
              alt="4"
            />
          </div>
          <div className="carousel-item">
            <img
              width="600px"
              src="./assets/img/5.jpg"
              className="d-block"
              alt="5"
            />
          </div>
          <div className="carousel-item">
            <img
              width="600px"
              src="./assets/img/6.jpg"
              className="d-block"
              alt="6"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
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
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
};
export default Main;
