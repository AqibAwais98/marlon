import React, { useState } from "react";
import Logo from "../logo";
import Button from "../button";
import rightArrow from "../../assets/svg/right_arrow.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineRightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Nav() {
  const subMenu = [
    "Health",
    "Dental",
    "Science",
    "Food",
    "Industry",
    "spa & beauty",
  ];
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex justify-between items-center container mx-auto pt-8">
      <Logo />
      <ul className="hidden lg:flex items-center md:gap-4 xl:gap-[38px] text-[#fff] font-semibold">
        <li>
          <Link to="#"> Solutions</Link>
        </li>
        <li className="flex items-center gap-1 relative group h-12">
          <Link to="#"> Product</Link>
          <span>
            <BiChevronDown />
          </span>
          <div className="hidden absolute top-12 group-hover:flex gap-12 transition-all bg-white text-black px-12 py-6 rounded-b-3xl">
            <div>
              <h3 className="whitespace-nowrap text-[#002d72] text-lg">
                Market Segment
              </h3>
              <ul className="flex flex-col gap-2 text-[#575757]">
                {subMenu.map((el) => (
                  <li>
                    <Link to="#"> {el}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="whitespace-nowrap text-[#002d72] text-lg">
                Gloves type
              </h3>
              <ul className="flex flex-col gap-2 text-[#575757]">
                {subMenu.map((el) => (
                   <Link to="#"> {el}</Link>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="whitespace-nowrap text-[#002d72] text-lg">
                Speciality Gloves
              </h3>
              <ul className="flex flex-col gap-2 text-[#575757]">
                {subMenu.map((el) => (
                   <Link to="#"> {el}</Link>
                ))}
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link to="#"> Education </Link>
        </li>
        <li>
          {" "}
          <Link to="#">Resource </Link>
        </li>
        <li>
          <Link to="#">About us</Link>
        </li>
        <li>
          <Button text="Contact us" variant="text-[#002D72] bg-white">
            <img src={rightArrow} />
            {/* <AiOutlineRightCircle  /> */}
          </Button>
        </li>
      </ul>
      {/* <div className="lg:hidden text-3xl text-white">
        {!showMenu ? <RxHamburgerMenu /> : <GrClose />}
      </div> */}
    </div>
  );
}

export default Nav;
