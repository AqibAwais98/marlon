import React from "react";
import fireIcon from "../../assets/svg/fire-fill.svg";

function FeaturedProductCard({ img, desc, name }) {
  return (
    <div className="bg-[#EAFBFF] rounded-[20px] relative px-[26px] py-4 text-center">
      <span className="flex absolute top-4 right-5 text-sm">
        <img src={fireIcon} className="h-full" /> Hot
      </span>
      <img
        src={img}
        alt="product Image"
        className="mx-auto hover:-translate-y-6  transition-all duration-500"
      />
      <h3 className="text-[#002d72] font-bold text-xl">{name}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default FeaturedProductCard;
