import React from "react";

function ProductCard({ title, desc, img, icon }) {
  return (
    <div className=" rounded-lg  my-4 shadow-lg">
      <img src={img} alt="product image" className="w-full" />
      <div className="relative text-[#333] mx-6">
        <img
          src={icon}
          alt="icon"
          className="bg-[#002D72] rounded-lg absolute -top-8 p-[12px]"
        />
        <h3 className="text-2xl font-bold pt-12">{title}</h3>
        <p className="pb-6">{desc}</p>
      </div>
    </div>
  );
}

export default ProductCard;
