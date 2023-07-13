import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productsData } from "../productCard/data";
import ProductCard from "../productCard";
import "../Slider/style.css";

function CustomSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode:true,
    // centerPadding: '100px',
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {productsData.map((product) => (
          <ProductCard
            title={product.title}
            desc={product.desc}
            img={product.img}
            icon={product.icon}
          />
        ))}
      </Slider>
    </div>
  );
}

export default CustomSlider;
