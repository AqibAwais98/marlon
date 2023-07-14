import React, { useState } from "react";
import Logo from "../logo";
import Button from "../button";
import rightArrow from "../../assets/svg/right_arrow.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineRightCircle } from "react-icons/ai";

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
        <li>Solutions</li>
        <li className="flex gap-1 relative group">
          Product{" "}
          <span>
            <BiChevronDown />
          </span>
          <div className="hidden absolute top-4 group-hover:flex gap-12 transition-all bg-white text-black px-12 py-6 rounded-b-3xl">
            <div>
              <h3 className="whitespace-nowrap text-[#002d72] text-lg">
                Market Segment
              </h3>
              <ul className="flex flex-col gap-2 text-[#575757]">
                {subMenu.map((el) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="whitespace-nowrap text-[#002d72] text-lg">
                Gloves type
              </h3>
              <ul className="flex flex-col gap-2 text-[#575757]">
                {subMenu.map((el) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="whitespace-nowrap text-[#002d72] text-lg">
                Speciality Gloves
              </h3>
              <ul className="flex flex-col gap-2 text-[#575757]">
                {subMenu.map((el) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
          </div>
        </li>
        <li>Education</li>
        <li>Resource</li>
        <li>About us</li>
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
