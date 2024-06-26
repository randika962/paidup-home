import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { bannerImgOne } from "../../assets/images";

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
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
      color: "black",
    }}
  >
    <div
      style={{
        textAlign: "center",
        maxWidth: "450px",
        width: "100%",
      }}
    >
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
        <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
          {buttonText}
        </button>
      </Link>
    </div>
  </div>
);

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ul style={{ margin: "0px" }}>{dots}</ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: bannerImgOne,
      text: "Experience Invoice and Quotation Generator",
      Subtext:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
      buttonLink: "/",
      buttonText: "Generator",
    },
    {
      imgSrc: bannerImgOne,
      text: "Experience Invoice and Quotation Generator",
      Subtext:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
      buttonLink: "/",
      buttonText: "About-us",
    },
    {
      imgSrc: bannerImgOne,
      text: "Experience Invoice and Quotation Generator",
      Subtext:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
      buttonLink: "/",
      buttonText: "Contact-us",
    },
  ];

  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
