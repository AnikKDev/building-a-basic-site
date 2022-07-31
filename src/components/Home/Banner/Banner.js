// src/components/Home/Banner/Banner.js
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Banner.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
const Banner = () => {
    return (
        <Swiper
            cssMode={true}
            navigation={true}
            loop={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            rewind={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper mt-12"
        >
            <SwiperSlide>
                <img className="" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />

            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <h1 className="text-6xl absolute text-white">This is a text inside Slider</h1>

            </SwiperSlide>


        </Swiper>
    );
};

export default Banner;