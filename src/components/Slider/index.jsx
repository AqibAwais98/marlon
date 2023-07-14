import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productsData } from "../productCard/data";
import ProductCard from "../productCard";
import "../Slider/style.css";
import rightArrowIcon from "../../assets/svg/slider_right_arrow.svg";
import leftArrowIcon from "../../assets/svg/slider_left_arrow.svg";

function CustomSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <img src={rightArrowIcon} />,
    prevArrow: <img src={leftArrowIcon} />,
    // centerMode:true,
    // centerPadding: '100px',
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 680,
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

const rightArrow = () => {
  return <img src={rightArrowIcon} />;
};

export default CustomSlider;
