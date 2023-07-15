import React from "react";
import Nav from "../../components/nav";
import Button from "../../components/button";
import okIcon from "../../assets/svg/ok_icon.svg";
import rightArrowWhite from "../../assets/svg/arrow_right_white.svg";
import { featuredProducts } from "../../components/featuredProductCard/data";
import FeaturedProductCard from "../../components/featuredProductCard";
import rightArrow from "../../assets/svg/right_arrow.svg";
import rightArrow2 from "../../assets/svg/right_arrow2.svg";
import ArticleCard from "../../components/articleCard";
import {
  articleMessage,
  atricleCradData,
} from "../../components/articleCard/data";
import Footer from "../../components/footer";
import CustomSlider from "../../components/Slider";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="bg-hero bg-repeat-x">
        <Nav />
        <div className="bg-hero2 bg-no-repeat bg-right-bottom">
          <div className="container mx-auto pt-36 pb-48">
            <div className="flex items-center my-14 lg:my-0">
              <div className="max-w-[667px] ">
                <h1 className="text-2xl lg:text-5xl text-white/90 font-bold leading-[30px] lg:leading-[62px]">
                  A medical supply company, manufacturer and distributor
                  <br />
                  <span className="font-normal">
                    bringing you clinical and supply chain expertise
                  </span>
                </h1>
                <Link
                  href="#"
                  className="mt-10 text-lg text-white/70 underline"
                >
                  See who we serve
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[52px] pb-[90px] container mx-auto px-4">
        <div className="">
          <div className="flex flex-wrap justify-between mb-12">
            <h2 className="text-[#002D72] text-3xl lg:text-4xl font-semibold  ">
              A reliable glove manufacturer for all sectors
            </h2>
            <Button
              text="See All Products"
              variant="bg-[#002D72] text-white py-[12px] pl-[18px] pr-[21px] gap-2 rounded-[10px] text-lg"
            >
              <img src={rightArrowWhite} alt="arrow" />
            </Button>
          </div>
          <CustomSlider />
        </div>
      </section>
      <section className="bg-hand-guard bg-cover bg-no-repeat bg-slate-400 pt-24 ">
        <div className="relative">
          <div className="container mx-auto before:w-[50%] before:h-full before:bg-[#fff] before:absolute before:left-0 before:rounded-tr-[170px]">
            <div className=" bg-white/50 py-[52px] w-[50%] relative z-50 rounded-tr-[170px]">
              <h2 className="text-[#002D72] font-semibold text-3xl xl:text-5xl leading-[40px] lg:leading-[60px] mb-[19px]">
                We have Promised to <br /> Guard your Hands
              </h2>
              <p className="text-lg mb-[44px]">
                Our gloves provide unparalleled protection and comfort for every
                use, backed by stringent quality control measures and
                industry-leading manufacturing processes
              </p>
              <p className="text-2xl mb-[12px] font-medium relative">
                <span className="before:w-[85px] before:h-[2px] before:bg-[#00D1FF] before:absolute before:-bottom-1 before:rounded">
                  Whether{" "}
                </span>
                it's industrial, medical, or sports-related
              </p>
              <ul className="text-lg text-[#333] mb-[22px]">
                <li className="flex items-center gap-[12px]">
                  <img src={okIcon} alt="icon" />
                  Unparalleled protection and comfort for every use
                </li>
                <li className="flex items-center gap-[12px]">
                  <img src={okIcon} alt="icon" />
                  Wide variety of materials, colors, and sizes to choose from
                </li>
                <li className="flex items-center gap-[12px]">
                  <img src={okIcon} alt="icon" />
                  Perfect fit for every need, whether it's industrial, medical,
                  or sports-related
                </li>
                <li className="flex items-center gap-[12px] ">
                  <img src={okIcon} alt="icon" />
                  Performance you can count on and protection you can trust
                </li>
              </ul>
              <Button
                text="Learn More"
                variant="bg-[#002D72] text-white pt-[12px] pb-[7px] pl-[18px] pr-[21px] gap-9 rounded-[10px] text-lg"
              >
                <img src={rightArrowWhite} alt="arrow icon" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-feature bg-cover pt-[36px] pb-[60px] text-center">
        <div className=" text-white ">
          <h2 className="text-[42px] font-semibold">Our Featured Products</h2>
          <p className="text-lg mb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
            tristique quam proin tellus <br /> leo semper nibh quis turpis.
            Quisque aliquam duis dui aliquet pretium.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-[107px] container px-4 mx-auto mb-[57px]">
          {featuredProducts.map((product) => (
            <FeaturedProductCard
              img={product.productImg}
              name={product.name}
              desc={product.desc}
            />
          ))}
        </div>
        <Button
          text={"See All Products"}
          variant="text-[#002d72] bg-white gap-2 font-semibold px-6 pt-[7px] pb-1 rounded"
        >
          <img src={rightArrow} alt="right icon" />
        </Button>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 mx-4">
            <div className="bg-circles bg-contain bg-no-repeat bg-center flex justify-center items-center ">
              <div className="max-w-[400px] rounded-[20px] shadow-[0_23px_147px_6px_rgba(64,71,95,0.25)] my-28">
                <p className="py-6 px-9 bg-white text-[28px] font-bold text-[#002D72] overflow-hidden rounded-t-[20px]">
                  Mission Statement
                </p>
                <div className="bg-[#002d72] rounded-b-[20px] text-white text-[22px] px-7 py-10">
                  <p className="pb-[20px]">
                    We are committed to providing our customers with gloves that
                    meet the highest standards of quality. Our goal is to
                    provide gloves that are not only effective in protecting our
                    clients.
                  </p>
                  <p className="py-2 border-t-2 border-white w-fit">
                    Marlon
                    <br />
                    <span className="text-lg">CEO, Frist Glove</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="max-w-[420px]">
                <h2 className="text-[#002D72] text-5xl font-semibold">
                  Our Mission
                </h2>
                <p className="text-lg">
                  Our mission is to provide our customers with gloves that are
                  not only of the highest quality, but also affordable and
                  accessible. We strive to be an industry leader while
                  maintaining integrity in our business practices and creating a
                  safe and fulfilling work environment for our employees.
                </p>
                <Link href="#" className="underline text-[#002D72]">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="mt-12 mb-32">
            <h2 className="text-5xl text-[#002d72] font-semibold text-center mb-8">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[74px] ">
              {atricleCradData.map((data) => (
                <ArticleCard
                  img={data.img}
                  title={data.title}
                  desc={data.desc}
                />
              ))}
              <div>
                {articleMessage.map((msg) => (
                  <p className="text-[22px] pb-[15px] [&:not(:first-child)]:pt-[15px] border-b border-[#000]">
                    {msg}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-contact bg-cover ">
        <div className="bg-contact2 bg-no-repeat bg-right ">
          <div className="flex items-center container mx-auto py-8 lg:py-[70px] px-4">
            <div>
              <h2 className="text-white text-4xl lg:text-5xl font-semibold leading-[45px] lg:leading-[60px] mb-2">
                Contact Now and Discover <br />
                the Perfect Products!
              </h2>
              <p className="text-lg text-white mb-4">
                Lorem ipsum dolor sit amet consectetur. Justo dignissim
                convallis viverra id risus. Diam vitae consequat.
              </p>
              <div className="flex gap-5">
                <Button
                  text="Contact us"
                  variant="text-[#002D72] bg-white font-semibold gap-2 px-6 pt-[7px] pb-1 rounded"
                >
                  <img src={rightArrow} alt="arrow icon" />
                </Button>
                <Button
                  text="Products"
                  variant="bg-[#002D72] text-white font-semibold px-6 pt-[7px] pb-1 gap-[19px] rounded"
                >
                  <img src={rightArrow2} alt="arrow icon" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
