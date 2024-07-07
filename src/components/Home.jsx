import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Home = () => {
  return (
    <div>
      <Nav />
      <div>
        <header className="grid md:grid-cols-2 sm:text-center p-24 bg-gradient-to-r from-cyan-500 to-blue-500 animate__animated animate__fadeIn">
          <div>
            <img
              className="w-3/4 rounded-full animate__animated animate__pulse border-4 shadow-xl sm:mx-auto"
              src="./images/faculty.jpg"
              alt="faculty-image"
            />
          </div>
          <div className="flex flex-col gap-6 justify-center">
            <h1 className="text-7xl font-bold text-white">
              "Say Hello ! Coding Ott Systems
            </h1>
            <p className="text-2xl font-semibold">
              Enjoy complete digital learning experience with CodeSchool by
              CodingOtt.
            </p>
            <div className="flex gap-10 sm:flex sm:justify-center">
              <button className="bg-[#3a6880] px-12 py-4 text-white rounded-md text-md font-semibold hover:bg-orange-600">
                Learn More
              </button>
              <button className="border-2 px-12 py-4 text-white rounded-md text-md font-semibold">
                Watch Video
              </button>
            </div>
          </div>
        </header>

        <div className="p-24">
          <h1 className="text-5xl font-bold text-center">
            Benefits & Advantages
          </h1>
          <p className="mt-4 text-center text-gray-600 text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum porro
            similique cupiditate quaerat sit, maiores aliquam commodi labore est
            odit sapiente recusandae quisquam omnis esse quidem enim corrupti?
            Sed, delectus.
          </p>
          <div className="w-11/12 mx-auto mt-12 grid grid-cols-3 gap-10">
            <div className="shadow-lg rounded-md p-4 text-center">
              <i className="ri-artboard-line text-6xl"></i>
              <h1 className="text-2xl font-semibold mb-3">Great Faculty</h1>
              <p className="text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="shadow-lg rounded-md p-4 text-center">
              <i className="ri-artboard-line text-6xl"></i>
              <h1 className="text-2xl font-semibold mb-3">Latest Curriculam</h1>
              <p className="text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="shadow-lg rounded-md p-4 text-center">
              <i className="ri-tree-line text-6xl"></i>
              <h1 className="text-2xl font-semibold mb-3">Green Environment</h1>
              <p className="text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

        <div className=" p-12 grid grid-cols-2">
          <div>
            <Swiper className="mySwiper w-10/12">
              <SwiperSlide>
                <img src="./images/s1.png" alt="s1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/s2.png" alt="s1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/s3.png" alt="s1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/s4.png" alt="s1" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-col gap-6 justify-center">
            <h1 className="text-7xl font-bold text-orange-600">
              "Say Hello ! Coding Ott Systems
            </h1>
            <p className="text-2xl font-semibold">
              Enjoy complete digital learning experience with CodeSchool by
              CodingOtt.
            </p>
            <div className="flex gap-10 sm:flex sm:justify-center">
              <button className="bg-[#efe8cb] px-12 py-4 rounded-md text-md font-semibold hover:bg-orange-600">
                Learn More
              </button>
              <button className="border-2 px-12 py-4  rounded-md text-md font-semibold border-[#efe8cb]">
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
