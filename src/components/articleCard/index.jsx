import React from "react";

function ArticleCard({ img, title, desc }) {
  return (
    <div>
      <img src={img} alt="image" className="mb-4 w-full" />
      <h3 className="font-semibold text-[#2F3235] text-xl mb-2">{title}</h3>
      <p className="text-[17px] text-[#6b6b6b] mb-1 ">{desc}</p>
      <a href="#" className="text-[#007aff] font-medium underline">
        Read now
      </a>
    </div>
  );
}

export default ArticleCard;
