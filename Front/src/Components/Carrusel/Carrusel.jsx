import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'Swiper/css';
import 'Swiper/css/navigation';
import 'Swiper/css/pagination';

import "./Carrusel.css"

import carrusel1 from "../../assets/img/carrusel1.png"
import carrusel2 from "../../assets/img/carrusel2.png"
import carrusel3 from "../../assets/img/carrusel3.png"

const carrusel = () => {
    return (
        <Swiper
        modules={[Navigation, Pagination]}
        className="modificar"
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
        >
            <SwiperSlide>
                     <div className="image_carrusel">
                        <img src={carrusel1} alt="" />
                     </div>
             </SwiperSlide>
            <SwiperSlide>
                     <div className="image_carrusel">
                        <img src= {carrusel2} alt="" />
                      </div>
            </SwiperSlide>
            <SwiperSlide>
                    <div className="image_carrusel">
                        <img src= {carrusel3} alt="" />
                     </div>
                 </SwiperSlide>
             </Swiper>
    )
   
}

export default carrusel
