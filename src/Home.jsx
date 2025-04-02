import { useState } from "react";
import Banner from "./component/banner/Banner";
import Header from "./component/head/Header";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import CustomButton from "./component/button/CustomButton";
import Booknow from "./component/button/Booknow";
import Card from "./component/card/Card";
import Footer from "./component/footer/Footer";

import { content, content2, content3, surveillance } from "../utlis/data";

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <section>
        <Header />
        <Banner />
      </section>

      <section className="grid lg:grid-cols-5  max-sm:grid-cols-2 md:grid-cols-4 lg:h-[20rem] max-sm:h-[50rem] gap-3 lg:px-16 py-3">
        {content.map((item, idx) => (
          <Card key={idx} content={item} isdep={true} />
        ))}
      </section>

      <section className="w-full lg:h-[45rem] max-sm:h-[91rem]  relative">
        <p className="text-center font-bold text-2xl">
          Smart surveillance systems for your home and business.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 max-sm:grid-cols-1 h-[25rem] lg:gap-10 md:gap-1.5  lg:px-16 mt-16 text-center">
          {surveillance.map((item, idx) => {
            return (
              <div className="bg-[#F3F3F3] rounded-4xl flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                  className="lg:w-96 w-72 md:w-56 h-64 max-sm:h-56 rounded-md transition-transform duration-300 md:hover:scale-110 "
                  src={item.img}
                  alt=""
                />
                <div className="text-[#000000] mt-6 transition-opacity duration-300 hover:opacity-90">
                  <p className="transition-colors duration-300 ">Lorem ipsum</p>
                  <p className="text-[#AB2222] ">₹ 2499</p>
                  <span className="flex space-x-2">
                    <p className="text-[#888686] line-through">MRP: 500</p>
                    <p className="text-[#AB2222]">30% OFF</p>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full h-56 flex justify-center items-center gap-3 max-sm:absolute bottom-0">
          <CustomButton
            className={
              "bg-[#0000B5] text-white hover:bg-white hover:text-black"
            }
          >
            Explore products
          </CustomButton>
          <CustomButton className={"border-[#0000B5]"}>
            Consult experts
          </CustomButton>
        </div>
      </section>

      <section className="w-full lg:h-[45rem] md:h-[70rem] max-sm:h-[95rem] bg-[#F2F2F2]">
        <div className="w-full h-20 bg-[#C0DDFF]" />
        <div className="grid lg:grid-cols-2 max-sm:grid-cols-1 h-[24rem] mt-3 lg:px-20">
          <div className=" flex lg:justify-end">
            <img
              className="lg:w-[550px] w-full h-[500px]"
              src="https://www.emma-sleep.in/cdn/shop/files/Untitleddesign_31.png?v=1686318186"
              alt=""
            />
          </div>
          <div className=" lg:p-5 pt-8 max-sm:pt-15 px-3 ">
            <p>stay whith us</p>
            <p className="font-bold text-5xl mt-4">Mattress</p>
            <p className="lg:w-[25rem]  mt-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim
            </p>
            <Booknow
              className={
                "mt-10 border-none shadow-black shadow-2xl bg-white hover:text-white hover:bg-[#0000B5] duration-500"
              }
            />

            <div className="grid lg:grid-cols-4 md:grid-cols-3  max-sm:grid-cols-2 gap-3 mt-10">
              {content2.map((item, idx) => (
                <Card key={idx} content={item} className={"h-28 lg:mt-8"} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:h-[52rem] max-sm:h-[52rem]  relative">
        <img
          className="w-full lg:h-[50rem] object-cover"
          src="https://images.pexels.com/photos/7535010/pexels-photo-7535010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />

        <div className="lg:w-[30%] md:w-[50%]  h-[40rem] max-sm:h-[30rem] bg-white absolute top-16 lg:right-40 md:right-5 max-sm:top-[40%] p-10 max-sm:p-2">
          <p className="text-[3.5em] font-bold">
            Buy a set for the ultimate Dreamzy experience
          </p>

          <Booknow
            className={
              "mt-28 max-sm:mt-10 border-none shadow-black shadow-2xl text-white bg-[#0000B5] duration-500  hover:bg-white hover:text-black"
            }
          />
        </div>
      </section>

      <section className="grid grid-cols-12 gap-4 lg:px-16 h-96 max-sm:h-[55rem]">
        <div className="col-span-12 lg:col-span-2 mb-4 lg:mb-0">
          <p className="text-[2rem] lg:text-[3rem] font-bold text-center lg:text-start leading-tight">
            Why our products?
          </p>
        </div>
        <div className="col-span-12 lg:col-span-10 grid md:grid-cols-3 max-sm:grid-cols-2 lg:grid-cols-3 gap-4 max-sm:gap-1 max-sm:p-0  px-5">
          {content3.map((item, idx) => (
            <Card key={idx} content={item} isdep={true} />
          ))}
        </div>
      </section>

      <section className="w-full h-96 mt-4 bg-[#C0DDFF] pt-2 flex flex-col justify-around items-center">
        <div className="">
          <p className="text-[#444444] text-[33px] font-extrabold leading-3">
            Dsleep
          </p>
          <p className="text-[#444444] text-[33px] font-extrabold">Company</p>
        </div>
        <div className="text-center">
          <p className="w-[29rem] font-bold text-4xl max-sm:text-2xl max-sm:w-96 max-sm:px-10">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh.
          </p>
          <p className="mt-5 font-bold">
            Lorem ipsum dolor sit amet, consectetuer.
          </p>
        </div>
      </section>

      <section className="relative">
        <img
          className="object-cover w-full "
          src="https://images.hotukdeals.com/threads/raw/d9oaB/4533039_1/re/768x768/qt/60/4533039_1.jpg"
          alt=""
          srcset=""
        />
        <div className="absolute top-11 lg:right-10 max-sm:right-8 max-sm:top-18 md:text-[2em] md:right-5 lg:text-[4em]">
          <p className="font-bold ">"...one of the heighest scoring"</p>
          <p className="text-end font-bold">best we've tested.</p>
          <span className="flex justify-end text-end">
            <p className="font-bold text-end">Mattress</p>
            <p className="">Advisor</p>
          </span>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
