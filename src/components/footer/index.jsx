import React from "react";
import Logo from "../logo";
import twitterIcon from "../../assets/svg/twitter_icon.svg";
import instagramIcon from "../../assets/svg/instagram_icon.svg";
import facebookIcon from "../../assets/svg/facebook_icon.svg";
import locationIcon from "../../assets/svg/location.svg";
import phoneIcon from "../../assets/svg/phone_icon.svg";
import emailIcon from "../../assets/svg/email_icon.svg";
import { quickLinks, products } from "./data";

function Footer() {
  return (
    <footer className="bg-[#002d72]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20 place-content-center pt-16 pb-8 text-[#fff] container mx-auto px-4">
        <div className="">
          <Logo />
          <p className="my-6 text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
            tristique quam proin tellus leo semper nibh quis turpis. Quisque
            aliquam duis dui aliquet pretium.
          </p>
          <span className="flex gap-6">
            <img src={facebookIcon} alt="facebook icon" />
            <img src={instagramIcon} alt="instagram icon" />
            <img src={twitterIcon} alt="twitter icon" />
          </span>
        </div>
        <div className="flex gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((links) => (
                <li>{links}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Product</h3>
            <div className="flex gap-12">
              <ul className="flex flex-col gap-2">
                {products.map((product) => (
                  <li>{product}</li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2">
                {products.map((product) => (
                  <li>{product}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
          <div className="flex items-start gap-4 mb-6">
            <img src={locationIcon} alt="location icon" />
            <span>
              Lore m ipsum dolor sit amet consectetur. Nisl nulla purus.
            </span>
          </div>
          <div className="flex items-start gap-4 mb-6">
            {" "}
            <img src={phoneIcon} alt="phone icon" />
            <span>1-812-216-3021</span>
          </div>
          <div className="flex items-start gap-4">
            {" "}
            <img src={emailIcon} alt="email icon" />
            <span>firstglovesdnbhd@gmail.com</span>
          </div>
        </div>
      </div>
      <p className="text-center border-t border-white/50 text-xs py-2 text-white/70">
        2023 All Copyrights Reserved
      </p>
    </footer>
  );
}

export default Footer;
