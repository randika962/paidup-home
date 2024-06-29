import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { banner } from "../../assets/images";
import { paidup2 } from "../../assets/images";

const CustomSlide = ({ Subtext, imgSrc, img, text, buttonLink, buttonText }) => (
  <div
    style={{
      position: "relative",
      height: "100vh",
      width: "100vw",
      backgroundImage: `url(${imgSrc})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    }}
  >
    <div
      style={{
        textAlign: "center",
        maxWidth: "450px",
        width: "100%",
      }}
    >
      <img src={img} alt={text} style={{ marginBottom: "20px", maxWidth: "80%" }} />
      <h1
        style={{
          marginBottom: "15px",
          fontSize: "2.5rem",
          fontWeight: "700",
        }}
      >
        {text}
      </h1>
      <p
        style={{
          marginBottom: "25px",
          fontSize: "1.5rem",
        }}
      >
        {Subtext}
      </p>
      <Link to={buttonLink}>
        <button className="bg-white text-orange-500 text-lg font-bodyFont w-[185px] h-[50px] hover:bg-white duration-300 font-bold rounded-md">
          {buttonText}
        </button>
      </Link>
    </div>
  </div>
);

const Banner = () => {
  const slides = [
    {
      img: paidup2,
      imgSrc: banner,
      text: "Experience Invoice and Quotation Generator",
      Subtext:
        "Simplify your billing and quotation processes today to focus on growing your business",
      buttonLink: "/",
      buttonText: "LOG IN",
    },
  ];

  return (
    <div className="w-full bg-white">
      <Slider >
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
