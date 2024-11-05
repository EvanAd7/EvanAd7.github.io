import React from "react";
import Project from "./Project";
import { projects } from "/data/projects";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProjectContainer() {
  return (
    <div className="mt-20 mb-10">
      <div>
        <Swiper
          initialSlide={0}
          loop={true}
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={60}
          grabCursor={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="py-8">
              <Project {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
